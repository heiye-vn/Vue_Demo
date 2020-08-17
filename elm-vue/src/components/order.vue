<template>
  <div>
    <publictop title="我的订单"></publictop>
    <div class="public-content">
      <div v-if="orderList.length > 0">
        <div v-for="(item, index) in orderList" :key="item.time" class="pad-l-37 pad-t-40 bg-white mar-t-37 order-item">
          <div class="flex bor-b-efe color-333">
            <div class="font-s-0 pad-r-26">
              <img :src="item.img" alt="" class="bor-efe">
            </div>
            <div class="flex-1">
              <div class="bor-b-efe pad-b-26 pad-r-34">
                <div class="flex flex-betw">
                  <div class="font-s-35">
                    {{item.shoppername}}
                    <fonticon icon="chevron-right" class="font-s-30 color-ccc"></fonticon>
                  </div>
                  <div class="font-s-34">{{item.type}}</div>
                </div>
                <div class="color-999 font-s-29">{{item.time}}</div>
              </div>
              <div class="flex flex-betw pad-t-40 pad-b-40 pad-r-34 font-s-34">
                <div class="color-666">{{item.shops}}等{{item.shopsNum}}件商品</div>
                <div class="font-weight color-333">{{item.totalPrice | price}}</div>
              </div>
            </div>
          </div>
          <div class="flex flex-end buyagain">
            <div class="buyagain-btn font-s-34">再来一单</div>
          </div>
        </div>
      </div>
      <div v-else>

      </div>
    </div>
  </div>
</template>

<script>
import publictop from '@/common/components/publictop'
import head from '@/images/3.jpg'
export default {
  components: {
    publictop
  },
  data () {
    return {
      orderList: [{
        img: head,
        shoppername: '宇宙汉堡王',
        time: '2020-08-06 14:19',
        type: 0,
        totalPrice: 30.9,
        shops: '火星汉堡',
        shopsNum: 2
      }, {
        img: head,
        shoppername: '宇宙汉堡王',
        time: '2020-08-06 14:17',
        type: 0,
        totalPrice: 30.9,
        shops: '火星汉堡',
        shopsNum: 2
      }, {
        img: head,
        shoppername: '宇宙汉堡王',
        time: '2020-08-06 14:18',
        type: 0,
        totalPrice: 30.9,
        shops: '火星汉堡',
        shopsNum: 2
      }, {
        img: head,
        shoppername: '宇宙汉堡王',
        time: '2020-08-06 14:16',
        type: 0,
        totalPrice: 30.9,
        shops: '火星汉堡',
        shopsNum: 2
      }]
    }
  },
  filters: {
    price (price) {
      return '￥' + price.toFixed(2)
    }
  }
}
</script>

<style lang='less' scoped>
@import '~@/less/order.less';
</style>