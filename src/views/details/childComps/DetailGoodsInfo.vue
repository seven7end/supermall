<template>
  <div class="detail-goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div v-for="item in detailInfo.detailImage" :key="item.id">
      <div class="info-key">{{item.key}}</div>
      <div class="info-list">
        <img v-for="img in item.list" :src="img" :key="img.id" @load="imgLoad()" alt="">
      </div>
    </div>
    <!-- <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="imgLoad()"/>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data(){
    return {
      counter: 0,
      imgLength: 0
    }
  },
  methods:{
    imgLoad(){
      // 判断, 所有的图片都加载完了, 那么进行一次回调就可以了.
      // this.counter += 1
      // if(this.counter === this.imgLength){
      //   this.$emit('imageLoad');
      // }

      //由于后面使用了防抖动函数封装,故直接发送事件即可
      this.$emit('imageLoad')
    }
  },
  watch: {  
    detailInfo(){
      //获取图片个数
      this.imgLength = this.detailInfo.detailImage[0].list.length
    }
  }
};
</script>

<style scoped>
  .detail-goods-info {
    padding: 20px 10px;
  }

  .info-desc .desc{
    padding: 20px 0;
  }
  .info-desc .start,
  .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
  }
  .info-desc .start{
    float: left;
  }
  .info-desc .end{
    float: right;
  }

  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }
  .info-list img {
    width: 100%;
  }

</style>