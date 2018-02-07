const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
// The data below is mocked.
const data = require('./data/pokemon.js');

// The schema should model the full data object available.
const schema = buildSchema(`
  type Pokemon {
    id: Int!
    name: String
  }
  type Query {
    pokemons: [Pokemon]
    pokemon(name: String): Pokemon
  }
`);

// The root provides the resolver functions for each type of query or mutation.
const root = {
  pokemons: () => {
    return data;
  },
  pokemon: (request) => {
    return data.find(pokemon => pokemon.name === request.name);
  }
};

// Start your express server!
const app = express();

/*
The only endpoint for your server is `/graphql`– if you are fetching a resource, 
you will need to POST your query to that endpoint. Suggestion: check out Apollo-Fetch
or Apollo-Client. Note below where the schema and resolvers are connected. Setting graphiql
to 'true' gives you an in-browser explorer to test your queries.
*/
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');
