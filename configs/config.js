/**
 * 应用服务的配置信息
*/
const env = process.env.NODE_ENV || 'development';
const mysqlConfig = require('./config.json'); 

// 公共的配置
const commonConf = {
    host: '0.0.0.0',
    port: 6080,
    isProd: env === "production" 
};

// 不同环境的配置
/**
 * @type {object}
*/
const envConf = {
    development: {

    },
    test: {

    },
    production: {

    }
};

function getConfig () {
    /** @type {object} */
    let config;
    return function getInstance () {
        if (!config) {
            let _envConf = envConf[env];
            config = Object.assign(commonConf, _envConf, { 'mysql': mysqlConfig[env]});
        }
        return config;
    };
}

module.exports = getConfig()();