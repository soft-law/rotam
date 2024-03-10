// Import
import { ApiPromise, WsProvider } from '@polkadot/api';

export const polkprovider = async () => {
  // Construct API provider
  const wsProvider = new WsProvider('wss://fraa-dancebox-3090-rpc.a.dancebox.tanssi.network');
  const api = await ApiPromise.create({ provider: wsProvider });

  // Code goes here

  //create collection
  // const createCollection = async ()=> {
  //   api.tx.nfts.create(0x6f03000000000000000000e0fa812659dc8fe6f7b8455a9c3305832742df664ee89918b623ba3a589f0a5200,{
  //     settings:  BigInt("1234")
  //   });
  // };

  // await createCollection();
  
  // mintNFT (collection, item, mintTo, witnessData )
  const mintNFT = async ()=> {
    api.tx.nfts.mint(7,3, "0x6f03000000000000000000e0fa812659dc8fe6f7b8455a9c3305832742df664ee89918b623ba3a589f0a5200",{
    });
  }
  // await mintNFT();

  console.log(api.tx.nfts)

  await api.disconnect();
};

polkprovider();