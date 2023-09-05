/*
 * @Author: MonsterDOG
 * @Date: 2023-09-05 15:35:00
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-09-05 15:35:49
 * @FilePath: \koa2-weibo-code\src\db\types.js
 * @Description: 封装 sequelize 数据类型
 */
const Sequelize = require('sequelize')

module.exports = {
  STRING: Sequelize.STRING,
  DECIMAL: Sequelize.DECIMAL,
  TEXT: Sequelize.TEXT,
  INTEGER: Sequelize.INTEGER,
  BOOLEAN: Sequelize.BOOLEAN
}