<template>
  <div>
    <publictop title="推荐有礼" :arrow="true" :center="true"></publictop>
  </div>
</template>

<script>
import publictop from '@/common/components/publictop'
export default {
  components: {
    publictop
  },
  data () {
    return {}
  }
}
</script>

<style lang='less' scoped>
@import '~@/less/recommend.less';
</style>