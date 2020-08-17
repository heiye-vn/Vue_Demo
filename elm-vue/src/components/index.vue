<template>
  <!-- 外卖首页 -->
  <div class="home bg-white">
    <!-- 地址定位 -->
    <div class="location">
      <van-icon name="location" color="#19AFFF" />
      <span>成都市武侯区</span>
      <van-icon name="arrow-down" />
    </div>

    <!-- 商品商家搜索  -->
    <div class="search">
      <van-icon name="search" size=".6rem" />
      <span>搜索商家、商品名称</span>
    </div>

    <!-- 广告 -->
    <div class="adv">
      <img src="@/assets/images/adv.png" alt="" />
    </div>

    <!-- 商品分类 -->
    <div class="categorys">
      <van-grid :column-num="5" :border="false" icon-size="1.25rem">
        <van-grid-item
          v-for="item in categories"
          :key="item.id"
          :icon="item.img"
          :text="item.title"
          :to="item.linkTo"
        />
      </van-grid>
    </div>

    <!-- 点餐提醒 -->
    <div class="remind">
      <img src="../assets/images/clock.png" alt="" />
      <div class="reminder">
        <p class="title">点餐提醒</p>
        <p class="info">已有<span>37120</span>人提醒自己按时吃饭</p>
      </div>
      <van-button color="#00A6FF" size="small">立即开启</van-button>
    </div>

    <!-- banner swiper 轮播 -->
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in banners" :key="index">
          <img v-lazy="item" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 推荐商家 -->
    <div class="recommend">
      <span class="Tit">推荐商家</span>
      <div class="productFilter">
        <span>首单立减</span>
        <span>津贴优惠</span>
        <span>满减优惠</span>
        <span>下单返红包</span>
      </div>
    </div>

    <!-- 商品 -->
    <div class="products">
      <ul>
        <li @click="jumpToShopper">
          <div class="pic">
            <img
            src="https://cube.elemecdn.com/8/39/16BEF464145FEB219DE7CF765F386jpeg.jpeg?x-oss-process=image/format,webp/resize,w_150"
            alt=""
          />
          <span v-show="true">品牌</span>
          </div>
          <div class="info">
            <p class="tit">
              奈雪的茶(成都银泰城店)
              <van-icon name="ellipsis" color="#BEBEBE" />
            </p>
            <p class="sale">
              <span
                ><van-icon name="star" color="#FF6504" /><i class="num"
                  >4.7</i
                ></span
              >
              <span>月售2534</span>
              <span>蜂鸟专送</span>
            </p>
            <p class="give">
              <span>起送￥30</span>
              <span>配送￥4</span>
              <span>39分钟 1.8km</span>
            </p>
            <p class="tips">
              <span>"可以冻顶宝藏茶"</span>
              <span>武侯区奶茶果汁火爆第3名</span>
            </p>
            <p class="tags">
                <span>
                    <van-tag color="red" plain>品质联盟</van-tag>
                </span>
                <span>
                    <van-tag color="#888" plain>开发票</van-tag>
                </span>
                <i v-show="false"><van-icon name="arrow-down" /></i>
            </p>
          </div>
        </li>
         <li @click="jumpToShopper">
          <div class="pic">
            <img
            src="https://cube.elemecdn.com/D/64/729E6F9B6497892DE0596A754CD94jpeg.jpeg?x-oss-process=image/format,webp/resize,w_150"
            alt=""
          />
          <span v-show="true">品牌</span>
          </div>
          <div class="info">
            <p class="tit">
              1点点(香年广场店)
              <van-icon name="ellipsis" color="#BEBEBE" />
            </p>
            <p class="sale">
              <span
                ><van-icon name="star" color="#FF6504" /><i class="num"
                  >4.7</i
                ></span
              >
              <span>月售475</span>
              <span>蜂鸟专送</span>
            </p>
            <p class="give">
              <span>起送￥30</span>
              <span>配送￥4</span>
              <span>39分钟 812m</span>
            </p>
            <p class="tips">
              <span>已检测体温 请放心食用</span>
            </p>
            <p class="tags">
                <span>
                    <van-tag color="#888" plain>支持自取</van-tag>
                </span>
                 <span>
                    <van-tag color="#888" plain>食无优</van-tag>
                </span>
                <span>
                    <van-tag color="#888" plain>开发票</van-tag>
                </span>
                <i v-show="false"><van-icon name="arrow-down" /></i>
            </p>
          </div>
        </li>
         <li @click="jumpToShopper">
          <div class="pic">
            <img
            src="https://cube.elemecdn.com/7/05/5e6671efbe639ab375000529e6418png.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"
            alt=""
          />
          <span v-show="true">品牌</span>
          </div>
          <div class="info">
            <p class="tit">
              蜜雪冰城(成都银泰城店)
              <van-icon name="ellipsis" color="#BEBEBE" />
            </p>
            <p class="sale">
              <span
                ><van-icon name="star" color="#FF6504" /><i class="num"
                  >4.8</i
                ></span
              >
              <span>月售2363</span>
              <span v-show="false">蜂鸟专送</span>
            </p>
            <p class="give">
              <span>起送￥40</span>
              <span>配送￥1.5</span>
              <span>39分钟 1.8km</span>
            </p>
            <p class="tips">
              <span>圣代很好吃,卖家态度不错</span>
            </p>
            <p class="tags">
                <span>
                    <van-tag color="red" plain>15减1</van-tag>
                </span>
                <span>
                    <van-tag color="red" plain>25减3</van-tag>
                </span>
                <span>
                    <van-tag color="red" plain>35减5</van-tag>
                </span>
                <span>
                    <van-tag color="red" plain>45减8</van-tag>
                </span>
                <span>
                    <van-tag color="red" plain>60减10</van-tag>
                </span>
                <i><van-icon name="arrow-down" /></i>
            </p>
          </div>
        </li>
        <li @click="jumpToShopper">
            <div class="pic">
              <img
            src="https://cube.elemecdn.com/e/64/d3681cf5b588a148e81691e3ebc3dpng.png?x-oss-process=image/format,webp/resize,w_150"
            alt=""
          />
          <span v-show="true">品牌</span>
            </div>
          <div class="info">
            <p class="tit">
              星巴克专星送
              <van-icon name="ellipsis" color="#BEBEBE" />
            </p>
            <p class="sale">
              <span
                ><van-icon name="star" color="#FF6504" /><i class="num"
                  >4.8</i
                ></span
              >
              <span>月售398</span>
              <span v-show="true">蜂鸟专送</span>
            </p>
            <p class="give">
              <span>起送￥20</span>
              <span>免费配送</span>
              <span>39分钟 503m</span>
            </p>
            <p class="tips">
              <span>突然想喝咖啡，美味即时送达</span>
            </p>
            <p class="tags">
                <span>
                    <van-tag color="red" plain>70减4</van-tag>
                </span>
                <span>
                    <van-tag color="red" plain>140减20</van-tag>
                </span>
                <span>
                    <van-tag color="red" plain>42元特价</van-tag>
                </span>
                <i v-show="false"><van-icon name="arrow-down" /></i>
            </p>
          </div>
        </li>
        <li @click="jumpToShopper">
            <div class="pic">
              <img
            src="https://cube.elemecdn.com/7/4e/6ca8e83d6c0a5056f74225bee6ac4jpeg.jpeg?x-oss-process=image/format,webp/resize,w_150"
            alt=""
          />
          <span v-show="false">品牌</span>
            </div>
          <div class="info">
            <p class="tit">
              柳螺湾传统螺蛳粉
              <van-icon name="ellipsis" color="#BEBEBE" />
            </p>
            <p class="sale">
              <span
                ><van-icon name="star" color="#FF6504" /><i class="num"
                  >4.5</i
                ></span
              >
              <span>月售1936</span>
              <span v-show="false">蜂鸟专送</span>
            </p>
            <p class="give">
              <span>起送￥15</span>
              <span>配送￥1</span>
              <span>30分钟 1.4km</span>
            </p>
            <p class="tips">
              <span>"干捞螺蛳粉味道好,分量十足"</span>
            </p>
            <p class="tags">
                <span>
                    <van-tag color="red" plain>品质联盟</van-tag>
                </span>
                <span>
                    <van-tag color="red" plain>首次光顾减1</van-tag>
                </span>
                <span>
                    <van-tag color="red" plain>9折</van-tag>
                </span>
                <span>
                    <van-tag color="#888" plain>支持自取</van-tag>
                </span>
                <i v-show="true"><van-icon name="arrow-down" /></i>
            </p>
          </div>
        </li>
        <li @click="jumpToShopper">
            <div class="pic">
              <img
            src="https://cube.elemecdn.com/6/e7/dc284d9ef3959b4b3adc0745f9c17jpeg.jpeg?x-oss-process=image/format,webp/resize,w_150"
            alt=""
          />
          <span v-show="false">品牌</span>
            </div>
          <div class="info">
            <p class="tit">
              张亮麻辣烫(银泰城店)
              <van-icon name="ellipsis" color="#BEBEBE" />
            </p>
            <p class="sale">
              <span
                ><van-icon name="star" color="#FF6504" /><i class="num"
                  >4.3</i
                ></span
              >
              <span>月售2584</span>
              <span v-show="false">蜂鸟专送</span>
            </p>
            <p class="give">
              <span>起送￥15</span>
              <span>免费配送</span>
              <span>34分钟 1.5km</span>
            </p>
            <p class="tips">
              <span>"味道的确不错,和豚骨拉面一样"</span>
            </p>
            <p class="tags">
                <span>
                    <van-tag color="red" plain>50减1</van-tag>
                </span>
                <span>
                    <van-tag color="red" plain>18元特价</van-tag>
                </span>
                <span>
                    <van-tag color="#888" plain>支持自取</van-tag>
                </span>
                <span>
                    <van-tag color="#888" plain>食无优</van-tag>
                </span>
                <i v-show="false"><van-icon name="arrow-down" /></i>
            </p>
          </div>
        </li>
        <li @click="jumpToShopper">
            <div class="pic">
              <img
            src="https://cube.elemecdn.com/1/18/039a0102e79912175470d26114451png.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"
            alt=""
          />
          <span v-show="false">品牌</span>
            </div>
          <div class="info">
            <p class="tit">
              凯斯来新疆风味餐厅(银泰城店)
              <van-icon name="ellipsis" color="#BEBEBE" />
            </p>
            <p class="sale">
              <span
                ><van-icon name="star" color="#FF6504" /><i class="num"
                  >4.3</i
                ></span
              >
              <span>月售703</span>
              <span v-show="false">蜂鸟专送</span>
            </p>
            <p class="give">
              <span>起送￥15</span>
              <span>配送￥1</span>
              <span>39分钟 1.5km</span>
            </p>
            <p class="tips">
              <span>"土豆绵软,宽面筋道,真的好吃"</span>
            </p>
            <p class="tags">
                <span>
                    <van-tag color="red" plain>40减4</van-tag>
                </span>
                <span>
                    <van-tag color="red" plain>80减8</van-tag>
                </span>
                <span>
                    <van-tag color="#888" plain>120减12</van-tag>
                </span>
                <span>
                    <van-tag color="#F9DA9F" text-color="#8B521E">￥8元无门槛红包</van-tag>
                </span>
                <i v-show="true"><van-icon name="arrow-down" /></i>
            </p>
          </div>
        </li>
        <li @click="jumpToShopper">
            <div class="pic">
              <img
            src="https://cube.elemecdn.com/E/60/CC39723684A3EB32B9E8999470639jpeg.jpeg?x-oss-process=image/format,webp/resize,w_150"
            alt=""
          />
          <span v-show="true">品牌</span>
            </div>
          <div class="info">
            <p class="tit">
              乡村基（软件园店）
              <van-icon name="ellipsis" color="#BEBEBE" />
            </p>
            <p class="sale">
              <span
                ><van-icon name="star" color="#FF6504" /><i class="num"
                  >4.7</i
                ></span
              >
              <span>月售3127</span>
              <span v-show="true">蜂鸟专送</span>
            </p>
            <p class="give">
              <span>起送￥15</span>
              <span>免费配送</span>
              <span>30分钟 568m</span>
            </p>
            <p class="tips">
              <span>"味道挺不错的,吃过很多次了"</span>
            </p>
            <p class="tags">
                <span>
                    <van-tag color="red" plain>35减12</van-tag>
                </span>
                <span>
                    <van-tag color="red" plain>55减27</van-tag>
                </span>
                 <span>
                    <van-tag color="red" plain>0.1元特价</van-tag>
                </span>
                <span>
                    <van-tag color="#888" plain>支持自取</van-tag>
                </span>
                <i v-show="false"><van-icon name="arrow-down" /></i>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import {
  Icon,
  Grid,
  GridItem,
  Button,
  Swipe,
  SwipeItem,
  Lazyload,
  Tag,
} from "vant";

