/*
 * @Author: MonsterDOG
 * @Date: 2023-08-30 09:59:23
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-08-30 15:25:44
 * @FilePath: \koa2-weibo-code\src\conf\db.js
 * @Description: 数据库配置文件
 */

const { isProd } = require('../utils/env')

let REDIS_CONF = {
  port: 6379,
  host: '127.0.0.1'
}

let MYSQL_CONF = {
  host: 'localhost',
  user: 'root',
  password: '123zhoujie123',
  port: '3306',
  database: 'koa2_weibo_db'
}

if (isProd) {
  // 线上的 redis 配置
  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  }

  // 线上的 mysql 配置
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '123zhoujie123',
    port: '3306',
    database: 'koa2_weibo_db'
  }
}

module.exports = {
  REDIS_CONF,
  MYSQL_CONF
}