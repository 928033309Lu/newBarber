import server from "./server.js"
let http = {
  // <<-- 疫情模块 -->>
  // 获取今日肺炎疫情明细
  getEpidemic(params, onSuccess, onFailed) {
    return server.get('/2217-2', params, onSuccess, onFailed)
  },
  // <<-- 每日壁纸模块 -->>
  // 获取壁纸数据
  getWallpaper(params, onSuccess, onFailed) {
    return server.get('/1287-1', params, onSuccess, onFailed)
  },
  // <<-- 成语大全 -->>
  // 根据成语查注释
  getIdiom(params, onSuccess, onFailed) {
    return server.get('/1196-2', params, onSuccess, onFailed)
  },
  // 根据关键字查成语
  getKeyIdiom(params, onSuccess, onFailed) {
    return server.get('/1196-2', params, onSuccess, onFailed)
  },
  // <<-- 唐诗三百首 -->>
  // 所有章节
  getTangshiList(params, onSuccess, onFailed) {
    return server.jsPost('/tangshi/chapter', params, onSuccess, onFailed)
  },
  getTangshiDetail(params, onSuccess, onFailed) {
    return server.jsPost('/tangshi/detail', params, onSuccess, onFailed)
  },
  getTangshiSearch(params, onSuccess, onFailed) {
    return server.jsPost('/tangshi/search', params, onSuccess, onFailed)
  },
}
export default http