<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="info-price-new">{{goods.newPrice}}</span>
      <span class="info-price-old">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>  
    </div>
    <div class="info-service">
      <span v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" v-if="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .base-info {
    margin-top: 15px;
    padding: 0 10px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title{
    color: dimgrey;
    margin-bottom: 20px ;
  }

  .info-price{
    height: 25px;
  }
  .info-price-new{
    font-size: 25px;
    color: var(--color-tint);
    margin-right: 8px;
  }
  .info-price-old{
    text-decoration: line-through;
  }
  .discount{
    background-color: var(--color-tint);
    color: floralwhite;
    padding: 2px 5px;
    font-size: 15px ;
    border-radius: 8px;
    margin-left: 5px ;

    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -8px;
  }
  .info-other{
    display: flex;
    margin-top: 30px;
    font-size: 13px;
    line-height: 30px;
    border-bottom: 1px solid rgb(219, 218, 218);
  }
  .info-other span{
    flex: 1;
    text-align: center;
  }

  .info-service{
    margin: 20px;
    display: flex;
    color: #333;
    font-size: 13px;
  }

  .info-service span{
    flex: 1;
    text-align: center;
  }

  .info-service img{
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;

  }
</style>