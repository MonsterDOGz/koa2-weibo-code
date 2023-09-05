/*
 * @Author: MonsterDOG
 * @Date: 2023-09-05 16:03:18
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-09-05 16:55:09
 * @FilePath: \koa2-weibo-code\src\routes\api\user.js
 * @Description: user Api 路由
 */

const router = require('koa-router')()
const { isExist } = require('../../controller/user')

router.prefix('/api/user')

// 注册路由
router.post('/register', async (ctx, next) => {

})

// 用户名是否存在
router.post('/isExist', async (ctx, next) => {
  const { userName } = ctx.request.body
  ctx.body = await isExist(userName)
})

module.exports = router