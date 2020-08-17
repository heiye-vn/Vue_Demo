<template>
  <div>
    <publictop title="设置时钟" :center="true" :arrow="true"></publictop>
    <div class="public-content setclock posi-abso bg-white overflow">
      <div class="posi-rela setclock-inner">
        <div class="choose-time">
          <van-picker
            v-model="currentTime"
            title=""
            :columns="column"
            :show-toolbar="false"
            @change="timechange"
            ref="timepick"
            class="bor-b-eee"
          />
        </div>
        <div class="choose-dura">
          <div class="font-s-45 pad-l-40 pad-r-30 pad-t-80 pad-b-60 color-666">重复周期</div>
          <div class="flex flex-wrap pad-l-40 font-s-38">
            <div v-for="(item, index) in duraList" 
                :key="item" 
                class="dura-item overflow bor-eee mar-r-30 mar-b-40 pad-l-30 pad-r-30 pad-t-20 pad-b-20 posi-rela"
                :class="{'on': index === currentIndex}"
                @click="changeOption(index)">
              <fonticon icon="cog" v-if="index === (duraList.length - 1)" class="color-ccc"></fonticon>
              {{item}}
              <div class="dura-chosed posi-abso"></div>
              <div class="check posi-abso">√</div>
            </div>
          </div>
        </div>
      </div>
      <div class="week-choose posi-abso flex flex-col" :class="{'on': showMenban}">
        <div class="flex-1 mengban" @click="closeMengban"></div>
        <div class="posi-rela bg-white weekchoose-item">
          <div class="title font-s-50 textcenter bor-b-eee pad-b-50 pad-l-40 pad-r-40 pad-t-40">自定义重复周期</div>
          <div class="pad-t-40 pad-l-40 pad-r-40">
            <div v-for="(item, index) in weekList" :key="item" class="flex flex-betw flex-item-center pad-b-50" @click="changeCheck(index)">
              <div class="font-s-40">{{item}}</div>
              <div>
                <van-checkbox v-model="weekchecked[index]"></van-checkbox>
              </div>
            </div>
          </div>
          <div class="close-mengban posi-abso textcenter font-s-55 color-999" @click="closeMengban">
            <fonticon icon="times"></fonticon>
          </div>
        </div>
        <div class="week-btn-outer">
          <div class="week-btn textcenter" :class="{'on': hascheck}" @click="addWeek">确认</div>
        </div>
      </div>
      <div class="public-b-btn-outer" @click="saveClock">
        <div class="public-b-btn">保存</div>
      </div>
    </div>
  </div>
</template>

<script>
import publictop from '@/common/components/publictop'
export default {
  data () {
    return {
      currentTime: '12:00',
      currentIndex: 0,
      column: [{
        values: [],
        defaultIndex: 1
      }, {
        values: [':'],
        defaultIndex: 2
      }, {
        values: [],
        defaultIndex: 3
      }],
      duraList: ['法定工作日(智能跳过节假日)', '周一至周五', '每天', '自定义'],
      weekList: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      weekchecked: [],
      hascheck: false,
      showMenban: false
    }
  },
  components: {
    publictop
  },
  created () {
    // 初始化
    let obj1 = this.column[0]
    let obj2 = this.column[2]
    let arr1 = []
    let arr2 = []
    for (let i = 0; i < 60; i++) {
      if (i < 24) {
        arr1.push(i < 10 ? ('0' + i) : i.toString())
      }
      if (!(i % 10)) {
        arr2.push(i < 10 ? ('0' + i) : i.toString())
      }
    }
    obj1.values = arr1
    obj2.values = arr2
    this.column.splice(0, 1, obj1)
    this.column.splice(2, 1, obj2)
    this.weekchecked = this.weekList.map(() => false)
  },
  mounted () {
    this.currentTime = this.$refs.timepick.getValues().join('')
  },
  methods: {
    // 修改每天闹钟时间
    timechange () {
      this.currentTime = this.$refs.timepick.getValues().join('')
    },
    // 添加自定义下的闹钟日期
    changeCheck (index) {
      this.weekchecked.splice(index, 1, !this.weekchecked[index])
      this.hasChecked()
    },
    // 判断自定下是否选择了日期
    hasChecked () {
      this.hascheck = this.weekchecked.includes(true)
    },
    // 设置闹钟周期
    changeOption (index) {
      this.currentIndex = index
      if (index === this.duraList.length - 1) {
        this.showMenban = true
      } else {
        this.duraList.splice(this.duraList.length - 1, 1, '自定义')
      }
    },
    // 自定义闹钟周期
    addWeek () {
      if(this.hascheck) {
        let weekaArr = []  // 被选择的数组
        let weekindex = 0  // 判断选择的日期是否为连续
        let dateStr = ''   // 自定义后显示的星期字符串

        weekaArr = this.weekList.filter((item, index) => this.weekchecked[index])
        try {
          this.weekList.forEach(item => {
          if (weekaArr[weekindex] === item) {
            weekindex++
            if (weekindex === weekaArr.length) {
              console.log('a'+weekindex)
              throw new Error('结束')
            }
          } else if (weekindex !== 0) {
            weekindex++
          }
          dateStr = weekaArr.join('、')
        })
        } catch (error) {
          dateStr = weekaArr[0] + '至' + weekaArr[weekaArr.length - 1]
        }
        this.duraList.splice(this.duraList.length - 1, 1, '自定义 ' + dateStr)
        this.showMenban = false
      }
    },
    // 关闭蒙版
    closeMengban () {
      this.showMenban = false
      this.duraList.splice(this.duraList.length - 1, 1, '自定义')
    },
    // 保存闹钟
    saveClock () {
      let clockObj = {}
      clockObj.time = this.currentTime
      if (this.currentIndex !== this.duraList.length - 1) {
        clockObj.date = [this.duraList[this.currentIndex]]
      } else {
        clockObj.date = this.weekList.filter((item, index) => this.weekchecked[index])
      }
      clockObj.check = true
      this.$store.commit('changeClockList', clockObj)
      this.$router.push('/clocks')
      console.log(clockObj)
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/less/setclock.less';
</style>