import * as express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import * as bodyParser from 'body-parser';
import * as schema from './data/schema';
import App from './app';
import * as http from 'http';
const PORT = process.env.PORT || 3000;

App.set('port', PORT);
const server = http.createServer(App);
server.listen(PORT);
server.on('listening', onListening);

function onListening(){
  let addr = server.address();
  let bind = (typeof addr === 'string') ? `pipe ${addr}`:`port ${addr.port}`;
}

//const graphQLServer = express();

//graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
//graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
//graphQLServer.listen(PORT, () => console.log(
//  `GraphiQL is now running on http://localhost:${PORT}/graphiql`
//));