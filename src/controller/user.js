/*
 * @Author: MonsterDOG
 * @Date: 2023-09-05 16:07:10
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-09-05 17:04:16
 * @FilePath: \koa2-weibo-code\src\controller\user.js
 * @Description: user controller
 */

const { getUserInfo } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { registerUserNameNotExistInfo } = require('../model/ErrorInfo')

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

module.exports = {
  isExist
}
