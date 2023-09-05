/*
 * @Author: MonsterDOG
 * @Date: 2023-08-30 15:31:27
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-09-05 15:43:39
 * @FilePath: \koa2-weibo-code\src\db\sync.js
 * @Description: sequelize 同步数据库
 */
const seq = require('./seq')

// 需要同步的模型
require('./model/index')

// 测试连接
seq
  .authenticate()
  .then(() => {
    console.log('sequelize connect success')
  })
  .catch(() => {
    console.log('sequelize connect error')
  })

// 同步数据
seq.sync({ force: true }).then(() => {
  console.log('sync success')
  process.exit() // 退出进程
})