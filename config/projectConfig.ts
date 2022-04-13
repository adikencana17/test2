const projectConfig = {
  nftName: 'PGRobots',

  nftSymbol: 'PGR',

  maxSupply: 3500,

  maxMintAmountPerTxn: 100,

  mintCost: process.env.NODE_ENV === 'development' ? 100 : 0.01,

  networkName:
    process.env.NODE_ENV === 'development'
      ? 'Ethereum Mainnet' // 'Ethereum Mainnet'
      : 'Rinkey Testnet', // 'Rinkeby Testnet'

  chainName: 'ETH', // 'ETH'

  chainId: process.env.NODE_ENV === 'development' ? 1 : 4, // Ethereum (1), Rinkeby (4)

  siteDomain: 'www.pgrobots.com',

  siteUrl:
    process.env.NODE_ENV === 'development'
      ? `https://your_site_domain`
      : 'http://localhost:3000',

  twitterUsername: '@zukibirds',

  twitterUrl: 'https://twitter.com/zukibirdse',

  discordUrl: 'https://discord.gg/testest',

  openseaCollectionUrl:
    process.env.NODE_ENV === 'development'
      ? 'https://opensea.io/collection/your_opensea_collection_name'
      : 'https://testnets.opensea.io/collection/your_opensea_collection_name',

  contractAddress:
    process.env.NODE_ENV === 'development'
      ? 'your_mainnet_contract_address'
      : 'your_testnet_contract_address',

  scanUrl:
    process.env.NODE_ENV === 'development'
      ? 'https://etherscan.io/address/your_ethereum_contract_addres'
      : 'https://rinkeby.etherscan.io/address/0x9ebaca53634d3bcb29b3d6defbb32ae17d389014',
  // 'https://etherscan.io/address/your_ethereum_contract_address'
  // 'https://rinkeby.etherscan.io/address/your_rinkeby_contract_address'
};

export default projectConfig;
