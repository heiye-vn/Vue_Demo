const productList = require('./src/mock/productList.json');
const categories = require('./src/mock/categories.json');

const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('src/components', resolve('com'))
      .set('src/images', resolve('img'))
      .set('src/less', resolve('less'))
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
  devServer: {
    proxy: {
      '/apis': {
        target: 'http://192.168.10.39',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/apis': ''
        }
      }
    },

    before(app) {
      app.get('/api/products', (req, res) => {
        res.send({
          // 商品数据
          productList,
          // 商品分类
          categories
        })
      })
    }
  }
}
function addStyleResource (rule) {
  rule.use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [
          path.resolve(__dirname, './src/assets/css/global.less'),
        ],
      })
}