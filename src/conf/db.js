/*
 * @Author: MonsterDOG
 * @Date: 2023-08-30 09:59:23
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-08-30 10:08:40
 * @FilePath: \koa2-weibo-code\src\conf\db.js
 * @Description: 数据库配置文件
 */

const { isProd } = require('../utils/env')

let REDIS_CONF = {
  port: 6379,
  host: '127.0.0.1'
}

if (isProd) {
  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  }
}

module.exports = {
  REDIS_CONF
}