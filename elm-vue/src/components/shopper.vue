<template>
  <div class="shopper">
    <!-- 蒙版层 -->
    <div class="mask">
      <span class="return" @click="goBack">
        <van-icon name="arrow-left" />
      </span>
    </div>
    <!-- 背景图 -->
    <img
      class="bg"
      src="https://cube.elemecdn.com/9/0d/e842c6c6df5553500a658057d664dpng.png?x-oss-process=image/format,webp/resize,w_750"
      alt
    />
    <!-- 商家图片 -->
    <div class="pic">
      <span v-show="true">品牌</span>
      <img
        src="https://cube.elemecdn.com/8/39/16BEF464145FEB219DE7CF765F386jpeg.jpeg?x-oss-process=image/format,webp/resize,w_150"
        alt
      />
    </div>
    <!-- 商家名称及描述 -->
    <div class="shopInfo">
      <h2 @click="show = true">
        <span>奈雪的茶(成都银泰城店)</span>
        <i>
          <van-icon name="play" color="#333" />
        </i>
      </h2>
      <div class="desc">
        <span>评价4.7</span>
        <span>月售2520单</span>
        <span>全城送约90分钟</span>
      </div>
      <div class="discount">
        <span is-link @click="showDiscount">
          <van-tag plain color="#ff4b33">配送费优惠</van-tag>
        </span>
        <span is-link @click="showDiscount">
          1个优惠
          <van-icon name="arrow-down" />
        </span>
        <van-popup v-model="showPopup" closeable position="bottom">
          <span class="tit">优惠活动</span>
          <ul class="content">
            <li>
              <van-tag plain color="#ff4b33">配送</van-tag>
              <i>配送费立减5元</i>
            </li>
          </ul>
        </van-popup>
      </div>
      <div class="notice">
        <span>公告：1.由于奶盖为鲜奶打制，配送中奶盖可能会出现下沉和茶混的现象，如对口感有特别要求的顾客请选择奶盖分装；2.需要发票的顾客请把发票抬头税号和邮箱写在备注处，且拨打门店电话说明哪个订单需要开票，外卖开票仅包含商品金额，望周知谅解！</span>
      </div>
    </div>
    <!-- 遮罩层内容，点击商家名称显示 -->
    <div class="hideContent">
      <van-popup v-model="show">待完善...</van-popup>
    </div>

    <!-- 商家详情:分为三个模块(点餐、评价、商家) -->
    <div class="products">
      <van-tabs v-model="activeName" color="#2395FF" line-width="30" line-height="2.5">
        <van-tab title="点餐" name="orderFood">
          <order-food></order-food>
        </van-tab>
        <van-tab title="评价" name="evaluate">
          <evaluate></evaluate>
        </van-tab>
        <van-tab title="商家" name="business">
          <business></business>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon, Popup, Tab, Tabs, Divider, Tag } from "vant";
import orderFood from "../components/orderFood";
import evaluate from "../components/evaluate";
import business from "../components/business";

Vue.use(Icon).use(Popup).use(Tab).use(Tabs).use(Divider).use(Tag);

export default {
  name: "shopper",
  components: {
    // 注册局部组件
    orderFood,
    evaluate,
    business,
  },
  data() {
    return {
      show: false, // 点击商家信息展示的模态框
      showPopup: false, // 优惠活动
      activeName: "orderFood", // 动态切换 点餐、评价、商家 是哪个页面，并展示对应的组件
    };
  },
  methods: {
    goBack() {
      //返回首页
      this.$router.push("/main/index");
    },

    showDiscount() {
      // console.log(222);
      this.showPopup = true;
    },
  },
};
</script>

<style lang="less">
@import "~@/less/shopper.less";
</style>
