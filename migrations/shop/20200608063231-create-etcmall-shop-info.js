'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('etcmall_shop_info', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(32),
        allowNull: false
      },
      code: {
        type: DataTypes.STRING(32),
        allowNull: false
      },
      summary: {
        type: DataTypes.STRING(512),
        allowNull: true
      },
      audit_status: {
        type: DataTypes.CHAR(1),
        allowNull: false,
        defaultValue: '0'
      },
      audit_no_pass_reason: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      audit_time: {
        type: DataTypes.DATE,
        allowNull: true
      },
      status: {
        type: DataTypes.STRING(1),
        allowNull: false,
        defaultValue: '1'
      },
      created_by: {
        type: DataTypes.STRING(32),
        allowNull: false
      },
      created_time: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updated_by: {
        type: DataTypes.STRING(32),
        allowNull: false
      },
      updated_time: {
        type: DataTypes.DATE,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {

  }
};