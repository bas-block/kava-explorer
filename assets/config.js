const dev = process.env.NODE_ENV === `development`;
const stargate =
  process.env.STARGATE ||
  (dev
    ? `https://lcd.kava-testnet-3000.bas.network`
    : `https://lcd.kava-testnet-3000.bas.network`);

const rpc =
  process.env.RPC ||
  (dev
    ? `https://rpc.kava-testnet-3000.bas.network`
    : `https://rpc.kava-testnet-3000.bas.network`);

const gql =
  process.env.GQL ||
  (dev
    ? `http://testnet.explorekava.com/gql/graphql`
    : `https://testnet.explorekava.com/gql/graphql`);
const gql_ws =
  process.env.GQL_WS ||
  (dev
    ? `ws://testnet.explorekava.com/gql/subscriptions`
    : `wss://testnet.explorekava.com/gql/subscriptions`);

const stakeDenom = process.env.STAKE_DENOM ? process.env.STAKE_DENOM : "ukava";

export default {
  development: dev,
  network: process.env.NETWORK || `kava-testnet-3000`,
  stargate,
  rpc,
  gql,
  gql_ws,
  stakeDenom,
  node_halted_timeout: 120000,
  block_timeout: 10000,
  default_gas_price: dev ? 1e-9 : 2.5e-8, // recommended from Cosmos Docs
  version: process.env.RELEASE,
  decimals: 6,
  consensusInterval: 1000,
  coingecko_id: process.env.COINGECKO_ID
};
