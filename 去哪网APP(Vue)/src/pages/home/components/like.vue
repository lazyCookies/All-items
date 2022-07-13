<template>
  <div>
    <h3>猜你喜欢</h3>
    <Row
      :gutter="16"
      v-for="(item, idx) in like"
      :key="idx"
    >
        <Col span="6">
          <img :src="item.imgUrl" alt="">
        </Col>
        <Col span="15">
          <p class="title">{{item.title}}</p>
          <p>
            <Rate allow-half v-model="item.start" />
            <span>{{item.comment_num}}条评论</span>
          </p>
          <p>{{item.price}}</p>
        </Col>
        <Col span="3">
          {{item.address}}
        </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: 'like-page',
  props: {
    like: Array
  }
}
</script>
<style lang="stylus" scoped>
img
  width 100%
</style>
