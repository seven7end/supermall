<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :key="item.id" :goods-item="item"/>
    <!-- {{goods}} -->
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'


export default {
  //接收父组件的goods
  props: {
    goods: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }

}
</script>

<style>
.goods-list {

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;


  }
</style>