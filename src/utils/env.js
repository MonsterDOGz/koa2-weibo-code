/*
 * @Author: MonsterDOG
 * @Date: 2023-08-30 10:05:53
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-08-30 16:35:12
 * @FilePath: \koa2-weibo-code\src\utils\env.js
 * @Description: 环境变量
 */
const ENV = process.env.NODE_ENV

module.exports = {
  isDev: ENV === 'dev',
  notDev: ENV !== 'dev',
  isProd: ENV === 'production',
  notProd: ENV !== 'production',
  isTest: ENV === 'test',
  notTest: ENV !== 'test',
}
