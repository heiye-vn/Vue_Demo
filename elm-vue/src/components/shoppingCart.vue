<template>
  <div class="shoppingCart">
    <!-- 当购物车中有商品时点击购物车向上展示出购物车中的商品列表 -->
    <!-- 背景蒙层 -->
    <div class="mask" ref="mask"></div>

    <!-- 购物车列表 -->
    <div class="productList" ref="productList">
      <section class="discountTip">
        <span v-if="diffPrice<= 30 && diffPrice > 0">
          还差
          <i>{{diffPrice}}</i>元起送
        </span>
        <span :style="{color:'#333333'}">满9减8元，满58减20元，满108减30元</span>
      </section>
      <div class="list">
        <div class="cartView">
          <div class="cartHeader">
            <span>已选商品</span>
          </div>
          <div class="removeCart" @click="clearCart_">
            <img src="https://s1.ax1x.com/2020/08/11/aL4iB6.png" alt />
            <span>清空</span>
          </div>
        </div>
        <div class="cartList">
          <ul>
            <li v-for="(item,index) in products" :key="index">
              <span class="productName">{{item.foodName}}</span>
              <span class="priceTotal">￥{{item.unitPrice*item.productNum}}</span>
              <span class="operation">
                <span class="reduce" @click="reduceProductNum(item)">
                  <img src="https://s1.ax1x.com/2020/08/10/aHllDJ.png" alt />
                </span>
                <span class="num">{{item.productNum}}</span>
                <span class="add" @click="addProductNum(item)">
                  <img src="https://s1.ax1x.com/2020/08/10/aHlIVs.png" alt />
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 购物车底部导航栏 -->
    <div class="left posi-rela" @click="showMask">
      <span class="cartIcon" :class="products.length>0? 'has':'none' ">
        <span class="num" v-show="totalNum">{{totalNum}}</span>
      </span>
    </div>
    <div class="center posi-rela">
      <span v-if="totalPrice==0">未选购商品</span>
      <span v-else class="totalPrice">￥{{fullReduction}}</span>
      <span>另需配送费24.5元</span>
    </div>
    <div class="right posi-rela" v-if="totalPrice == 0">
      <span>￥30起送</span>
    </div>
    <div class="right posi-rela" v-else-if="totalPrice>0 && totalPrice<30">
      <span>差￥{{diffPrice}}起送</span>
    </div>
    <div class="right_ posi-rela" v-else>
      <span>去结算</span>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "shoppingCart",

  data() {
    return {
      startPrice: 30, // 商品起送价格
    };
  },

  methods: {
    // 点击购物车图标显示出购物车列表
    showMask() {
      let style = this.$refs.mask.style.display;
      if (style === "block") {
        this.$refs.mask.style.display = "none";
        this.$refs.productList.style.bottom = `-${10}rem`;
      } else {
        this.$refs.mask.style.display = "block";
        this.$refs.productList.style.bottom = `${1.5}rem`;
      }
      // console.log(style);
    },

    // 清空购物车 || 增加购物车商品数量 || 减少购物车商品数量
    ...mapMutations("shoppingCart", [
      "clearCart_",
      "addProductNum",
      "reduceProductNum",
    ]),
  },

  computed: {
    // 将购物车中的商品数据和购物车组件映射
    ...mapState("shoppingCart", ["products"]),
    ...mapGetters("shoppingCart", ["totalPrice", "totalNum"]),

    diffPrice() {
      return this.startPrice - this.totalPrice;
    },

    // 计算满减：满9减8 满58减20 满 108减30
    fullReduction() {
      if (this.totalPrice >= 9 && this.totalPrice < 58) {
        return this.totalPrice - 8;
      } else if (this.totalPrice >= 58 && this.totalPrice < 108) {
        return this.totalPrice - 20;
      } else if (this.totalPrice >= 108) {
        return this.totalPrice - 30;
      } else {
        return this.totalPrice;
      }
    },
  },
};
</script>
<style scoped lang='less'>
@import "~@/less/shoppingCart";
</style>