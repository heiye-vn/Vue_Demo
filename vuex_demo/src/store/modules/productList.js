// 管理商品列表中的数据
import {reqProducts} from "api";     // 在 vue.config.js 中配置了别名

export default {
    namespaced: true,
    state: {
        products: [
            // {
            //     id: 1,
            //     title: 'iPhone 8',
            //     src: 'https://img11.360buyimg.com/n7/jfs/t8284/363/1326459580/71585/6d3e8013/59b857f2N6ca75622.jpg',
            //     price: 4399.00,
            //     stock: 10        // 库存
            // },
            // {
            //     id: 2,
            //     title: 'iPhone 11 Pro',
            //     src: 'https://img12.360buyimg.com/n7/jfs/t1/52311/32/10498/177816/5d780881Edbb95ec5/6702694da06497a8.jpg',
            //     price: 9999.00,
            //     stock: 20
            // },
            // {
            //     id: 3,
            //     title: 'iPhone Xs',
            //     src: 'https://img12.360buyimg.com/n7/jfs/t1/2469/6/3535/142209/5b997c09E5262da83/d3273e91acc45417.jpg',
            //     price: 5499.00,
            //     stock: 15
            // }
        ]
    },
    mutations: {
        // 初始化商品列表中的商品数据
        initProducts(state, payload) {
            // console.log(state,'222',payload)
            state.products = payload
        },

        // 减少商品列表中当前商品的库存
        reduceStock(state, payload) {
            // console.log(state, '函数执行', payload)

            // 找到点击之后对应的商品（其实payload可以表示当前点击对应的商品，为了准确性可以再使用find方法筛选一次）
            const product = state.products.find(product => product.id === payload.id)
            product.stock--
        },

        // 恢复当前商品的库存
        restoreStock(state, payload) {
            // console.log(state, '恢复商品库存', payload);

            // 思路一：从商品列表中找到当前删除的商品，然后把删除的商品的数量（num）添加到商品列表中同类商品的库存中（stock）
            // const product = state.products.find(product=>product.id === payload.id)
            // product.stock += payload.num

            // 思路二：因为一开始购物车中商品的可添加数量（max）与商品列表中商品的库存一致，当商品数据删除时就把 max 赋值给 stock
            const product = state.products.find(product => product.id === payload.id)
            product.stock = payload.max
        },
    },
    actions: {
        async initProducts({commit}) {
            // 请求商品的数据，做初始化   '/api/products'
            const result = await reqProducts()
            // console.log(result)
            commit('initProducts', result.products)
        }
    }
}
