const { sequelize } = require('../../utils/sequelize.js');
const EtcmallShopInfo = sequelize.import('../../models/shop/etcmall_shop_info.js');
const EtcmallMerchantUserShop = sequelize.import('../../models/shop/etcmall_merchant_user_shop.js');

EtcmallShopInfo.hasOne(EtcmallMerchantUserShop, {
    foreignKey: 'shop_id',
    sourceKey: 'id',
    as: 'userShop',
});

// 需要返回的属性
const _attr = [
    'id',
    'name',
    'code',
    'summary'
];
/**
 * 根据商家 用户 id 获取店铺列表
 */
const getShopListByUserID = async function(userId) {
    return EtcmallShopInfo.findAll({
        raw: true,
        where: {
            '$userShop.merchant_user_id$': userId
        },
        include: [
            {
                model: EtcmallMerchantUserShop,
                required: true,
                as: 'userShop',
                attributes: []
            }
        ],
        attributes: _attr
    })
};


module.exports = {
    getShopListByUserID
};

