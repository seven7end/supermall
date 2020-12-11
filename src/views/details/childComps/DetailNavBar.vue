<template>
  <div>
    <nav-bar>
      <div slot="left" class="nav-bar-left">
        <img src="~assets/img/common/back.svg" alt="" @click="backClick">
      </div>
      <div slot="center" class="nav-bar-center">
        <div 
        v-for="(item,index) in this.titles" 
        :key="item.id" 
        class="nav-bar-center-item" 
        :class="{active: index === currentIndex}"
        @click="itemClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'



export default {
  components: {
    NavBar
  },
  data(){
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index

      //向Detail.vue发送事件监听点击
      this.$emit('itemClick',index) 
    },
    backClick(){
      this.$router.go(-1)
    }
  }

}
</script>

<style scoped>
.nav-bar-left{
  margin-top: 5px;
}
.nav-bar-center{
  display: flex;
}
.nav-bar-center-item{
  flex: 1
}
.active{
  color: var(--color-tint);
}
</style>