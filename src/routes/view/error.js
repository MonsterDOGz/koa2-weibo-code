/*
 * @Author: MonsterDOG
 * @Date: 2023-08-31 14:34:08
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-08-31 14:36:47
 * @FilePath: \koa2-weibo-code\src\routes\view\error.js
 * @Description: error 404 路由
 */
const router = require('koa-router')()

// error
router.get('/error', async (ctx, next) => {
  await ctx.render('error')
})

// 404
router.get('*', async (ctx, next) => {
  await ctx.render('404')
})

module.exports = router