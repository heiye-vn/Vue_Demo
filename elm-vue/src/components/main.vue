<template>
  <div class="main">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="main-btn posi-fixed flex">
      <div v-for="(item, index) in mainBtn" :key="item.name" class="main-btn-item bg-white flex-1" @click="currentIndex = index">
        <router-link :to="item.link" 
                     class="pad-l-12 pad-r-12 pad-t-12 pad-b-4 flex flex-col flex-item-center" 
                     :class="{'color-blue': index === currentIndex,'color-666': index !== currentIndex}">
          <i :class="item.icon" class="font-s-80"></i>
          <span class="font-s-26 pad-t-2">{{item.name}}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mainBtn: [{
        name: '外卖',
        icon: ' iconfont icon-eleme',
        link: '/main/index'
      }, {
        name: '订单',
        link: '/main/order',
        icon: 'iconfont  icon-detail-long'
      }, {
        name: '我的',
        link: '/main/mine',
        icon: 'iconfont icon-user'
      }],
      currentIndex: 0
    }
  },
  methods: {
  },
  mounted () {
    this.currentIndex = this.$route.meta.index
  }
}
</script>

<style lang="less" scoped>
.main {
  width: 100%;
}
.main-btn {
  bottom: 0;
  width: 100%;
  box-shadow: 0 -0.266667vw 0.533333vw rgba(0,0,0,.1);
}
</style>
