/*
 * @Author: MonsterDOG
 * @Date: 2023-09-05 16:31:19
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-09-05 17:23:51
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
async function getUserInfo(userName, password) {
  // 查询条件
  const whereOpt = {
    userName
  }
  if (password) {
    Object.assign(whereOpt, { password })
  }
  
  // 查询
  const result = await User.findOne({
    attributes: ['id', 'userName', 'nickname', 'picture', 'city'],
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

/**
 * @description: 创建用户
 * @param {string} userName 用户名
 * @param {string} password 密码
 * @param {number} gender 性别(1 男，2 女，3 保密)
 * @param {string} nickName 昵称
 * @return {*}
 */
async function createUser({ userName, password, gender = 3, nickName }) {
  const result = await User.create({
    userName,
    password,
    nickName: nickName ? nickName : userName,
    gender
  })
  return result.dataValues
}

module.exports = {
  getUserInfo,
  createUser
}