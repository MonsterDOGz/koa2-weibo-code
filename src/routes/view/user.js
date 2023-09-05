/*
 * @Author: MonsterDOG
 * @Date: 2023-09-05 11:09:14
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-09-05 11:11:03
 * @FilePath: \koa2-weibo-code\src\routes\view\user.js
 * @Description: user view 路由
 */
const router = require('koa-router')()

router.get('/login', async (ctx, next) => {
  await ctx.render('login', {})
})

router.get('/register', async (ctx, next) => {
  await ctx.render('register', {})
})

module.exports = router