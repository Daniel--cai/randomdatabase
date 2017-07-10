import { buildSchema } from 'graphql'

const schema = buildSchema(`
    type Query {
        me: User
        hello: String
    }

    type User {
        id: String
        name: String
    }
`);


export default schema