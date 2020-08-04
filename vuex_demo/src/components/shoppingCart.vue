<template>
    <div class='shoppingCart'>
        <h3>购物车</h3>
        <p v-show="!products.length"><i>购物车空空如也~</i></p>
        <ul class="list">
            <li class="item" v-for="product in products" :key="product.id">
                {{product.title}}---{{product.price}} x
                <input type="number" class="input" v-model="product.num" min="1">
                = <span style="color: crimson; fontSize:14px">{{product.num * product.price}}</span> 元
                <button class="btn" @click="deleteProduct(product)">删除</button>
            </li>
        </ul>
        <div class="payment">
            <p>总计：{{total}} 元</p>
            <p>
                <button class="btn-pay" :disabled="!products.length" @click="handlePay">结算</button>
            </p>
        </div>
    </div>
</template>

<script>
    /*
    *   mapState：为组件创建（计算属性 ）以返回 vuex store 中的 state（状态）
    *   mapGetters：为组件创建（计算属性）以返回 getters 的返回值
    *   mapMutations：为组件创建（方法）以提交 mutation
    *   mapActions：为组件创建（方法）以分发 action
    *
    * */
    import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

    export default {
        name: "shoppingCart",
        created() {
            // console.log(this.products)
            this.initProducts()
        },
        data() {
            return {
                // products: [
                //     {
                //         id: 1,
                //         title: 'iPhone 8',
                //         price: 5999,
                //         num: 0,      // 购物车中当前商品的数量
                //         max: 10      // 最大可以添加的数量
                //     },
                //     {
                //         id: 2,
                //         title: 'iPhone 11 Pro',
                //         price: 7999,
                //         num: 0,
                //         max: 20
                //     }
                // ]
            }
        },
        methods: {
            ...mapActions('shoppingCart', ['initProducts','payment']),
            ...mapMutations('shoppingCart', ['deletePro']),
            ...mapMutations('productList',['restoreStock']),
            deleteProduct(product) {
                // 1.把 store 的 shoppingCart模块中的当前商品删除
                this.deletePro(product)
                // 2.还原store中productList的商品库存（stock）
                this.restoreStock(product)
                // console.log(product)
            },
            handlePay(){
                this.payment()
            }
        },
        computed: {
            ...mapState('shoppingCart', ['products']),
            ...mapGetters('shoppingCart', ['total'])
            /*total(){
                // arr.reduce(callback,[initialValue])  计算结果
                return this.products.reduce((total,product)=>{
                    return total + product.num * product.price
                },0)
            }*/
        }
    }
</script>

<style scoped lang="less">
    .shoppingCart {
        width: 50%;
        padding: 10px;
        border: 1px solid blue;

        .list {
            .item {
                margin-top: 20px;
            }
        }
    }
</style>
