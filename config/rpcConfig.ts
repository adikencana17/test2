// For Ethereum, use the Infura endpoints
export default function rpcConfig(infuraKey?: string) {
  return process.env.NODE_ENV === 'production'
    ? 'https://mainnet.infura.io/v3/cd5f677e2ff24d96861c383e8ad77082' // `https://mainnet.infura.io/v3/${infuraKey}`
    : 'https://rinkeby.infura.io/v3/cd5f677e2ff24d96861c383e8ad77082'; // `https://rinkeby.infura.io/v3/${infuraKey}`
}
