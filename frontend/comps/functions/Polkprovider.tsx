import { ApiPromise, WsProvider } from "@polkadot/api";
import Keyring from "@polkadot/keyring";
import {
  cryptoWaitReady,
  mnemonicGenerate,
  mnemonicToMiniSecret,
  mnemonicValidate,
  ed25519PairFromSeed,
} from "@polkadot/util-crypto";

export const polkprovider = async () => {
  const wsProvider = new WsProvider(
    "wss://fraa-dancebox-3090-rpc.a.dancebox.tanssi.network"
  );
  const api = await ApiPromise.create({ provider: wsProvider });
  // console.log(api.tx.nfts);
  return api;
};

const keyring = new Keyring({ type: "sr25519" });

// mintNFT (collection, item, mintTo, witnessData )
export const mintNFT = async () => {
  const api = await polkprovider();
  await api.tx.nfts.mint(
    7,
    6,
    "5H9gzsvL5BFX6nXspUMqeCVGjVpacEtjAKGTWUwTMpL5mtaD",
    {}
  );
};

export const main = async () => {

  // Create mnemonic string for Alice using BIP39
  const mnemonicAlice = mnemonicGenerate();

  console.log(`Generated mnemonic: ${mnemonicAlice}`);

  // Validate the mnemonic string that was generated
  const isValidMnemonic = mnemonicValidate(mnemonicAlice);

  console.log(`isValidMnemonic: ${isValidMnemonic}`);

  // Create valid Substrate-compatible seed from mnemonic
  const seedAlice = mnemonicToMiniSecret(mnemonicAlice);

  // Generate new public/secret keypair for Alice from the supplied seed
  const { publicKey, secretKey } = ed25519PairFromSeed(seedAlice);
  
  await cryptoWaitReady();
  // Create a keyring instance (SR25519)
  // Import SR25519 account from mnemonic
  const keyring = new Keyring({ type: "sr25519" });
  const mnemonic = "5H9gzsvL5BFX6nXspUMqeCVGjVpacEtjAKGTWUwTMpL5mtaD";

  // Extract SR25519 address from mnemonic
  const newPair = keyring.addFromUri(`${mnemonicAlice}`);
  console.log(`Derived SR25519 Address from Mnemonic: ${newPair.address}`);
};
