import envConfig from "../config/envConfig"
/**
 * 请求头
 */
var header = {
  'content-type': 'application/x-www-form-urlencoded',
  'Authorization': "Bearer " + wx.getStorageSync("token"),
  'os': 'android',
  'version': '1.0.0',
  'device_token': 'ebc9f523e570ef14',
}

/**
 * function: 封装网络请求
 * @url URL地址
 * @params 请求参数
 * @method 请求方式：GET/POST
 * @onSuccess 成功回调
 * @onFailed  失败回调
 */
// 万维易源端口
function request(url, params, method, onSuccess, onFailed) {
  // console.log('请求url：' + url);
  wx.showLoading({
    title: "正在加载中...",
  })
  // console.log("请求头：", header)
  wx.request({
    url: envConfig.baseUrl + url,
    data: dealParams(params),
    method: method,
    header: header,
    success: function(res) {
      wx.hideLoading();
      // console.log('响应：', res);

      if (res.data) {
        /** start 根据需求 接口的返回状态码进行处理 */
        if (res.statusCode == 200) {
          onSuccess(res.data); //request success
        } else {
          onFailed(res.data.message); //request failed
        }
        /** end 处理结束*/
      }
    },
    fail: function(error) {
      wx.hideLoading();
      onFailed(""); //failure for other reasons
    }
  })
}
// 极速数据端口
function request2(url, params, method, onSuccess, onFailed) {
  // console.log('请求url：' + url);
  wx.showLoading({
    title: "正在加载中...",
  })
  // console.log("请求头：", header)
  wx.request({
    url: envConfig.baseUrl2 + url,
    data: dealParams2(params),
    method: method,
    header: header,
    success: function(res) {
      wx.hideLoading();
      // console.log('响应：', res);

      if (res.data) {
        /** start 根据需求 接口的返回状态码进行处理 */
        if (res.statusCode == 200) {
          onSuccess(res.data); //request success
        } else {
          onFailed(res.data.message); //request failed
        }
        /** end 处理结束*/
      }
    },
    fail: function(error) {
      wx.hideLoading();
      onFailed(""); //failure for other reasons
    }
  })
}

/**
 * function: 根据需求处理请求参数：添加固定参数配置等
 * @params 请求参数
 */
function dealParams(params) {
  params.showapi_appid = envConfig.showapi_appid
  params.showapi_sign = envConfig.showapi_sign
  // console.log("请求参数:", params)
  return params;
}
function dealParams2(params) {
  params.appkey = envConfig.appkey
  // console.log("请求参数:", params)
  return params;
}


/**
 * 供外部post请求调用  
 */
function post(url, params, onSuccess, onFailed) {
  // console.log("请求方式：", "POST")
  request(url, params, "POST", onSuccess, onFailed);

}
function jsPost(url, params, onSuccess, onFailed) {
  // console.log("请求方式：", "POST")
  request2(url, params, "POST", onSuccess, onFailed);
}
/**
 * 供外部get请求调用
 */
function get(url, params, onSuccess, onFailed) {
  // console.log("请求方式：", "GET")
  request(url, params, "GET", onSuccess, onFailed);
}
function jsGet(url, params, onSuccess, onFailed) {
  // console.log("请求方式：", "GET")
  request2(url, params, "GET", onSuccess, onFailed);
}

const server = {
  get,
  post,
  jsGet,
  jsPost
}
export default server