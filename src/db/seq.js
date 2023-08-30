/*
 * @Author: MonsterDOG
 * @Date: 2023-08-30 15:20:56
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-08-30 15:30:45
 * @FilePath: \koa2-weibo-code\src\db\seq.js
 * @Description: 
 */
const sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')
const { isProd, isTest } = require('../utils/env')

const { host, user, password, database } = MYSQL_CONF
const conf = {
  host,
  dialect: 'mysql', // 指定当前数据库使用 mysql
}

if (isTest) {
  conf.logging = () => {}
}

// 线上环境，使用连接池
if (isProd) {
  conf.pool = {
    max: 5, // 连接池中最大的连接数量
    min: 0, // 最小
    idle: 10 * 1000, // 如果一个连接池 10 s 之内没有被使用，则释放
  }
}

// 创建 sequelize 实例
const seq = new sequelize(
  database, // 数据库名称
  user, // 用户名
  password, // 密码
  conf
)

// 测试连接
// seq
//   .authenticate()
//   .then(() => {
//     console.log('sequelize connect success')
//   })
//   .catch(() => {
//     console.log('sequelize connect error')
//   })

module.exports = seq
