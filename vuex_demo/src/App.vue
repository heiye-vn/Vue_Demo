<template>
    <div class='App'>
        <h2>Vuex-Demo</h2>
        <div class="content">
            <product-list />
            <shopping-cart/>
        </div>
    </div>
</template>

<script>
    import ProductList from "./components/productList";
    import ShoppingCart from "./components/shoppingCart";
    export default {
        name: "App",
        components: {ProductList, ShoppingCart},
        component:{
            ProductList,
            ShoppingCart
        }
    }
</script>

<style scoped lang="less">
    .App{
        h2{
            width: 200px;
            height: 50px;
            line-height: 50px;
            margin: 20px 0 20px 60px;
            color: deeppink;
        }
        .content{
            width: 1400px;
            display: flex;
            margin: 0 auto;
        }
    }
</style>
