const { gql } = require('apollo-server-koa');

module.exports = gql`

    enum BookStatus {
        DELETED
        NORMAL
    }

    type Book {
        id: ID
        name: String
        price: Float
        status: BookStatus
    }

    extend type Query {
        book: Book
    }
`;