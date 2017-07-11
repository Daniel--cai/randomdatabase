import * as express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import * as bodyParser from 'body-parser';
import  schema  from './data/schema';
import { graphql } from 'graphql';

import * as http from 'http';
const PORT = process.env.PORT || 3000;

const graphQLServer = express();

graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
graphQLServer.listen(PORT, () => console.log(
  `GraphiQL is now running on http://localhost:${PORT}/graphiql`
));

var root = {
  hello: () => {
    return 'Hello world!';
  },
};

// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});

import * as scribble from 'scribbletune';

let intro1 = scribble.clip({
  notes: ['d4','f#4','b4','d5','c#5','b4','a#4','b4'],
  pattern: 'xxxxxxxx_____'
})

let intro2 = scribble.clip({
  notes: ['b4','c#5','d5','e5','f#5','d5','f#5','d5','f#5'],
  pattern: 'x__x__x__x__x__x__x__x__x_____'
})

let c1 = scribble.clip({
  notes: ['f#4', 'd5', 'f#4','c#5','f#4','b4','b2'],
  pattern: 'x_x____x_x____x_x_x_',
});

let c2 = scribble.clip({
  notes: ['Bmin3','Bmin3','Bmin3','d5', 'c#5','b4','a4','g4','g2'],
  //pattern: 'x_____x_____x_x_x_x_x_x_x_'
  pattern: 'x_____x_____x_xxxxxx_'
})
let c3 = scribble.clip({
  notes: ['Gmaj3','Gmaj3','Gmaj3','d5', 'c#5','d5','c#5','d5','d3'],
  pattern: 'x_____x_____x_xxxxxx_'
})
let c4 = scribble.clip({
  notes: ['Dmaj3','Dmaj3','Dmaj3', 'd5','c#5','d5','e5','c#5','a2'],
  pattern: 'x_____x_____x_xxxxxx_'
})
let c5 = scribble.clip({
  notes: ['Amaj3','Amaj3'],
  pattern: 'x____x____'
})

let c6 = scribble.clip({
  notes: ['f#5','e5','f#5','e5','f#5',
          'e5','f#5','e5','f#5','e5',
          'f#5','g5','g5','d5'],
  //pattern: 'x_x_x_x_x__x_x__x_x_x_x_x_x__x_____'
  pattern: 'xxxxx_xx_xxxxxx_x___'
})

let c7 = scribble.clip({
  notes: ['g5','g5','g5','g5','g5','a5','g5','f#5',
          'f#5','f#5','f#5','f#5','a5','g5','f#5','e5' ],
  pattern: 'xxxx_xxx_x___xxxx_xxx_x____'
})

let c8 = scribble.clip({
  notes: ['e5','e5','e5','e5','e5','e5','e5','e5','c#5','d5' ],
  pattern: 'xxxxxxxxx_x_'
})

scribble.midi(intro1.concat(intro2,c1,c2,c3,c4,c5,c1,c6,c7,c8,c6,c7))



