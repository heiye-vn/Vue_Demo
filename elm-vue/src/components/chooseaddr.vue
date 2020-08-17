<template>
  <div>
    <publictop title="选择收获地址" :arrow="true" :center="true"></publictop>
    <div class="public-content chooseaddr">
      <div class="searchaddr pad-l-30 flex pad-r-30 flex-item-center pad-b-20">
        <router-link class="localcity posi-rela pad-r-50 pad-l-30 font-s-38 color-white" to="/choosecity">{{$store.state.addrCity}}</router-link>
        <input type="text" class="textcenter bg-white font-s-40 flex-1 color-999 mar-l-5" placeholder="小区/写字楼/学校等">
      </div>
      <div>
        <div class="color-666 font-s-40 pad-l-40">当前地址</div>
        <div class="bg-white pad-l-50 pad-r-50 flex flex-betw font-s-38 pad-t-10 pad-b-10 location">
          <div @click="addAddr(location)">{{location}}</div>
          <div>
            <i></i>
            重新定位
          </div>
        </div>
      </div>
      <div>
        <div v-if="!isSearch">
          <div class="color-666 font-s-40 pad-l-40">附近地址</div>
          <div class="bg-white font-s-40 pad-t-10 pad-b-10 color-333">
            <div class="mar-l-50 pad-r-50" 
                 :class="{'bor-b-eee': index !== nearbyList.length - 1}" 
                 v-for="(item, index) in nearbyList" 
                 :key="item"
                 @click="addAddr(item)">{{item}}</div>
          </div>
        </div>
        <div v-else class="search-result">
          <div class="color-666 font-s-40 pad-l-40">搜索地址</div>
          <div class="bg-white"></div>
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
      location: '正在定位',
      nearbyList: ['天府三街', '天府四街', '天府五街'],
      isSearch: false 
    }
  },
  methods: {
    addAddr (addr) {
      this.$store.commit('changeAddr', ['addr', this.$store.state.addrCity + addr])
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='less' scoped>
@import '~@/less/chooseaddr.less';
</style>