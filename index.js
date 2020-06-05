// 日志对象
const logger = require('./utils/log4jsLogger');
const config = require('./configs/config.js');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const koaStatic = require('koa-static');
const requestTime = require('./middlewares/requestTime.js');

global.logger = logger;
const app = new Koa();

app.use(requestTime);

// 处理静态资源, 根目录为 statics
app.use(koaStatic(__dirname));

// 处理请求的 body 参数
app.use(bodyParser());

// 引入路由分发
const router = require('./routes');
app.use(router.routes()).use(router.allowedMethods());

// 启动 GraphQL 服务
const server = require('./graphql/index.js');

server.applyMiddleware({ app });


app.listen(config.port, config.host, () => {
    global.logger.info(`server is runnning http://${config.host}:${config.port}`);
});

// 捕获未被处理的系统异常
process.on('uncaughtException', (err) => {
    global.logger.error("uncaughtException err", err.stack);
});