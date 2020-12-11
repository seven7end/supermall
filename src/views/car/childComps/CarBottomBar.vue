<template>
  <div class="car-bottom">
    <check-button class="check-button" 
      :isChecked="isCheckAll" 
      @click.native="checkClick"/>
    <span class="select-all">全选</span>
    <div class="total-price">合计: {{totalPrice}}</div>
    <div class="caculate" @click="calcClick">去计算({{totalCount}})</div>

  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import {mapGetters} from 'vuex'

export default {
  components: {
    CheckButton
  },
  computed: {
    //获取getter中的数据
    ...mapGetters({carList: 'carList'}),
    totalPrice(){
      return this.carList.filter(item => { 
        return item.checked === true
        }).reduce((prev,item) => {
        return prev + item.price * item.count 
      },0).toFixed(2)
    },
    totalCount(){
      return this.carList.filter(item => {
        return item.checked === true
      }).length
    },
    isCheckAll(){
      //当购物车为空时,默认全选按钮为->不选
      if(this.carList.length === 0) return false

      //当购物车中任一商品的checked=false时,
      //表示有商品未被选中,直接返回false
      //否则就是默认组件的default全选中
      return !this.carList.some( item => {
        return item.checked === false})
    }
  },
  methods: {
    checkClick(){
      if(this.isCheckAll){
        this.carList.forEach(element => {
          element.checked = false
        });
      }else{
        this.carList.forEach(element => {
          element.checked = true
        });
      }
    },
    calcClick(){
      if(!this.totalCount){
        this.$toast.show('请选择购买的商品')
      }
    }
  }

  }

</script>
<style scoped>
  .car-bottom{
    width: 100%;
    background-color: rgb(241, 237, 237);
    line-height: 40px;
    position: fixed;
    bottom: 49px;
    display: flex;
  }
  .check-button{
    flex: 0.5;
    text-align: end;
  }
  .select-all{
    flex: 1;
  }
  .total-price{
    flex: 3;
  }
  .caculate{
    flex: 2;
    text-align: center;
    background: rgb(245, 134, 8);
    color: #fff;
  }
</style>