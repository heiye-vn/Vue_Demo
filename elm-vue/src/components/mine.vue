<template>
  <div class="mine public-content bg-white">
    <publictop title="饿了么" :center="true" bgcolor="white" color="#333"></publictop>
    <div class="user-detail flex flex-betw bg-white">
      <div class="flex flex-col flex-center pad-l-48">
        <div class="font-s-86 font-weight color-333">{{userinfo.name}}</div>
        <div class="font-s-32 pad-t-23 color-ccc">再忙，也要记得吃饭哟 ~</div>
      </div>
      <div class="flex font-s-0">
        <img :src="userinfo.head" alt="">
      </div>
    </div>
    <div class="flex redgold pad-l-10 pad-r-10 bg-white">
      <div v-for="(item, index) in redgold" 
           :key="item.name" 
           class="flex-1 flex-col flex flex-betw bg-white mar-l-5 mar-r-5"
           :class="{'bor-r-ddd': index === 0}">
        <div class="font-s-0 flex flex-betw flex-item-center">
          <span class="font-s-45">{{item.name}}</span>
          <i class="iconfont font-s-50" :class="item.icon"></i>
        </div>
        <div class="color-666 font-weight font-s-32">
          <div class="flex" v-if="index === 0" style="line-height: .5rem">
            <div class="font-s-45 color-red">{{item.num}}</div>
            <div class="font-s-35">个未使用</div>
          </div>
          <div class="font-s-50 color-red" v-else>￥{{item.num}}</div>
        </div>
      </div>
    </div>
    <div class="clock-outer bg-white">
      <router-link to="/clocks">
        <div class="flex flex-betw clock pad-50">
          <div class="flex flex-item-center">
            <i class="iconfont icon-clock font-s-90 color-blue"></i>
            <div class="pad-l-30">
              <div class="font-s-40 color-333 font-weight">点餐提醒</div>
              <div class="font-s-25 color-999">已有 {{clocknum}} 提醒自己按时吃饭</div>
            </div>
          </div>
          <div class="font-s-36 flex flex-item-center">
            <span class="open-clock">立即开启</span>
          </div>
        </div>
      </router-link>
    </div>
    <div class="choose">
      <div class="bg-white">
        <router-link v-for="(item, index) in infochoose" :key="index" class="flex flex-item-center pad-l-57 font-s-44 color-333" :to="item.link">
          <i class="iconfont choose-icon font-s-60" :class="item.icon"></i>
          <div class="flex flex-betw flex-item-center flex-1 choose-name mar-l-20 bor-b-eee">
            <div class="font-s-42">{{item.name}}</div>
            <div>
              <fonticon icon="chevron-right" class="font-s-35 color-bbb"></fonticon>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="flex flex-center privacy">
      <div to="/privacy" class="mar-t-61 mar-b-61 font-s-30 color-999">1.0.20</div>
    </div>
  </div>
</template>

<script>
import publictop from '@/common/components/publictop'
import head from '@/images/3.jpg'
export default {
  data () {
    return {
      userinfo: {
        head,
        name: '刚刚好',
        phone: '18883793576'
      },
      redgold: [{
        name: '红包',
        num: 0,
        icon: 'icon-hongbao color-red'
      }, {
        name: '余额',
        num: 0,
        icon: 'icon-yue color-green'
      }],
      infochoose: [{
        icon: 'icon-address',
        name: '我的地址',
        link: '/addr'
      }, {
        icon: 'icon-collect',
        name: '我的收藏',
        link: '/collect'
      }, {
        icon: 'icon-gift',
        name: '推荐有礼',
        link: '/recommend'
      }, {
        icon: 'icon-kefu',
        name: '我的客服',
        link: '/customserver'
      }, {
        icon: 'icon-details',
        name: '规则中心',
        link: '/rules'
      }],
      clocknum: 455681
    }
  },
  components: {
    publictop
  }
}
</script>

<style lang='less' scoped>
@import '~@/less/mine.less';
</style>