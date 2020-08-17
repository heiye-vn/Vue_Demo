<template>
  <div>
    <publictop title="点餐提醒" :arrow="true" bgcolor="white" color="#333" :center="true"></publictop>
    <div class="public-content clocks">
      <div class="flex flex-betw clock-top flex-item-center posi-rela">
        <div class="pad-l-60 flex flex-col flex-center">
          <div class="title-big font-s-60">再忙也要照顾好自己</div>
          <div class="color-blue font-s-33">再忙也要照顾好自己 设置点餐提醒按时吃饭</div>
        </div>
        <img src="@/images/clock.png" alt="">
        <div class="posi-abso bg-circle"></div>
      </div>
      <div class="mar-l-30 mar-r-30">
        <div class="bg-white pad-50 flex flex-betw mar-t-30 clock flex-item-center" v-for="(item, index) in clockList" :key="item.time">
          <div class="flex flex-betw flex-col">
            <div class="flex">
              <div class="font-s-90">{{item.time}}</div>
              <div class="posi-rela changeclock">
                <fonticon class="posi-abso pad-l-20 icon font-s-40 color-ccc" icon="pen"></fonticon>
              </div>
            </div>
            <div class="flex color-666 font-s-20 pad-b-20">
              <div v-for="item1 in item.date" :key="item1" class="pad-r-10">{{item1 | getweek}}</div>
            </div>
          </div>
          <van-switch v-model="checked[index]"></van-switch>
        </div>
        <router-link class="bg-white pad-50 flex mar-t-30 clock flex-col flex-center bor-dash-ccc" to="/setclock">
          <div class="font-s-40 color-666 textcenter">+&nbsp;添加提醒</div>
        </router-link>
      </div>
      <div class="follow public-b-btn-outer">
        <div class="font-s-40 prov pad-t-30 pad-b-30">
          <fonticon icon="exclamation-circle"></fonticon>
          当前未关注饿了么公众号，无法接收提醒</div>
        <div class="follow-btn public-b-btn">去关注</div>
      </div>
    </div>
  </div>
</template>

<script>
import publictop from '@/common/components/publictop'
export default {
  data () {
    return {
      clockList: this.$store.state.clockList,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      checked: []
    }
  },
  components: {
    publictop
  },
  methods: {
    changecheckbox (index) {
      console.log(this.checked)
      this.checked.splice(index, 1, !this.checked[index])
    },
    goSetClock () {

    }
  },
  filters: {
    getweek (num) {
      if (!num.includes('周')) {
        return '周' + num
      }
      return num
    }
  },
  created () {
    this.checked = this.clockList.map(() => false)
  }
}
</script>

<style lang="less" scoped>
@import '~@/less/clocks.less';
</style>