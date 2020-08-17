// 商家页面中的商品列表数据
import {
    reqProducts
} from '../../api/index';

export default {
    namespaced: true,
    state: {
        productList: [], // 在仓库中初始化商品列表的数据
        categories: [],
    },

    mutations: {
        // 初始化商品列表中的商品数据
        initProducts(state, payload) {
            // console.log(state,'222',payload)
            state.productList = payload
        },

        // 初始化商品分类
        initCategory(state, payload) {
            state.categories = payload
        },
    },


    actions: {
        async initProducts({
            commit
        }) {
            // 根据商家名称请求对应接口，获取商家的商品数据   '/api/products'
            const result = await reqProducts()
            // console.log(result)
            commit('initProducts', result.productList)
        },

        async initCategory({
            commit
        }) {
            // 根据商家名称请求对应接口，获取商家的商品分类列表
            const result = await reqProducts()
            // console.log(result)
            commit('initCategory', result.categories)
        }
    }
}