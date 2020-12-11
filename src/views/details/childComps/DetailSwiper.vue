<template>
  <swiper class="detail-swiper">
    <swiper-item 
    v-for="item in topImages" 
    :key="item.id">

      <img :src="item" alt="">

    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem} from 'components/common/swiper'


export default {
  components: { 
    Swiper,
    SwiperItem

  },
  props: {
    topImages: {
      type: Array,
      default(){
        return []
      }
    }
  },
  method(){

  }
}
</script>

<style scoped>
.detail-swiper{
  height: 350px;
  overflow: hidden;
}
</style>