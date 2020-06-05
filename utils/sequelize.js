/**
 * Created by zhaopeiran on 2018/11/12.
 * Sequelize 连接文件
 */
const config = require('../configs/config.json');
const Sequelize = require('sequelize');
const mysqlConfig = config.mysql;

const sequelize = new Sequelize(mysqlConfig.database, mysqlConfig.username, mysqlConfig.password, {
    host: mysqlConfig.host,
    dialect: mysqlConfig.dialect,
    operatorsAliases: mysqlConfig.operatorsAliases,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: false,
    timezone: '+08:00'
});
sequelize.authenticate().catch((err) => {
    global.logger.err(`Unable to connect to the database: ${mysqlConfig.host}`, err)
});

module.exports = {
    sequelize,
    Sequelize
};