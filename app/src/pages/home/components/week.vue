<template>
  <div>
    <h3>周末去哪</h3>
    <div class="item">
      <div class="inner-list"
        v-for="(item, index) in week"
        :key="index"
      >
        <img :src="item.imgUrl" >
        <h3>{{item.title}}</h3>
        <p class="des">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'week-page',
  props: ['week']
}
</script>
<style lang="stylus" scoped>
  .inner-list
    height: 4rem
    margin-bottom 0.1rem
    img
      width 100%
</style>
