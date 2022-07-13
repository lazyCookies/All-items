<template>
  <div>
    <!-- 头部代码 -->
    <Row class="header">
        <Col span="2">
          <i class="iconfont">&#xe604;</i>
        </Col>
        <Col span="18">
          <div class="input">
            111
            <Icon type="ionic"></Icon>
          </div>
        </Col>
        <Col span="4"  class="text">
        <!--
          1. <router-link to="path的路径地址"></router-link>
          2. 通过JS进行跳转 this.$router.push()
         -->
          <div @click="toCity">
            <span>{{name}}</span>
            <i class="iconfont">&#xe627;</i>
          </div>
        </Col>
    </Row>
    <!-- 轮播图 -->
    <banner :list="dataList.swiperList"></banner>
    <!-- 主菜单 -->
    <menus :menus="dataList.iconList"></menus>
    <!-- 热门榜单 -->
    <hot-top :hot="dataList.hotList" :top="dataList.topIcon"></hot-top>
    <!-- 猜你喜欢 -->
    <like :like="dataList.itemList"></like>
    <!-- 周末去哪 -->
    <week :week="dataList.weekendList"></week>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import banner from './components/banner.vue'
import like from './components/like.vue'
import hotTop from './components/hotTop.vue'
import week from './components/week.vue'
import menus from './components/menus.vue'
export default {
  /* vetur */
  name: 'home-index',
  components: {
    banner,
    like,
    hotTop,
    week,
    menus
  },
  computed: {
    ...mapState({ /* 等价于  name () { return this.$store.state.city } */
      name: 'city'
    }),
    city () {
      // 获取query方式参数
      // return this.$route.query.city
      // return this.$route.params.city
      /* 在组件中获取store对象， this.$store */
      return this.$store.state.city
    }
  },
  methods: {
    toCity () {
      /* 2. 路由跳转 */
      this.$router.push('/city')
    }
  },
  data () {
    return {
      dataList: {
        hotList: [],
        iconList: [],
        itemList: [],
        swiperList: [],
        topIcon: [],
        weekendList: []
      }
    }
  },
  mounted () {
    this.Axios.get('/mock/index.json').then((result) => {
      console.log(result)
      if (result.data.ret) {
        this.dataList = result.data.data
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>
<style lang="stylus" scoped>

.header
  height: .88rem
  background: #00bcd4
  text-align center
  line-height 0.88rem
  color: #fff
.input
  background: #fff
  height: .6rem
  line-height 0.6rem
  text-align left
  margin-top 0.14rem
  color: #e4e7ea
</style>
