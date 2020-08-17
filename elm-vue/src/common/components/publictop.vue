<template>
  <div class="public-top flex flex-item-center posi-fixed flex-betw font-s-50" 
       :style="{backgroundColor: bgcolor, color: color}"
       :class="{'flex-center': center}">
    <div class="publictop-arrow pad-l-40 posi-abso" v-if="arrow" @click="goback">
      <fonticon icon="chevron-left"></fonticon>
    </div>
    <div class="font-weight font-s-48 pad-l-40">{{title}}</div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '未知标题'
    },
    arrow: false,
    bgcolor: {
      type: String,
      default: '#2395ff'
    },
    center: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'white'
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.public-top {
  height: 14vw;
  // background-image: linear-gradient(90deg,#0af,#0085ff);
  line-height: 14vw;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  .publictop-arrow {
    left: 0;
    top: 0;
    width: 14vw;
    text-align: left;
  }
}
</style>