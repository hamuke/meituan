import axios from '../axios/index.js'

const api = {
    // 头部搜索区域
    getSearchList() {
        return axios.get('/api/meituan/header/search.json')
    },
    getSearchHotWords() {
        return axios.get('/api/meituan/header/searchHotWords.json')
    },

    // 主页内容区域
    getNavList() {
        return axios.get('/api/meituan/index/nav.json')
    },
    getResultsByKeywords() {
        return axios.get('/api/meituan/index/resultsByKeywords.json')
    },

    // 切换城市区域
    getHotCity() {
        return axios.get('/api/meituan/city/hot.json')
    },
    getRecentCity() {
        return axios.get('/api/meituan/city/recents.json')
    },
    getProvince() {
        return axios.get('/api/meituan/city/province.json')
    },
    getCity() {
        return axios.get('/api/meituan/city/cityList.json')
    },
    getPosition() {
        return axios.get('/api/meituan/city/getPosition.json')
    },

    // 商品列表区域
    getClassify() {
        return axios.get('/api/meituan/list/classify.json')
    },
    getAreaList() {
        return axios.get('/api/meituan/list/areaList.json')
    },
    getGoodsList() {
        return axios.get('/api/meituan/list/goodsList.json')
    },
    getRecommend() {
        return axios.get('/api/meituan/list/recommend.json')
    },
    // 商品详情区域
    getProductDetail() {
        return axios.get('/api/meituan/product/detail.json')
    },

    // 登录注册区域
    getLogin(params) {
        return axios.get('/api/meituan/login', params)
    },
    getRegister(params) {
        return axios.get('/api/meituan/register', params)
    }
}

export default api