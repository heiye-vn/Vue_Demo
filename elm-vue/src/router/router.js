const index = () => import('@/components/index')
const mine = () => import('@/components/mine')
const order = () => import('@/components/order')
const addr = () => import('@/components/addr')
const balance = () => import('@/components/balance')
const collect = () => import('@/components/collect')
const recommend = () => import('@/components/recommend')
const rules = () => import('@/components/rules')
const shop = () => import('@/components/shop')
const shopper = () => import('@/components/shopper')
const search = () => import('@/components/search')
const shopperlist = () => import('@/components/shopperlist')
const redbag = () => import('@/components/redbag')
const customserver = () => import('@/components/customserver')
const login = () => import('@/components/login')
const main = () => import('@/components/main')
const clocks = () => import('@/components/clocks')
const setclock = () => import('@/components/setclock')
const chooseaddr = () => import('@/components/chooseaddr')
const choosecity = () => import('@/components/choosecity')

const routes = [{
  path: '/',
  redirect: '/main'
}, {
  path: '/main',
  component: main,
  children: [{
    path: '',
    redirect: '/main/index',
    meta: {
      index: 0
    }
  }, {
    path: 'index',
    component: index,
    meta: {
      index: 0
    }
  }, {
    path: 'mine',
    component: mine,
    meta: {
      index: 2
    }
  }, {
    path: 'order',
    component: order,
    meta: {
      index: 1
    }
  }]
}, {
  path: '/addr',
  component: addr
}, {
  path: '/balance',
  component: balance
}, {
  path: '/collect',
  component: collect
}, {
  path: '/recommend',
  component: recommend
}, {
  path: '/rules',
  component: rules
}, {
  path: '/shop',
  component: shop
}, {
  path: '/shopper',
  component: shopper
}, {
  path: '/search',
  component: search
}, {
  path: '/shopperlist',
  component: shopperlist
}, {
  path: '/redbag',
  component: redbag
}, {
  path: '/customserver',
  component: customserver
}, {
  path: '/login',
  component: login
}, {
  path: '/clocks',
  component: clocks
}, {
  path: '/setclock',
  component: setclock
}, {
  path: '/chooseaddr',
  component: chooseaddr
}, {
  path: '/choosecity',
  component: choosecity
}]

export default routes