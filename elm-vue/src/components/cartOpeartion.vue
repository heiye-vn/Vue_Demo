<template>
  <div class="cartOperation">
    <span class="reduce" v-show="selectProduct.productNum > 0" @click="reduceProduct(currentProduct)">
      <img src="https://s1.ax1x.com/2020/08/10/aHllDJ.png" alt />
    </span>
    <span class="num" v-show="selectProduct.productNum > 0">{{selectProduct.productNum}}</span>
    <span class="add" @click="addProduct(currentProduct)">
      <img src="https://s1.ax1x.com/2020/08/10/aHlIVs.png" alt />
    </span>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "cartOperation",

  props: {
    food: {
      type: Object,
    },
  },

  data() {
    return {
      currentProduct: this.food, // 当前商品信息
      selectProductNum: 1, // 当前选择的商品的数量
    };
  },

  mounted() {
    //  console.log(this.currentProduct)
    // console.log(this.products);
  },

  methods: {
    ...mapMutations("shoppingCart", ["addProduct", "reduceProduct"]),
  },

  computed: {
    ...mapState("shoppingCart", ["products"]),
    ...mapGetters("shoppingCart", ["currentProductNum"]),

    // 从购物车中筛选出当前的商品
    selectProduct() {
      const product = this.products.find(
        (product) => product.foodName === this.currentProduct.foodName
      );
      if (product) {
        return product;
      } else {           // 如果 product 值为 undefined
        return this.currentProduct;
      }
    },
  },
};
</script>
<style scoped lang='less'>
@import "~@/less/cartOpeartion.less";
</style>