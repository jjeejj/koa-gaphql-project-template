const ShopRepositories = require('../../repositories/shop/index.js');

/**
 * 根据商家 用户 id 获取店铺列表
 */
const getShopListByUserID = async (userId) => {
    let userList = await ShopRepositories.getShopListByUserID(userId);
    return userList;
};

module.exports = {
    getShopListByUserID
}