/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('etcmall_merchant_user_shop', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    merchant_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_default: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'etcmall_merchant_user_shop'
  });
};
