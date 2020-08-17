<template>
  <div>
    <publictop title="规则" :arrow="true" :center="true"></publictop>
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
@import '~@/less/rules.less';
</style>