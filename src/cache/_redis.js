/*
 * @Author: MonsterDOG
 * @Date: 2023-08-30 10:01:22
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-08-30 10:42:05
 * @FilePath: \koa2-weibo-code\src\cache\_redis.js
 * @Description: 连接 redis 的方法 get set
 */

const redis = require('redis')
const { REDIS_CONF } = require('../conf/db')

// 创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)

!(async function () {
  // 连接
  await redisClient.connect().then(() => {
    console.log('redis connect success')
  }).catch(console.error)
})()

/**
 * @description: redis set
 * @param {string} key 键
 * @param {string} val 值
 * @param {number} timeout 过期时间，单位 s
 * @return {*}
 */
async function set(key, val, timeout = 60 * 60) {
  if (typeof val === 'object') {
    val = JSON.stringify(val)
  }
  await redisClient.set(key, val)
  await redisClient.expire(key, timeout)
}

/**
 * @description: redis get
 * @param {string} key 键
 * @return {*} 
 */
async function get(key) {
  try {
    const val = await redisClient.get(key)
    if (val === null) {
      return null
    }
    try {
      return JSON.parse(val)
    } catch (err) {
      return val
    }
  } catch (err) {
    throw err
  }
}

module.exports = {
  set,
  get
}
