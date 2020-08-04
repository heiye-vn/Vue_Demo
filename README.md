# Vue_Demo
vue框架学习中的一些练习demo



#### 1.Vuex小练习 

​		该项目是一个简易版购物车案例，实现了从商品列表添加商品到购物车，从购物车中删除商品以及结算商品等功能，项目使用 vue-cli 搭建的，运用了 **vuex**，**axios** 等知识点。项目中的初始数据通过 axios 进行请求得到的，没有使用后端接口，通过在 vue.config.js 中进行配置来模拟 实现前端接口请求，类似 mock 功能。

vue.config.js 文件配置内容如下：

```JavaScript
const productList = require('./src/mock/productList')
const shoppingCart = require('./src/mock/shoppingCart')

module.exports = {
    devServer:{
        before(app){
            app.get('/api/products',(req,res)=>{
                res.send({
                    products:productsLisst
                })
            })
            app.get('/api/shoppingCart',(req,res)=>{
                res.send({
                    products:shoppingCart
                })
            })
            ...
        }
    }
}  
```

