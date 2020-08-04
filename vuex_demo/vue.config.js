// 如果模拟的数据有很多的话可以单独抽离出去放在 mock 文件下的 json 文件中，方便管理
const productList = require('./src/mock/productList')
const shoppingCart = require('./src/mock/shoppingCart')

module.exports = {
    configureWebpack: {      // 原生的 webpack 配置
        // devServer:{
        //     before(app){
        //         app.get('/api/products',(req,res)=>{
        //             res.send({
        //                 name:'我是返回的数据'
        //             })
        //         })
        //     }
        // },

        resolve: {        // 配置路径的别名（有些路径比较长的时候可以这么配置）
            alias: {
                'api': '@/api',      // @表示 src 目录
            }
        }
    },

    devServer: {        // vue cli 已经封装过的 webpack 配置
        before(app) {
            app.get('/api/products', (req, res) => {
                res.send({
                    products: productList
                    // products: [
                    //     {
                    //         id: 1,
                    //         title: 'iPhone 8',
                    //         src: 'https://img11.360buyimg.com/n7/jfs/t8284/363/1326459580/71585/6d3e8013/59b857f2N6ca75622.jpg',
                    //         price: 4399.00,
                    //         stock: 10        // 库存
                    //     },
                    //     {
                    //         id: 2,
                    //         title: 'iPhone 11 Pro',
                    //         src: 'https://img12.360buyimg.com/n7/jfs/t1/52311/32/10498/177816/5d780881Edbb95ec5/6702694da06497a8.jpg',
                    //         price: 9999.00,
                    //         stock: 20
                    //     },
                    //     {
                    //         id: 3,
                    //         title: 'iPhone Xs',
                    //         src: 'https://img12.360buyimg.com/n7/jfs/t1/2469/6/3535/142209/5b997c09E5262da83/d3273e91acc45417.jpg',
                    //         price: 5499.00,
                    //         stock: 15
                    //     }
                    // ],
                })
            })
            app.get('/api/shoppingCart', (req, res) => {
                res.send({
                    products: shoppingCart
                    // products: [
                    //     {
                    //         id: 1,
                    //         title: 'iPhone 8',
                    //         price: 4399.00,
                    //         num: 0,      // 购物车中当前商品的数量
                    //         max: 10      // 最大可以添加的数量
                    //     },
                    //     {
                    //         id: 2,
                    //         title: 'iPhone 11 Pro',
                    //         price: 9999.00,
                    //         num: 0,
                    //         max: 20
                    //     }
                    // ]
                })
            })
            app.get('/api/payment',(req,res)=>{
                res.send({
                    status:0,
                    msg:'结算成功！'
                })
            })
        }
    }

}
