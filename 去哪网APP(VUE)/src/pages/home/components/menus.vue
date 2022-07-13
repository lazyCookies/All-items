<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide
        v-for="(item, index) in pages"
        :key="index"
      >
        <ul class="list">
          <li
            v-for="itm in item"
            :key="itm.id"
          >
            <img :src="itm.imgUrl" alt="">
            <p>{{itm.title}}</p>
          </li>
        </ul>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import Vue from 'vue'
import SwiperVue from 'vue-awesome-swiper'
import 'swiper/swiper.min.css'
Vue.use(SwiperVue)
export default {
  name: 'menus-page',
  data () {
    return {
      swiperOption: {}
    }
  },
  props: {
    menus: Array
  },
  computed: {
    pages () {
      const pages = []
      this.menus.forEach(function (val, idx) {
        const page = parseInt(idx / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(val)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
.list
  height: 3.5rem
  display flex
  flex-wrap: wrap
  li
    width 25%
    text-align center
    img
      width 65%
      margin 0 auto
</style>
