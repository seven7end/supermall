<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="showImg" alt="" @load="ImageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    //监听每个图片加载完成,就发送
    ImageLoad(){
      this.$bus.$emit('itemImageLoad')
    },
    //监听item的点击,进行路由跳转到详情页
    itemClick(){
      // console.log('ss')
      this.$router.push('/details/' + this.goodsItem.iid)
      
    }
  },
  computed: {
    showImg(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  }
}
</script>

<style>
 .goods-list-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods-list-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-tint);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>