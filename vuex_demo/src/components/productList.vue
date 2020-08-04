<template>
    <div class='productList'>
        <h3>商品列表</h3>
        <ul class="list">
            <li class="item" v-for="product in products" :key="product.id">
                <img :src="product.src" alt="" width="150px" height="150px">
                <div>名称：{{ product.title }}</div>
                <div>价格：{{ product.price }}</div>
                <div>库存：{{ product.stock }}</div>
                <button class="btn" :disabled='!product.stock' @click="addProduct(product)">
                    {{product.stock > 0 ? '添加到购物车' : '库存不足'}}
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
    /*
    *   :disabled='!product.stock'
    *   绑定动态属性实现根据库存来决定 button 是否可以被点击
    *
    * */
    import {mapState, mapActions, mapMutations} from 'vuex';

    export default {
        name: "productList",
        created() {
            this.initProducts()
        },
        data() {
            return {
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
                // ]
            }
        },
        methods: {
            ...mapMutations('productList', ['reduceStock']),
            ...mapMutations('shoppingCart', ['addToCart']),
            ...mapActions('productList', ['initProducts']),

            addProduct(product) {
                //1.修改 productList 模块中商品的 stock（库存）值
                this.reduceStock(product)
                //2.修改 shoppingCart 模块中商品的 num（数量）值
                this.addToCart(product)
                // console.log(product)
            }
        },
        computed: {
            ...mapState('productList', ["products"]),
        }
    }
</script>

<style scoped lang="less">
    .productList {
        width: 50%;
        margin-right: 10px;
        padding: 10px;
        border: 1px solid lime;

        .list {
            display: flex;
            padding: 5px;
            justify-content: space-around;
            list-style: 'none';

            .item {
                display: flex;
                flex-direction: column;
                width: 200px;
                padding: 10px;
                border: 1px solid #ccc;
                margin: 8px;

                div {
                    margin: 10px 0;
                }
            }
        }
    }
</style>
