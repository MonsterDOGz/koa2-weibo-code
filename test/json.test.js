/*
 * @Author: MonsterDOG
 * @Date: 2023-08-30 14:39:22
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-08-30 14:41:15
 * @FilePath: \koa2-weibo-code\test\json.test.js
 * @Description: json test
 */

const server = require('./server')

test('json 接口返回数据格式正确', async () => {
  const res = await server.get('/json')
  expect(res.body).toEqual({
    title: 'koa2 json'
  })
  expect(res.body.title).toBe('koa2 json')
})