/*
 * @Author: MonsterDOG
 * @Date: 2023-09-05 16:07:10
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-09-05 17:26:36
 * @FilePath: \koa2-weibo-code\src\controller\user.js
 * @Description: user controller
 */

const { getUserInfo, createUser } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { registerUserNameNotExistInfo, registerUserNameExistInfo } = require('../model/ErrorInfo')

/**
 * @description: 用户名是否存在
 * @param {string} userName
 * @return {*}
 */
async function isExist(userName) {
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    // 已存在
    return new SuccessModel(userInfo)
  } else {
    // 不存在
    return new ErrorModel(registerUserNameNotExistInfo)
  }
}

/**
 * @description: 登录
 * @param {string} userName
 * @param {string} password
 * @param {number} gender 性别(1 男，2 女，3 保密)
 * @return {*}
 */
async function register({ userName, password, gender }) {
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    // 用户名已存在
    return new ErrorModel(registerUserNameExistInfo)
  }

  try{
    await createUser({
      userName,
      password,
      gender
    })
    return new SuccessModel()
  } catch (e) {
    console.error(e.message, e.stack)
    return new ErrorModel(registerFailInfo)
  }
}

module.exports = {
  isExist,
  register
}
