<template>
    <swiper>
      <!-- for循环中，绑定的key值不能为对象，而是取一个字符串或数值:item.id -->
      <swiper-item v-for="item in banner" :key="item.id">
          <a :href="item.link">
              <img :src="item.image" alt="" @load="ImageLoad">
          </a>
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  components: {
    Swiper,
    SwiperItem
  },
  data(){
    return {
      isLoad: false
    }
  },
  //获取banner数据
  props: {
    banner: {
      type: Array,
      default(){
        () => { return []}
      }
    }
  },
  methods: {
    //监控轮播图图片的加载,把事件传播给Home.vue
    /**避免多次发送,可以设定变量isLoad,
    发送后把isLoad设定为true,再加多层判断来阻断后面的发送**/
    ImageLoad(){
      if(!this.isLoad){
        this.$emit('SwiperImageLoad')
        this.isLoad = true
      } 
    }
  }
}
</script>

<style>

</style>