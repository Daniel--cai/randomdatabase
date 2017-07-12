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
  console.log(response);;
});

import { clip, midi } from '../scribbletune';
const i1 = {
  notes: ['d4','f#4','b4','d5','c#5','b4','a#4','b4'],
  pattern: 'xxxxxxxx_____',
},
i2 = {
  notes: ['b4','c#5','d5','e5','f#5','d5','f#5','d5','f#5'],
  pattern: 'x___x___x___x___x___x___x___x___x___',
},
v1 = {
  notes: ['f#4', 'd5', 'f#4','c#5','f#4','b4','b2'],
  pattern: 'x_x____x_x____x_x_x_',
  bass: []
},
v2 = {
  notes: ['Bmin3','Bmin3','Bmin3','d5', 'c#5','b4','a4','g4','g2'],
  pattern: 'x_____x_____x_____x_x_x_x_x_x_',
},
v3 = {
  notes: ['Gmaj3','Gmaj3','Gmaj3','d5', 'c#5','d5','c#5','d5','d3'],
  pattern: 'x_____x_____x_____x_x_x_x_x_x_',
},
v4 = {
  notes: ['Dmaj3','Dmaj3','Dmaj3', 'd5','c#5','d5','e5','c#5','a2'],
  pattern: 'x_____x_____x_____x_x_x_x_x_x_'
},
v5 = {
  notes: ['Amaj3','Amaj3'],
  pattern: 'x_____x_____'
},
c1 = {
  notes: ['f#5','e5','f#5','e5','f#5','e5','f#5','e5','f#5','e5','f#5','g5','g5','d5'],
  pattern: 'xxxxx_xx_xxxxxx_x___'
},
c2 = {
  notes: ['g5','g5','g5','g5','g5','a5','g5','f#5','f#5','f#5','f#5','f#5','a5','g5','f#5','e5' ],
  pattern: 'xxxx_xxx_x___xxxx_xxx_x____'
},
c3 = {
  notes: ['e5','e5','e5','e5','e5','e5','e5','e5','c#5','d5' ],
  pattern: 'xxxxxxxxx_x_'
}
midi([i1,i2,v1,v2,v3,v4,v5,v1,c1,c2,c3,c1,c2].reduce((a,b)=>a.concat(clip(b)),[]), 'music.mid',50);

