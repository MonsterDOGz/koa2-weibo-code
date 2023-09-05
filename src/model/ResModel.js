/*
 * @Author: MonsterDOG
 * @Date: 2023-09-05 16:48:22
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-09-05 16:51:22
 * @FilePath: \koa2-weibo-code\src\model\ResModel.js
 * @Description: res 的数据模型
 */

/**
 * @description: 基础模块
 * @return {*}
 */
class BaseModel {
  constructor({ errno, data, message }) {
    this.errno = errno
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}

/**
 * @description: 成功的数据模型
 * @return {*}
 */
class SuccessModel extends BaseModel {
  constructor(data = {}) {
    super({
      errno: 0,
      data
    })
  }
}

/**
 * @description: 失败的数据模型
 * @return {*}
 */
class ErrorModel extends BaseModel {
  constructor({ errno, message }) {
    super({
      errno,
      message
    })
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}
