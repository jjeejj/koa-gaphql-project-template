const { gql } = require('apollo-server-koa');

module.exports = gql`
    type ShopInfo {
        id: ID!
        name: String
        code: String
        summary: String
        auditStatus: String
        auditNoPassReason: String
        auditTime: String
        status: String
        createdBy: String
        createdTime: String
        updatedBy: String
        updatedTime: String
    }

    extend type Query {
        getShopList: [ShopInfo]!
        getShopListByUserID(userId: Int) : [ShopInfo]!
    }
`;



