/* eslint-disable no-unused-vars */
const { getShopListByUserID } = require('../../services/shop/index.js');

const resolvers = {
    Query: {
        // 根据商家 用户 id 获取店铺列表
        getShopListByUserID: async (parent, { userId }, context, info) => {
            return await getShopListByUserID(userId);
        },
        getShopList: () => {
            return [
                {
                    id: "tetet",
                    name: "测试商铺",
                    code: "ADS"
                }
            ]
        }
    }
};

module.exports = resolvers;