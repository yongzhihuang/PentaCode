const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Crypto {
    name: String
    price: Float
    change_pct: Int
  }

  type Query {
    getCrypto(name: String): Crypto
    getAllCrypto: [Crypto]
  }
`;

const cryptos = [
  {
    name: 'Bitcoin',
    price: 50000.23,
    change_pct: 5
  },
  {
    name: 'Ethereum',
    price: 4003.22,
    change_pct: 15
  },
  {
    name: 'Doge',
    price: 0.45,
    change_pct: 35
  },
];

const resolvers = {
  Query: {
    getCrypto: (_, { name }) => cryptos.find(coin => coin.name === name),
    getAllCrypto: () => cryptos
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({url}) => {
  console.log(`GQL server started at ${url}`);
});