Vue.use(Icon)
  .use(Grid)
  .use(GridItem)
  .use(Button)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Tag);

export default {
  name: "home",
  data() {
    return {
      categories: [
        // 商品分类数据
        {
          id: 1,
          title: "美食",
          img:
            "https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",
          linkTo: "",
        },
        {
          id: 2,
          title: "早餐",
          img:
            "https://cube.elemecdn.com/1/48/bf1a859bf81553bbcfd6cf4ac42cbjpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",
          linkTo: "",
        },
        {
          id: 3,
          title: "跑腿代购",
          img:
            "https://cube.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",
          linkTo: "",
        },
        {
          id: 4,
          title: "汉堡披萨",
          img:
            "https://cube.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",
          linkTo: "",
        },
        {
          id: 5,
          title: "甜品饮品",
          img:
            "https://cube.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",
          linkTo: "",
        },
        {
          id: 6,
          title: "素食简餐 ",
          img:
            "https://cube.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",
          linkTo: "",
        },
        {
          id: 7,
          title: "地方小吃",
          img:
            "https://cube.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",
          linkTo: "",
        },
        {
          id: 8,
          title: "米粉面馆",
          img:
            "https://cube.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",
          linkTo: "",
        },
        {
          id: 9,
          title: "包子粥店",
          img:
            "https://cube.elemecdn.com/5/1a/dc885d2ce022d2ee60495acafb795jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",
          linkTo: "",
        },
        {
          id: 10,
          title: "炸鸡炸串",
          img:
            "https://cube.elemecdn.com/a/78/0fb469b2da210827ec16896e00420jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",
          linkTo: "",
        },
      ],
      banners: [
        // 轮播图
        "https://s1.ax1x.com/2020/08/06/agiu9A.png",
        "https://s1.ax1x.com/2020/08/06/agietH.png",
        "https://s1.ax1x.com/2020/08/06/agimhd.png",
      ],
      products: [],
    };
  },
  methods: {
    jumpToShopper(){
      this.$router.push('/shopper')
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@/less/index.less";
</style>
