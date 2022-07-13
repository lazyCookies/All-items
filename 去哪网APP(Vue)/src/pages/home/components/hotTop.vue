<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide
        v-for="(item, index) in hot"
        :key="index"
      >
        <img :src="item.imgUrl" alt="" class="item-img">
        <!-- top1-3 -->
        <img :src="top[index]" alt="" class="pos">
        <p class="title">{{item.title}}</p>
        <p class="price">{{item.price}}</p>
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
  name: 'hot-page',
  props: {
    hot: Array,
    top: Array
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 3.5,
        spaceBetween: 20
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.item-img
  width 100%
</style>
