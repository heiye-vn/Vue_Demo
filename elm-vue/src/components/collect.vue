<template>
  <div>
    <publictop title="收藏" :arrow="true" :center="true"></publictop>
    <div class="collect public-content posi-abso">
      <div class="flex flex-col flex-item-center collect-list bg-white" v-if="collectList.length === 0">
        <img src="@/images/2.png" alt="">
        <div class="font-s-40 color-666">你还没有收藏任何店铺哦</div>
        <router-link to="/shopperlist" class="font-s-40 go-shopping color-white pad-t-20 pad-b-20 pad-l-40 pad-r-40 mar-t-50">去首页逛逛</router-link>
      </div>
      <div v-else class="collect-list bg-white">
        <div class="color-999 font-s-40 pad-t-30 pad-b-30 pad-l-30">配送范围内的店铺</div>
        <div class="flex collect-item pad-t-20 pad-b-20 pad-r-30 pad-l-30" v-for="item in collectList" :key="item.shopName">
          <div class="font-s-0 pad-b-40"><img :src="item.img" alt=""></div>
          <div class="flex-1 mar-l-20 flex flex-col flex-betw bor-b-eee pad-b-40">
            <div class="font-s-50 color-333">{{item.shopName}}</div>
            <div class="flex flex-betw flex-item-center">
              <div class="flex flex-item-center font-s-35">
                <div class="flex flex-item-center pad-r-25 color-star">
                  <fonticon icon="star"></fonticon>
                  <span>{{item.percent}}</span>
                </div>
                <div class="color-999">月售{{item.saleNum}}</div>
              </div>
              <div class="font-s-30 will-send color-white pad-l-10 pad-r-10 pad-t-3 pad-b-3">{{item.willSend ? '商家配送' : '客户自提'}}</div>
            </div>
            <div class="flex flex-betw flex-item-center font-s-35 color-999">
              <div class="flex">
                <div class="pad-r-10">起送{{item.sendStart | price}}</div>
                <div>{{item.sendMoney ? '配送费' + item.sendMoney : '免配送费'}}</div>
              </div>
              <div class="flex">
                <div>{{item.sendTime}}分钟</div>
                <div>{{item.sendDistance}}km</div>
              </div>
            </div>
            <div class="font-s-30 flex color-star posi-rela">
              <div class="flex flex-wrap discout-outer" :class="{'on': arrowShow}">
                <div v-for="item1 in item.discount" :key="item1" class="bor-eee mar-r-10 pad-l-10 pad-r-10">{{item1}}</div>
              </div>
              <fonticon icon="chevron-down" class="posi-abso right-arrow font-s-22" :class="{'on': arrowShow}" @click="arrowShow = !arrowShow"></fonticon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import publictop from '@/common/components/publictop'
export default {
  components: {
    publictop
  },
  data () {
    return {
      collectList: this.$store.state.collectList,
      arrowShow: false
    }
  },
  filters: {
    price (price) {
      return '￥' + price
    }
  }
}
</script>

<style lang='less' scoped>
@import '~@/less/collect.less';
</style>