# Mysql Model 初始化文件

## 商铺

#### 商铺信息

`sequelize-auto -h 127.0.0.1 -u root -x 12345678 -d etcmall -e mysql -o ./models/shop/ -t etcmall_shop_info`

#### 商家商铺关联信息

`sequelize-auto -h 127.0.0.1 -u root -x 12345678 -d etcmall -e mysql -o ./models/shop/ -t etcmall_merchant_user_shop`

>需要安装 sequelize-cli, sequelize-auto 和 mysql