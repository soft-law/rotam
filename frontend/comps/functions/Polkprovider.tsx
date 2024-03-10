import { ApiPromise, WsProvider } from '@polkadot/api';

export const polkprovider = async () => {
  const wsProvider = new WsProvider('wss://fraa-dancebox-3090-rpc.a.dancebox.tanssi.network');
  const api = await ApiPromise.create({ provider: wsProvider });
  console.log(api.tx.nfts);
  return api;
};

// mintNFT (collection, item, mintTo, witnessData )
export const mintNFT = async () => {
  const api = await polkprovider(); 
  await api.tx.nfts.mint(7, 3, "0x6f03000000000000000000e0fa812659dc8fe6f7b8455a9c3305832742df664ee89918b623ba3a589f0a5200", {});
}
