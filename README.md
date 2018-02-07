# GraphQL Meetup
  
## 1. Server

Clone this repository to your computer. Then, from the root directory, run `npm install` and `npm start`.

Visit `http://localhost:4000/graphql` to test that the server is running. 

Here are some queries you can test:

```
{
  pokemons {
    id
    name
  }
}
```

```
{
  pokemon(name: "Pikachu") {
    id
    name
  }
}
```

## 2. Schema

- Right now, the server is only set up to provide the Pokemon's id and name. What if you also wanted to get their weight, attacks, and evolutions?

- To do that, you will need to update the schema. The schema (in `server/index.js`) should model the full data object available. Take a look at `server/data/pokemon.js` to see what other fields you can add to the schema.

- Update your schema so it fully represents your Pokemon data object!

- Test your work! Go back to GraphiQL to test some queries. Remember, the magic of GraphQL is that you don't have to get back the full data object, even if it is available. Click `Docs` on the right side of the explorer to see your full schema.

## 3. Resolvers

- The resolvers in `server/index.js` are functions that return the data requested in the queries. You will notice that the names of these functions match the names of the queries listed in the type `Query` in your schema.

- This is where you can add additional types of resolvers. Think about what other types of queries you are interested in and add them here!

- This is also where you would add mutations (you would need to create a type called `Mutation` in your schema and list them there as well).

## 4. Queries & Mutations

- You can continue to test all of this using `localhost:4000/graphql`. But let's say you want to connect a frontend to this server. The only endpoint for your server is `/graphql`– if you are fetching a resource, you will need to POST your query to that endpoint (whether it is a query or a mutation). Suggestion: check out Apollo-Fetch or Apollo-Client.
