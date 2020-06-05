/* eslint-disable no-unused-vars */
// graphql book resolvers
const BookStatus = {
    DELETED : 0,
    NORMAL: 1
};

const resolvers = {
    BookStatus,
    Query: {
        book: (parent, args, context, info) => {
            return {
                id: 122,
                name: '地球往事',
                price: 66.3,
                status: BookStatus.NORMAL
            }
        }
    }
};

module.exports = resolvers;
