<template>
  <div class="list-item">
    <div class="item-select">
      <check-button :isChecked="product.checked" @click.native="checkClick"/>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="">
    </div>
    <div class="item-info">
      <div class="info-title">{{product.title}}</div>
      <div class="info-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="bottom-price">{{'¥' + product.price}}</div>
        <div class="bottom-count">{{'x' + product.count}}</div>
      </div>
    </div>
  </div>

</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
 props: {
   product: {
     type: Object,
     default(){
       return {}
     }
   }
 },
 components: {
   CheckButton
 },
 methods: {
   checkClick(){
    this.product.checked = !this.product.checked
   }
 }
}
</script>

<style scoped>
.list-item{
  border-bottom: 1px solid rgb(223, 222, 222);
  padding: 10px 10px;
  width: 100%;
  height: 120px;
  position: relative;
}
.item-select{
  width: 5%;
  float: left;
  margin: 42px 8px 0 0;
  
}
.item-img{
  width: 25%;
  float: left;
}
.item-img img{
  width: 80px;
  height: 100px;
  border-radius: 5%;
}

.item-info{
  width: 60%;
  display: flex;
  flex-direction: column;
  float: left;
  font-size: 15px;
}
.info-title{
  font-size: 18px;
  margin-bottom: 4px;
}
.info-title, .info-desc{
  overflow: hidden;
  white-space: nowrap;
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;

}
.info-bottom{
  margin-top: 20px;
  font-size: 18px;
}
.info-bottom{
  position: relative;
  display: flex;
  justify-content: space-between;
}
.bottom-price,.bottom-count{
  flex: 1;
}
.bottom-count{
  position: absolute;
  right: 0;
}
.bottom-price{
  color: rgb(245, 101, 18);
}
</style>