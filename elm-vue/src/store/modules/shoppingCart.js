// 购物车中的商品

export default {
    namespaced: true,
    state: {
        // 购物车中的商品
        products: [],
    },

    mutations: {

        // 从商品列表添加商品到购物车（商品id，商品名称，商品单价，商品数量）
        addProduct(state, payload) {
            // console.log(state, '添加商品', payload)

            // 在购物车中查找是否存在点击添加按钮传过来的商品
            const product = state.products.find(product => product.foodName === payload.foodName)
            // console.log(product)

            if (product) { // 如果商品存在，就将该商品的 productNum 加1
                product.productNum++
                console.log('商品数量增加了')
            } else {
                let {
                    id_,
                    foodName,
                    price,
                    productNum
                } = payload
                state.products.push({
                    id_, // 商品id
                    foodName, // 商品名字
                    unitPrice: price.num, // 商品单价
                    productNum: productNum + 1 // 商品数量
                })
            }
        },

        // 从商品列表减少购物车中商品数量
        reduceProduct(state, payload) {
            console.log(state, '商品列表中减少商品', payload)

            const product = state.products.find(product => product.id_ === payload.id_)
            // console.log(product)
            product.productNum--
            if (product.productNum === 0) {
                const products = state.products.filter(product => product.id_ !== payload.id_)
                // console.log(products, '筛选出的数据')
                state.products = products
            }
        },

        // 在购物车列表中增加对应商品数量
        addProductNum(state, payload) {
            console.log(state, '增加商品数量', payload)
            // 从商品列表中找到对应的商品，再增加其数量
            const product = state.products.find(product => product.foodName === payload.foodName)
            //   console.log(product)
            product.productNum++
        },

        // 在购物车列表中减少对应商品数量
        reduceProductNum(state, payload) {
            console.log(state, '减少商品数量', payload)
            // 从商品列表中找到对应的商品，再减少其数量
            const product = state.products.find(product => product.foodName === payload.foodName)
            product.productNum--
            // 如果该商品的数量减为0时将该商品从购物车中删除
            if (product.productNum === 0) {
                const products = state.products.filter(product => product.id_ !== payload.id_)
                // console.log(products)
                state.products = products
            }
        },

        // 清空购物车
        clearCart_(state) {
            state.products = [],
                state.totalNum = 0,
                state.totalPrice = 0
        }
    },

    getters: {
        // 计算购物车中商品的总价
        totalPrice(state) {
            return state.products.reduce((total, product) => {
                return total + product.unitPrice * product.productNum
            }, 0)
        },

        // 计算购物车中商品总数
        totalNum(state) {
            return state.products.reduce((total, product) => {
                return total + product.productNum
            }, 0)
        },
    },

    actions: {

    }
}