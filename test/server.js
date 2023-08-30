/*
 * @Author: MonsterDOG
 * @Date: 2023-08-30 14:37:40
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-08-30 14:39:11
 * @FilePath: \koa2-weibo-code\test\server.js
 * @Description: jest server
 */

const request = require('supertest')
const server = require('../src/app').callback()

module.exports = request(server)
