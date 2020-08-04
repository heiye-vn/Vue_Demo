// 管理购物车中的数据
import {reqShoppingCart, reqPayment} from "api";        // 在 vue.config.js 中配置了别名

export default {
    namespaced: true,        //  为了解决不同模块命名冲突问题
    state: {
        products: [
            // {
            //     id: 1,
            //     title: 'iPhone 8',
            //     price: 5999.00,
            //     num: 0,      // 购物车中当前商品的数量
            //     max: 10      // 最大可以添加的数量
            // },
            // {
            //     id: 2,
            //     title: 'iPhone 11 Pro',
            //     price: 9999.00,
            //     num: 0,
            //     max: 20
            // }
        ]
    },
    getters: {
        total(state, getters) {
            // arr.reduce(callback,[initialValue])  计算结果
            return state.products.reduce((total, product) => {
                return total + product.num * product.price
            }, 0)
        }
    },
    mutations: {
        // 初始化购物车中的商品数据
        initProducts(state, payload) {                    // 在同步中触发 commit 提交过来的方法，并接收参数
            // console.log(state,'333',payload)
            state.products = payload
        },

        // 添加当前商品到购物车
        addToCart(state, payload) {
            // console.log(state,'666',payload)
            // 找到购物车中对应的商品
            const product = state.products.find(product => product.id === payload.id)

            if (product) {    // 如果点击的商品已经在购物车，就执行 num++ 的操作
                product.num++
            } else {          // 如果点击的商品不再购物车中，就把商品添加到购物车
                // console.log(state, '777', payload)
                const {id, title, price, stock} = payload
                state.products.push({
                    id,
                    title,
                    price,
                    num: 1,
                    max: stock + 1   // 由于点击添加商品之后商品的数量会默认加1，此时stock就会减少1 ，所以max的值为stock+1
                })
            }
        },

        // 从购物车中删除当前商品
        deletePro(state, payload) {
            // console.log(state,'删除商品',payload)
            // array.filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素
            const products = state.products.filter(product => product.id !== payload.id)
            // console.log(products)
            state.products = products
        },

        // 清空购物车
        clearCart(state) {
            // console.log(state,'结算商品')
            state.products = []
        }
    },
    actions: {
        async initProducts({commit}) {
            // 请求商品的数据，做初始化   '/api/reqShoppingCart'
            const result = await reqShoppingCart()
            // console.log(result)
            commit('initProducts', result.products)      // 提交一个 initProducts 方法，并传递值
        },
        async payment({commit}) {
            const result = await reqPayment()
            if (result.status === 0) {
                alert(result.msg)
                commit('clearCart')
            }
        }
    }
}
