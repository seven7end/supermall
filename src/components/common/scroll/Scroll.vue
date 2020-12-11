<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
//引入
import BScroll from 'better-scroll'


export default {
  //父->子
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: true
    }
  },
  data(){
    return {
      //定义变量保存
      scroll: null
    }
  },
  mounted(){
    //创建
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      mouseWheel: true,
      click: true

    })
    this.scroll.refresh()

    //监听滚动位置
    if(this.probeType == 2 || this.probeType == 3){
      this.scroll.on('scroll',(position) => {
        // console.log(position)
        this.$emit('scroll',position)
      })
    }


    //监听上拉加载
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',() => {
        // 把事件发送给父组件
        this.$emit('pullingUp')
      
      })
    }

  },
  methods: {
    scrollTo(x,y,timeout){
      this.scroll && this.scroll.scrollTo(x,y,timeout)
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
      // console.log('///')
      this.scroll && this.scroll.refresh()
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0
    }
  }
  
}
</script>

<style>

</style>