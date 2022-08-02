import request from "@/utils/request";

/**
 *登录请求
 * @param {Objiect} data loginName password code 等
 * @returns Promise
 */
export function login(data) {
  return request({
    url: "/api/user-service/user/login",
    method: "POST",
    data,
  });
}

/**
 * 图片验证码
 * @returns Promise
 */
export function getCode(clientToken) {
  return request({
    url: `/api/user-service/user/imageCode/${clientToken}`,
    // method: "GET",
  });
}
