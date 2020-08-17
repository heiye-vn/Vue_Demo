import Vue from 'vue'
import Vuex from 'vuex'

import shopImg from '@/images/3.jpg'
import productList from './modules/productList';
import shoppingCart from './modules/shoppingCart';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clockList: [{
      time: '08:00',
      date: ['一', '二', '三', '四']
    }, {
      time: '09:00',
      date: ['一', '二', '三', '四']
    }],
    addrCity: '成都市',
    addrObj: {
      name: '',
      gender: '',
      tel: '',
      place: '',
      detail: '',
      addr: '请选择收货地址'
    },
    collectList: [{
      img: shopImg,
      sendStart: 0,
      sendMoney: 0,
      saleNum: 42,
      sendTime: 86,
      sendDistance: 3.7,
      shopName: '温馨花坊',
      discount: ['7元会员红包', '特价138元起', '支持预订'],
      willSend: true,
      percent: 4.2
    }]
  },
  mutations: {
    changeClockList (state, data) {
      state.clockList.push(data)
    },
    changeAddr (state, obj) {
      console.log(obj)
      state.addrObj[obj[0]] = obj[1]
    },
    changeAddrCity (state, data) {
      state.addrCity = data
    }
  },
  actions: {
  },
  modules: {
    productList,      // 商家页面中的商品列表数据
    shoppingCart      // 购物车中的商品数据
  }
})
