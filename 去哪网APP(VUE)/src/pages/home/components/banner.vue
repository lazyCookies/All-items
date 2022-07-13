<template>
  <div class="banner">
    <Carousel autoplay loop
      :radius-dot="setting.radiusDot"
      :arrow="setting.arrow"
    >
        <CarouselItem
          v-for="(item, index) in list"
          :key="index"
        >
            <div class="demo-carousel">
              <img :src="item" alt="">
            </div>
        </CarouselItem>
    </Carousel>
  </div>
</template>
<script>
export default {
  name: 'banner-page',
  props: ['list'],
  data () {
    return {
      setting: {
        radiusDot: true,
        arrow: 'never'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner
  height: 2rem
  .ivu-carousel
    height: 2rem
    img
      width 100%
      height: 2rem
</style>
