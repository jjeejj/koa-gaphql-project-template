/**
 * 功能：
 * 1:负责读取 components 下的所有实体的 Schema 和 Resolver
 * 2: 负责创建 Apollo Server
 */
const isProd = process.env.NODE_ENV === 'production'; // 是否是生产环境
const fs = require('fs');
const path = require('path');
const { ApolloServer , gql } = require('apollo-server-koa');

const componentPath = path.resolve(__dirname, '../components');

// 类型定义和 resolver 文件名
const typeDefFileName = 'schema.js', resolverFileName = 'resolver.js';

const linkSchema = gql`
    type Query {
        _: Boolean
    }
    type Mutation {
        _: Boolean
    }
    type Subscription {
        _: Boolean
    }
`;
// 处理 component 文件夹下的文件
function generateTypeDefsAndResolvers () {
    const typeDefs = [linkSchema];
    const resolvers = {};

    const __generateAllComponentRecursive = (componentPath) => {
        const list = fs.readdirSync(componentPath); // 文件夹
        list.forEach((item) => {
            const resolverPath = path.resolve(componentPath, item);
            const stat = fs.statSync(resolverPath);
            const isDir = stat.isDirectory();
            const isFile = stat.isFile();
            if (isDir) {
                __generateAllComponentRecursive(resolverPath);
            } else if (isFile && item === resolverFileName) {
                const resolversPerFile = require(resolverPath);
                Object.keys(resolversPerFile).forEach((k) => {
                    if (!resolvers[k]) {
                        resolvers[k] = {};
                    }
                    resolvers[k] = { ...resolvers[k], ...resolversPerFile[k]};
                });
            } else if (isFile && item === typeDefFileName) {
                typeDefs.push(require(resolverPath));
            }
        });
    };
    __generateAllComponentRecursive(componentPath);
    return { typeDefs, resolvers };
}

// apollo Server 服务启动的配置项
const apolloServerOptions = {
    ...generateTypeDefsAndResolvers(),
    playground: !isProd,
    introspection: !isProd,
    mocks: false
};

module.exports = new ApolloServer({...apolloServerOptions});
