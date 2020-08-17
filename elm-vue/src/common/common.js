import axios from 'axios'
import { Toast } from 'vant'
// 封装axios请求
const axiosRequest = (config) => {
  const axiosrequest = axios.create({
    baseURL: '/apis/RestaurantSystem',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
  return axiosrequest(config)
}

// rem设置
const setRem = () => {
  let fontSize = window.innerWidth * 100 / 1000
  document.getElementsByTagName('html')[0].style.fontSize = fontSize + 'px'
}
window.onresize = (e) => {
  setRem()
}
setRem()

const prov = (obj) => {
  Toast({
    message: obj.msg || '提示错误',
    duration: (obj.time || 2) * 1000,
    type: obj.type || 'success'
  })
}
export {
  axiosRequest,
  prov
}