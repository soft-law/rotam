import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";
import { expandMetadata } from "@polkadot/metadata";
import { stringCamelCase, u8aToHex } from "@polkadot/util";
import {
  blake2AsHex,
  cryptoWaitReady,
  encodeAddress,
} from "@polkadot/util-crypto";
import type { SignerPayloadJSON, AnyJson } from "@polkadot/types/types";

export type Args = Record<string, AnyJson>;

export interface TxMethod {
  args: Args;
  name: string;
  pallet: string;
}

const TYPE_PREFIX = {
  ecdsa: new Uint8Array([2]),
  ed25519: new Uint8Array([0]),
  ethereum: new Uint8Array([2]),
  sr25519: new Uint8Array([1]),
};

const main = async () => {
  await cryptoWaitReady();

  // const endpoint = "wss://rpc.polkadot.io/";
  const endpoint = "ws://127.0.0.1:9944";

  const provider = new WsProvider(endpoint);

  const api = await ApiPromise.create({ provider });

  const EXTRINSIC_VERSION = api.runtimeMetadata.asV12.extrinsic.version.toNumber();
  console.log("Extrinsic version", EXTRINSIC_VERSION);

  const [tipHash, genesis, property] = await Promise.all([
    api.rpc.chain.getFinalizedHead(),
    api.rpc.chain.getBlockHash(0),
    api.rpc.system.properties(),
  ]);

  const { block: head } = await api.rpc.chain.getBlock(tipHash);

  console.log(
    "RuntimeVersion",
    "SpecVersion",
    api.runtimeVersion.specVersion.toNumber(),
    "TransactionVersion",
    api.runtimeVersion.transactionVersion.toNumber()
  );

  console.log(`System Property`, property.toHuman());

  console.log(
    "FinalizedHead block",
    head.header.number.toNumber(),
    head.header.hash.toString()
  );
  console.log("Genesis hash", genesis.toString());

  const keyring = new Keyring();
  const alice = keyring.addFromUri("//Alice", { name: "Alice" }, "sr25519");

  const address = encodeAddress(
    alice.publicKey,
    Number(property.ss58Format.unwrapOr(42).toString())
  );

  const accountInfo = await api.query.system.account.at(head.hash, address);
  console.log("Alice's Account:", address, accountInfo.toHuman());

  const tokenDecimal = property.tokenDecimals.isSome
    ? property.tokenDecimals.unwrap()[0].toBigInt()
    : BigInt(15);
  const oneToken = (BigInt(10) ** tokenDecimal).toString(10);
  const RawMethod: TxMethod = {
    name: "transfer", // or 'transferKeepAlive'
    pallet: "balances",
    // transfer 1 TOKEN to Bob
    args: {
      value: oneToken,
      dest: "5FUemFUxfA6KoK9TPLzQWMzWpHewga9ok2FLKznrXM9cSn3M", // Bob
    },
  };

  // create a new tx extrinsics
  const { tx } = expandMetadata(api.registry, api.runtimeMetadata);
  const methodFunction = tx[RawMethod.pallet][RawMethod.name];

  // create unsigned transaction params
  const unsigned: SignerPayloadJSON = {
    address: address,
    blockHash: head.header.hash.toHex(),
    blockNumber: head.header.number.toHex(),
    era: api.registry
      .createType("ExtrinsicEra", {
        current: head.header.number.toNumber(),
        period: 64,
      })
      .toHex(),
    genesisHash: genesis.toString(),
    method: methodFunction(
      ...methodFunction.meta.args.map((arg) => {
        const a = RawMethod.args[stringCamelCase(arg.name.toString())];
        if (a === void 0) {
          throw new Error("undefined method");
        }
        return a;
      })
    ).toHex(),
    nonce: accountInfo.nonce.toHex(),
    specVersion: api.runtimeVersion.specVersion.toHex(),
    transactionVersion: api.runtimeVersion.transactionVersion.toHex(),
    tip: api.registry.createType("Compact<Balance>", 0).toHex(),
    signedExtensions: api.registry.signedExtensions,
    version: EXTRINSIC_VERSION,
  };

  // encode transaction
  const signingPayload = api.registry.createType("ExtrinsicPayload", unsigned, {
    version: EXTRINSIC_VERSION,
  });

  console.log(`Payload to Sign ${signingPayload.toHex()}`);

  // get the message to sign
  let message = signingPayload.toU8a({ method: true });
  if (message.length > 256) {
    message = api.registry.hash(message); // blake2b_256
  }

  // PRIVATE KEY TYPE + RAW SIGNATURE
  const signature = alice.sign(message, { withType: true });
  console.log("Signature is ", u8aToHex(signature));
  if (signature[0] != TYPE_PREFIX.sr25519[0]) {
    throw new Error("should be sr25519 signature prefix");
  }

  // concat the unsigned transaction with signature
  const newtx = api.registry
    .createType(
      "Extrinsic",
      { method: unsigned.method },
      { version: EXTRINSIC_VERSION }
    )
    .addSignature(unsigned.address, signature, unsigned);

  console.log(`Signed Transaction `, newtx.toHuman());

  // get raw transaction and transction hash(aka txid)
  const rawtx = newtx.toHex();

  console.log(`Raw Transaction:`, rawtx);
  const wantTxid = blake2AsHex(rawtx);

  // dry run with raw transaction
  // YOU SHOULD CONNECT NODE WITH --rpc-methods=Unsafe
  // resovle error and see here: https://wiki.polkadot.network/docs/en/maintain-errors
  const dryrun = await api.rpc.system.dryRun(rawtx);
  if (dryrun.isErr) {
    throw new Error(`failed to dryrun: ${JSON.stringify(dryrun.toHuman())}`);
  }

  // Send transaction
  const gotTxid = await api.rpc.author.submitExtrinsic(newtx);
  if (gotTxid.toString() !== wantTxid) {
    throw new Error(`Want Txid ${wantTxid} but got ${gotTxid}`);
  }
  console.log(`The TxID `, wantTxid);

  await api.disconnect();
};

main()
  .catch(console.log)
  .finally(() => process.exit(0));