<template>
  <div>
    <publictop title="选择城市" :arrow="true" :center="true"></publictop>
    <div class="public-content choosecity">
      <div class="searchinp font-s-35 pad-l-60 pad-r-60 main-bg pad-t-20 pad-b-20 posi-fixed">
        <input type="text" class="bg-white pad-l-80" placeholder="输入城市名进行搜索" @keydown="search">
      </div>
      <div class="cities posi-abso" @scroll="cityScroll" ref="cities">
        <!-- 所有城市列表 -->
        <div v-show="searchList.length === 0">
          <div>
            <div v-for="(item, index) in cityList" :key="item.title" class="bg-white font-s-40">
              <div class="color-333 pad-l-40 bg-f5 pad-t-40 pad-b-30 bor-b-eee posi-rela" 
                  :ref="item.title"
                  :class="{'posi-fixed nowcity': currentCity === index}">{{item.title}}</div>
              <div class="pad-l-40" :class="{'pad-t-100': currentCity === index}">
                <div v-for="(item1, index1) in item.lists" 
                    :key="item1" 
                    class="color-333 pad-t-40 pad-b-40 posi-rela"
                    :ref="item1"
                    @click="goChooseAddr(item1)" 
                    :class="{'bor-b-eee': index1 !== item.lists.length - 1}">{{item1}}</div>
              </div>
            </div>
          </div>
          <div class="posi-fixed aside-nav font-s-30 textcenter color-999">
            <div v-for="(item, index) in cityList" :key="index" @click="toCity(index)">{{item.title}}</div>
          </div>
        </div>
        <!-- 搜索出的城市列表 -->
        <div v-show="searchList.length !== 0" class="bg-white font-s-40">
          <div class="color-333 bg-f5 pad-t-40 pad-l-40 pad-b-30 bor-b-eee posi-rela">搜索结果</div>
          <div v-for="(item, index) in searchList" 
               :key="item" 
               @click="goChooseAddr(item)" 
               class="color-333 pad-t-40 pad-b-40 posi-rela pad-l-40"
               :class="{'bor-b-eee': index !== searchList.length - 1}">{{item}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import publictop from '@/common/components/publictop'
import cityList from '@/common/city'
export default {
  components: {
    publictop
  },
  data () {
    return {
      cityList, // 城市列表
      currentCity: 0,  // 当前所处区域
      nextCity: 1,  // 下一个所处区域
      currentTop: 0, // 当前所在区域相对定位的最顶部距离
      searchList: []  // 搜索结果
    }
  },
  methods: {
    // 滚动控制分类定位
    cityScroll (e) {
      const now = Object.values(this.$refs[this.cityList[this.currentCity].title])[0]
      const firstTop = Object.values(this.$refs[this.cityList[0].title])[0].offsetHeight
      const next = Object.values(this.$refs[this.cityList[this.nextCity].title])[0]
      console.log(this.nextCity)
      // 2种情况
      // 1：还没到最后，就判断是往上滚动还是往下滚动
      // 2：到最后了，只需要判断是否往上滚动到Y区了
      if (this.currentCity < (this.cityList.length - 1)) {
        if (e.target.scrollTop < (this.currentTop - firstTop)) {
          this.currentTop = this.currentCity <= 0 ? Object.values(this.$refs[this.cityList[0].title])[0].offsetTop : Object.values(this.$refs[this.cityList[this.currentCity - 1].title])[0].offsetTop
          this.currentCity = this.currentCity <= 0 ? 0 : (this.currentCity - 1)
        } else if (e.target.scrollTop > (next.offsetTop - firstTop)) {
          this.currentTop = Object.values(this.$refs[this.cityList[this.nextCity].title])[0].offsetTop
          this.currentCity = this.currentCity >= (this.cityList.length - 1) ? (this.cityList.length - 1) : this.currentCity + 1
        }
      } else if (e.target.scrollTop < (this.currentTop - firstTop)) {
        this.currentTop = this.currentCity === 0 ? Object.values(this.$refs[this.cityList[0].title])[0].offsetTop : Object.values(this.$refs[this.cityList[this.currentCity - 1].title])[0].offsetTop
        this.currentCity = this.currentCity - 1
      }
      this.nextCity = this.currentCity >= (this.cityList.length - 1) ? this.nextCity : (this.currentCity + 1)
    },
    // 跳转到当前城市所在的分类
    toCity (index) {
      this.currentTop = Object.values(this.$refs[this.cityList[index].title])[0].offsetTop
      this.currentCity = index
      this.nextCity = index >= (this.cityList.length - 1) ? this.nextCity : index + 1
      const nowCity = Object.values(this.$refs[this.cityList[index].title])[0]
      console.log(nowCity.offsetTop)
      this.$refs.cities.scrollTop = nowCity.offsetTop - nowCity.offsetHeight
    },
    // 地址检索
    search (e) {
      // 清空数组
      this.searchList.splice(0, this.searchList.length)
      if (e.keyCode === 13) {
        this.currentCity = 0
        this.nextCity = 1
        this.cityList.forEach(item => {
          item.lists.forEach(item1 => {
            if (item1.includes(e.target.value)) {
              this.searchList.push(item1)
            }
          })
        })
      }
    },
    // 返回选择地址页面
    goChooseAddr (item) {
      this.$store.commit('changeAddrCity', item)
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='less' scoped>
@import '~@/less/choosecity.less';
</style>