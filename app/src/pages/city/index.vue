<template>
  <div>
    <header>
      <Icon type="ios-arrow-back" @click.native="toHome"/>
      <p class="header-title">城市选择</p>
    </header>
    <div class="mp">
      <!-- 热门城市 -->
      <div class="hotCity">
        <h3>热门城市</h3>
        <ul class="hotList">
          <li
            v-for="(item, index) in dataList.hotCities"
            :key="index"
            @click="changeCity(item.name)"
          >
            {{item.name}}
          </li>
        </ul>
      </div>
      <!-- 字母排序 -->
      <div class="hotCity">
        <h3>字母排序</h3>
        <ul class="hotList">
          <li
            v-for="(val, key) in dataList.cities"
            :key="val.id"
            class="sortItem"
          >
            <!-- 锚点定位 -->
            <a :href="'#sort' + key">{{key}}</a>
          </li>
        </ul>
      </div>
      <!-- 字母城市项 -->
      <div class="hotCity"
        v-for="(val, key) in dataList.cities"
        :key="val.id"
      >
        <div :id="'sort' + key"></div>
        <h3>{{key}}</h3>
        <ul class="hotList">
          <li
            v-for="(item, index) in val"
            :key="index"
            class="cityItems"
            @click="changeCity(item.name)"
          >
            {{item.name}}
          </li>
        </ul>
      </div>
      <!-- <div class="hotCity">
        <div id="sortB"></div>
        <h3>B</h3>
        <ul class="hotList">
          <li
            v-for="(val, key) in dataList.cities"
            :key="val.id"
            class="sortItem"
          >
            <a :href="'#sort' + key">{{key}}</a>
          </li>
        </ul>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'city-index',
  data () {
    return {
      dataList: {}
    }
  },
  methods: {
    /**
     * 点击城市，跳转到首页，
     * @params name:点击传入的城市名
      */
    changeCity (name) {
      /* 路由跳转 2种携带参数 */
      // this.$router.push({ path: '/', query: { city: name } })
      // 命名式路由
      this.$router.push({ name: 'home', params: { city: name } })
      /* 点击后同时修改store仓库中city值 */
      this.$store.dispatch('selectCity', name) // 组件中修改仓库，通过dispatch方法，会提交给actions
      // 本地存储，
      localStorage.city = name
    },
    toHome () {
      this.$router.push('/')
    },
    getCityData () {
      this.Axios.get('/mock/city.json').then((res) => {
        console.log(res)
        if (res.data.ret) {
          this.dataList = res.data.data
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getCityData()
  }
}
</script>
<style lang="stylus" scoped>
header
  height: .88rem
  background: #00bcd4
  position relative
  color: #fff
  i
    font-size: 0.4rem
    position absolute
    left: 0
    top 0
    width 0.8rem
    line-height 0.88rem
  .header-title
    text-align center
    line-height 0.88rem
    margin: 0 1rem
    font-size: 0.32rem
.hotCity
  h3
    padding: 0 .3rem
    line-height .72rem
    font-size: 0.24rem
    background: #f5f5f5
  .hotList
    display flex
    flex-wrap: wrap
    li
      width 33.33%
      text-align center
      line-height .9rem
      border-bottom: 1px solid #ddd
      color: #212121
  li.sortItem
    width 16.66%
    border: none
    a
      color #212121
  li.cityItems
    width 25%
</style>
