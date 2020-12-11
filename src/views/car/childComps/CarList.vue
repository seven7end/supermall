<template>
  <div class="car-list">
    <scroll class="content" ref="scroll">
      <car-list-item 
        v-for="item in this.carList" 
        :key="item.id"
        :product="item"/>
    </scroll>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import Scroll from 'components/common/scroll/Scroll'
import CarListItem from './CarListItem'



export default {
  computed: {
    ...mapGetters(['carList'])
  },
  components: {
    Scroll,
    CarListItem
  },
  activated(){
    //购物车加入数据时,需要重新计算高度保持滚动正常
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.car-list{
  height: 100vh;
}
.content{
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
</style>