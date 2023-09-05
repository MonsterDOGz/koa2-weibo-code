/*
 * @Author: MonsterDOG
 * @Date: 2023-09-05 16:31:19
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-09-05 16:31:32
 * @FilePath: \koa2-weibo-code\src\services\user.js
 * @Description: user services
 */

const { User } = require('../db/model/index')
const { formatUser } = require('./_format')

/**
 * @description: 获取用户信息
 * @param {string} username 用户名
 * @param {string} password 密码
 * @return {*}
 */
async function getUserInfo(username, password) {
  // 查询条件
  const whereOpt = {
    username
  }
  if (password) {
    Object.assign(whereOpt, { password })
  }
  
  // 查询
  const result = await User.findOne({
    attributes: ['id', 'username', 'nickname', 'picture', 'city'],
    where: whereOpt
  })
  if (result == null) {
    // 未找到
    return result
  }

  // 格式化
  const formatRes = formatUser(result.dataValues)

  return formatRes
}

module.exports = {
  getUserInfo
}