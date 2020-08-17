<template>
  <div class="orderFood">
    <!-- 广告图片 -->
    <div class="advPic">
      <img
        src="https://cube.elemecdn.com/7/df/971eb2c35d76995c6b56483fdda90png.png?x-oss-process=image/format,webp/resize,w_686"
        alt
      />
    </div>

    <!-- 商家推荐:有的店铺有,有的没有,暂时留个位置 -->
    <div class="businessRecom" v-show="false">233</div>

    <!-- 商品左侧导航以及右侧的商品列表  -->
    <div class="products">
      <!-- 商品分类 -->
      <ul class="leftMenu">
        <li v-for="(item,index) in categories" :key="index" :style="{backgroundColor:'#fff'}">
          <span>
            <img v-if="item.icon" :src="item.icon" alt />
            {{item.name}}
          </span>
        </li>
      </ul>

      <!-- 商品列表 -->
      <div class="productList">
        <!-- 热销类 -->
        <dl v-for="products in productList" :key="products.id">
          <dt>
            <strong>{{products.tit.name}}</strong>
            <span v-if="products.tit.desc">{{products.tit.desc}}</span>
          </dt>
          <dd v-for="product in products.child" :key="product.id_">
            <div class="foodDetail">
              <span class="foodPic">
                <img :src="product.foodPic" alt />
              </span>
              <section>
                <p class="foodName">{{product.foodName}}</p>
                <p class="foodDesc">{{product.foodDesc}}</p>
                <p class="foodInfo">
                  <span>月售{{product.sale}}份</span>
                  <span>好评率{{product.favorableRate}}</span>
                </p>
                <div class="foodHandle">
                  <span class="price">
                    ￥{{product.price.num}}
                    <i v-if="product.price.postfix">{{product.price.postfix}}</i>
                  </span>
                  <!-- 购物车操作控件 -->
                  <div class="operation">
                    <cartOperation :food='product'></cartOperation>
                  </div>
                </div>
              </section>
            </div>
          </dd>
        </dl>
      </div>
    </div>

    <!-- 底部购物车 -->
    <div class="shoppingCart">
      <shoppingCart />
    </div>
  </div>
</template>
<script>
import shoppingCart from "../components/shoppingCart";
import cartOperation from "../components/cartOpeartion";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "orderFood",

  created() {
    this.initProducts();
    this.initCategory();
  },

  data() {
    return {
      // 商家页面中的商品列表

      // 商品列表分类

      // 已选择的商品
      chooseGoods: [],
      msg:'我是数据'
    };
  },

  methods: {
    ...mapActions("productList", ["initProducts", "initCategory"]),
  },

  computed: {
    ...mapState("productList", ["productList", "categories"]),
  },

  components: {
    shoppingCart, // 购物车组件
    cartOperation, // 商品操作组件
  },
};
</script>
<style scoped lang='less'>
@import "~@/less/orderFood.less";
</style>
 
