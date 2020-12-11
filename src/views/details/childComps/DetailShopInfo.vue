<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shop-top">
      <img :src="shopInfo.logo" alt="">
      <span>{{shopInfo.name + '旗舰店'}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-left shop-middle-item">
        <div class="shop-sell shop-left-item">
          <div class="sell-count">{{sellcount}}</div>
          <div class="sell-text">总销量</div>
        </div>
        <div class="shop-good shop-left-item">
          <div class="good-count">{{shopInfo.cGoods}}</div>
          <div class="good-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-right shop-middle-item">
        <table v-for="item in shopInfo.score" :key="item.id">
          <tr>
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高' : '低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom"><span>进店逛逛</span></div>
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    sellcount(){
      if(this.shopInfo.cSells < 10000){
        return this.shopInfo.cSells
      }else{
        return (this.shopInfo.cSells/10000).toFixed(1) + '万'
      }
    }
  }
}
</script>

<style scoped>
.shop-info{
  padding: 0 10px;
  border-bottom: 5px solid #f2f5f8 ;
}
.shop-top{
  height: 45px;
  margin-top: 10px;
  /* 让元素垂直中心对齐 */
  display: flex;
  align-items: center;
}
.shop-top img{
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
.shop-top span{
  margin-left: 10px ;
}
.shop-middle{
  display: flex;
  margin-top: 20px;
}
.shop-middle-item{
  flex: 1;
}

.shop-left{
  border-right: 1px solid rgb(218, 215, 215);
  display: flex;
  align-items: center;
  text-align: center;
}
.shop-left-item{
  flex: 1;
}

.shop-right {
  font-size: 13px;
  width: 120px;
}

.shop-right table{
    width: 120px;
    margin-left: 30px;
}
.shop-right table td{
  padding: 5px 0;
}



.score{
  color: #5ea732;
}

.score-better{
  color: #f13e3a;
}


.better span{
  color: #fff;
  background-color: #5ea732;
}
.better-more span{
  background-color: #f13e3a;
}
.shop-bottom{
  text-align: center;
  margin-top: 20px;
  padding-bottom: 20px;
}
.shop-bottom span{
  background-color: rgb(245, 245, 245);
  padding: 5px 50px;
  border-radius: 10px;
  
}
</style>