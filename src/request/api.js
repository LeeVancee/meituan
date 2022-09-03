import axios from './request.js'

//首页数据接口
export const getHomeData = () => axios.get('/home')

//店铺数据接口
export const getShopData = () => axios.get('/shop')
