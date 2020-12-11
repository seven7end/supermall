<template>
  <div class="home">
    <!-- <h2>首页</h2> -->
    <nav-bar class="nav-home"><slot slot="center">购物街</slot></nav-bar>
    <!-- 复制一个tab-control做吸顶替换绑定v-show -->
    <tab-control 
      :titles="['流行','新款','精选']" 
      @tabcontrolclick="tabcontrolclick"
      ref="tabControl2"
      v-show="isTabFixed"
      class="tab-control-copy"/>

    <scroll class="content" 
    ref="scroll" 
    @scroll="getPosition" 
    :probe-type="3"
    :pull-up-load="true"
    @pullingUp="loadMore">

      <home-swiper :banner="banner" @SwiperImageLoad="SwiperImageLoad"/>
      <recommend-view :recommend="recommend"/>
      <feature-view/>
      <!-- 监听TabControl的点击来判断展示列表 -->

      <tab-control 
      :titles="['流行','新款','精选']" 
      @tabcontrolclick="tabcontrolclick"
      ref="tabControl1"/>
      
      <goods-list :goods="showGoods"/>
    </scroll>
    <!-- 监听组件的话,需要加上native -->
    <back-up @click.native="backUpClick" v-show="isShowBackTop"/>


  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView';
import FeatureView from './childComps/FeatureView';

import NavBar from "components/common/navbar/NavBar";
import TabControl from 'components/content/tabcontrol/TabControl';
import GoodsList from 'components/content/goods/GoodsList';
import Scroll from 'components/common/scroll/Scroll';


import { getHomeMultidata, getHomeGoods } from "network/home";
import {ItemListenerMixin,BackUpMixin} from 'common/mixin'



export default {
  data() {
    return {
      //定义变量保存res结果
      banner: [],
      recommend: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      //定义变量来判断type类型
      currentType: 'pop',
      // isShowBackTop: false,
      isTabFixed: false,
      tabOffsetTop: 0,
      saveY: 0
    };
  },
  mixins: [ItemListenerMixin,BackUpMixin],
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  created() {
    //请求多个数据
    this.getHomeMultidata(),
    //请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    
  },
  mounted() {
    //利用mixin监听图片加载完成->调用refresh()
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    //离开时:保存位置信息
    this.saveY = this.$refs.scroll.getScrollY()
    // console.log(this.saveY)

    //离开时取消全局事件监听
    this.$bus.$off('itemImageLoad',this.ItemImgListener)
    // console.log('listener-off')
  },
  methods: {
    //普通方法
    tabcontrolclick(index){
      // console.log(index)
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      //让两个tabControl的index保持一致
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },

    //当轮播图加载完成时,获取到tabControl的offsetTop
    SwiperImageLoad(){
      // console.log(this.$refs.tabControl1.$el.offsetTop)
      this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop

    },


    //以下是网络请求方法
    getHomeMultidata(){
      getHomeMultidata().then((res) => {
        // console.log(res);
        //由于res在函数引用后会销毁,故需把res保存起来
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then((res) => {
        // console.log(res)
        //把请求的数据保存到list里面,并更新页码
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()

      })
    },
    getPosition(position){
      //1.判断backTop是否显示
      // console.log(position)
      this.isShowBackTop = -position.y >1000

      //2.决定tabControl是否吸顶
      this.isTabFixed = -position.y > this.tabOffsetTop

    },
    loadMore(){
      // console.log('more')
      this.getHomeGoods(this.currentType)

    }
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,


  },
};
</script>
    FeatureView

<style scoped>
.home {
  position: relative;
  height: 100vh;
  /* padding-top: 44px; */
}
.nav-home {
  background-color: var(--color-tint);
  color: #fff;

  /* 在使用原生滚动时,为了让导航不跟随滚动才需要用以下css ,由于此处直接使用了better-scroll,故不需要*/
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
}
.content{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* height: 300px; */
  overflow: hidden;
}
.tab-control-copy{
  position: relative;
  z-index: 9;
  background: #fff;
}
</style>
