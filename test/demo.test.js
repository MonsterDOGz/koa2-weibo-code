/*
 * @Author: MonsterDOG
 * @Date: 2023-08-30 14:32:15
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-08-30 15:16:09
 * @FilePath: \koa2-weibo-code\test\demo.test.js
 * @Description: test demo
 */

function sum(a, b) {
  return a + b
}

test('10 + 20 应该等于 30', () => {
  const res = sum(10, 20)
  expect(res).toBe(30)
})

test('10 + 20 应该不等于 40', () => {
  const res = sum(10, 20)
  expect(res).not.toBe(40)
})
