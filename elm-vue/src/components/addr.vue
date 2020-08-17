<template>
  <div class="posi-abso overflow addr-outer">
    <publictop :title="title" :arrow="true" :center="true"></publictop>
    <div class="public-content addr">
      <div class="posi-rela">
        <div>
          <div v-for="(item, index) in addrList" :key="index" 
              class="flex flex-betw pad-40 bg-white mar-b-7 flex-item-center">
            <div class="flex flex-betw flex-col">
              <div class="flex font-s-37 flex-item-center color-666 pad-b-10">
                <div class="font-weight font-s-45 color-333 pad-r-30">{{item.name || ''}}</div>
                <div class="pad-r-30">{{item.gender || ''}}</div>
                <div>{{item.tel}}</div>
              </div>
              <div class="flex flex-item-center addr-detail">
                <div class="font-s-35 place color-white pad-l-10 pad-r-10 mar-r-10" v-if="item.place">{{item.place || ''}}</div>
                <div class="font-s-37 color-999">{{item.addr || ''}}&nbsp;{{item.detail || ''}}</div>
              </div>
            </div>
            <i class="iconfont icon-write font-s-60 color-999" @click="addAddr(index)"></i>
          </div>
        </div>
        <div class="posi-fixed add-addr-btn bg-white pad-t-40 pad-b-40 font-s-45 color-blue flex flex-center flex-item-center">
          <i class="iconfont icon-add_circle pad-r-10 font-s-46"></i>
          <div class="font-weight" @click="addAddr(-1)">新增地址</div>
        </div>
      </div>
      <div class="public-content add-addr bg-f5 posi-abso"
           :class="{'on': addAddrShow}">
        <div class="bg-white">
          <div class="flex mar-l-40 bor-b-eee">
            <div class="color-333 font-weight font-s-45 addr-title flex flex-betw pad-t-30 pad-b-30">
              <div>联系人</div>
              <div></div>
            </div>
            <div class="flex-1 font-s-40">
              <input v-model="addrObj.name" placeholder="请输入收件人" class="pad-b-20" name="name" @input="inputAddr"/>
              <div class="flex flex-item-center pad-t-20 pad-b-20 font-s-40">
                <div class="bor-eee typechoose textcenter mar-r-20 gender" :class="{'on': isMan}" @click="isMan = true">先生</div>
                <div class="bor-eee typechoose textcenter gender" :class="{'on': !isMan}" @click="isMan = false">女士</div>
              </div>
            </div>
          </div>
          <div class="flex flex-item-center mar-l-40 bor-b-eee">
            <div class="color-333 font-weight font-s-45 addr-title">电话</div>
            <input class="flex-1 font-s-40" v-model="addrObj.tel" placeholder="请输入收件人电话" name="tel" @input="inputAddr"/>
          </div>
          <div class="flex flex-item-center mar-l-40 bor-b-eee">
            <div class="color-333 font-weight font-s-45 addr-title">地址</div>
            <div class="flex flex-1 flex-item-center font-s-40 pad-r-40">
              <router-link class="flex-1" to="/chooseaddr">{{addrObj.addr}}</router-link>
              <fonticon icon="chevron-right" class="font-s-35 color-bbb"></fonticon>
            </div>
          </div>
          <div class="flex mar-l-40">
            <div class="color-333 font-weight font-s-45 addr-title flex flex-betw pad-t-30 pad-b-30">
              <div>补充说明</div>
              <div></div>
            </div>
            <div class="flex-1 font-s-40">
              <textarea name="detail" placeholder="请输入收货详细地址" class="flex-1 font-s-40 mar-r-40" v-model="addrObj.detail" @input="inputAddr"></textarea>
              <div class="flex flex-item-center pad-t-20 pad-b-20 font-s-40">
                <div class="bor-eee typechoose textcenter place" 
                     v-for="(item, index) in placeList" 
                     :key=item
                     :class="{'mar-r-20': index !== placeList.length - 1, 'on': index === currentPlaceIndex}"
                     @click="currentPlaceIndex = currentPlaceIndex !== index ? index : -1">{{item}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="mar-l-40 mar-r-40 flex color-white font-s-45 mar-t-50 addr-btns textcenter">
          <div class="delete-addr addr-btn flex-1 mar-r-10" @click="deleteAddr" v-if="currentIndex !== -1">删除</div>
          <div class="delete-addr addr-btn flex-1 mar-r-10" @click="closeAdd" v-if="currentIndex === -1">取消</div>
          <div class="sure-addr addr-btn flex-1 mar-l-10" @click="saveAddr">确定</div>
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
      addrList: [{
        name: '陈刚',
        gender: '先生',
        tel: '18883793576',
        place: '学校',
        detail: '101博智',
        addr: '成都市软件园C2'
      }, {
        name: '陈刚',
        gender: '先生',
        tel: '18883793576',
        place: '',
        detail: '101博智',
        addr: '成都市软件园C2'
      }],
      addAddrShow: false,
      currentIndex: -1,
      currentPlaceIndex: -1,
      placeList: ['家', '学校', '公司'],
      isMan: true,
      addrObj: this.$store.state.addrObj,
      title: '收获地址'
    }
  },
  methods: {
    // 地址删除
    deleteAddr () {
      this.$dialog.confirm({
        title: '删除后无法回复',
        message: '是否删除',
      }).then(() => {
        this.addrList.splice(this.currentIndex, 1)
        this.prov({
          msg: '删除成功',
          time: 1.5
        })
        this.addAddrShow = false
      }).catch(() => {
        this.prov({
          msg: '取消删除',
          time: 1,
          type: 'success'
        })
      });
    },
    // 地址保存
    saveAddr () {
      // 判断收货人
      const vali = this.validat('name', this.addrObj.name)
      if (vali.code == 200) {
        // 判断收货人电话
        const vali1 = this.validat('tel', this.addrObj.tel)
        if (vali1.code === 200) {
          // 判断收货地址
          console.log(this.addrObj.addr)
          console.log(this.addrObj.addr === '请选择收货地址')
          const vali2 = this.validat('addr', this.addrObj.addr === '请选择收货地址' ? '' : this.addrObj.addr)
          if (vali2.code === 200) {
            // 判断收货详细地址
            const vali3 = this.validat('detail', this.addrObj.detail)
            if (vali3.code === 200) {
              this.$set(this.addrObj, 'gender', this.isMan ? '先生' : '女士')
              this.$set(this.addrObj, 'place', this.placeList[this.currentPlaceIndex])
              // 判断修改还是添加 -1 添加  非-1  修改
              if (this.currentIndex === -1) {
                this.addrList.push(JSON.parse(JSON.stringify(this.addrObj)))
              } else {
                this.addrList.splice(this.currentIndex, 1, JSON.parse(JSON.stringify(this.addrObj)))
              }
              console.log(4);
              this.prov({
                msg: this.currentIndex === -1 ? '添加成功' : '修改成功'
              })
              this.addAddrShow = false
              for (const i in this.addrObj) {
                this.$set(this.addrObj, i, '')
              }
            } else {
              console.log(3)
              this.prov({
                msg: vali3.msg,
                type: 'fail'
              })
            }
          } else {
            console.log(2)
            this.prov({
              msg: vali2.msg,
              type: 'fail'
            })
          }
        } else {
          console.log(1)
          this.prov({
            msg: vali1.msg,
            type: 'fail'
          })
        }
      } else {
        console.log(0)
        this.prov({
          msg: vali.msg,
          type: 'fail'
        })
      }
    },
    // 输入地址信息
    inputAddr (e) {
      this.$set(this.addrObj, e.currentTarget.name, e.currentTarget.value)
    },
    // 添加或者修改地址
    addAddr (index) {
      this.title = index !== -1 ? '修改地址' : '添加地址'
      this.currentIndex = index
      if (this.currentIndex === -1) {
        for (const i in this.addrObj) {
          this.$store.commit('changeAddr', [i, i !== 'addr' ? '' : '请选择收货地址'])
        }
      } else {
        for (const i in this.addrObj) {
          this.$store.commit('changeAddr', [i, this.addrList[this.currentIndex][i]])
        }
      }
      this.addAddrShow = true
    },
    // 验证输入信息
    validat (key, value) {
      const validateObj = {
        'tel': {empty: '手机号不能为空', err: '手机号格式不正确', reg: /^1[356789][0-9]{9}$/},
        'name': {empty: '收货人不能为空'},
        'addr': {empty: '地址不能为空'},
        'detail': {empty: '详细地址不能为空'}
      }
      const obj = validateObj[key]
      if (value) {
        if (key === 'tel') {
          if (obj.reg.test(value)) {
            return {
              msg: '',
              code: 200
            }
          } else {
            return {
              msg: obj.err,
              code: 300
            }
          }
        } else {
          return {
            msg: '',
            code: 200
          }
        }
      } else {
        return {
          msg: obj.empty,
          code: 300
        }
      }
    },
    // 取消添加地址
    closeAdd () {
      this.title = '收获地址'
      this.addAddrShow = false
    }
  }
}
</script>

<style lang='less' scoped>
@import '~@/less/addr.less';
</style>