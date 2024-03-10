// Import
import { ApiPromise, WsProvider } from '@polkadot/api';

const main = async () => {
  // Construct API provider
  const wsProvider = new WsProvider('wss://fraa-dancebox-3090-rpc.a.dancebox.tanssi.network');
  const api = await ApiPromise.create({ provider: wsProvider });

  // Code goes here

  await api.disconnect();
};

main();