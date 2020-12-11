<template>
  <div id="details">
    <!-- <h2>{{id}}</h2> -->
    <detail-nav-bar class="detail-nav" @itemClick="navItemClick" ref="nav"/>
    <scroll class="content" ref="scroll" 
    @scroll="getScrollPosition" 
    :probe-type="3">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goodsInfo"/>
      <detail-shop-info :shop-info="shopInfo"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :param-info="paramInfo" ref="param"/>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"/>
      <goods-list :goods="recommend" ref="recommend"/>
    </scroll>
    <back-up @click.native="backUpClick" v-show="isShowBackTop"/>
    <detail-bottom-bar @addToCar="addToCar"/>

  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'


import {getDetails,GoodsInfo,ShopInfo,ParamsInfo,getRecommend} from 'network/detail.js'
import {ItemListenerMixin,BackUpMixin} from 'common/mixin.js'
import {debounce} from 'common/utils.js'

import {mapActions} from 'vuex'




export default {
  name: 'Detail',
  data(){
    return {
      id: null,
      topImages: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopYs: [],
      getthemeTopYs: null,
      positionY: 0,
      currentIndexP: 0
    }
  },
  mixins: [ItemListenerMixin,BackUpMixin],
  created(){
    //1.获取goodsListItem的id,并保存起来
    this.id = JSON.parse(JSON.stringify(this.$route.params.id))

    //2.请求页面数据
    getDetails(this.id).then((res) => {
      // console.log(res)
      //获取轮播图

      const result = res.result
      this.topImages = result.itemInfo.topImages

      //获取商品信息
      this.goodsInfo = new GoodsInfo(result.itemInfo,result.columns,result.shopInfo.services)
   

      //获取店铺信息
      this.shopInfo = new ShopInfo(result.shopInfo)

      //获取商品详情信息
      this.detailInfo = result.detailInfo

      //获取参数信息
      this.paramInfo = new ParamsInfo(result.itemParams.info,result.itemParams.rule)

      //获取评论信息
      if(result.rate.list){
        this.commentInfo = result.rate.list[0]
        // console.log(result.rate)
      }
      


    }),
       
    //4.themeTopYs在每张图片加载完都需要获取赋值一次->包一层debounce防抖
    //删掉了$el->如this.$refs.param.$el.offsetTop
    this.getthemeTopYs = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.param.offsetTop);
      this.themeTopYs.push(this.$refs.comment.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);

    },100),
    //3.请求推荐信息
    getRecommend().then((res) => {
      this.recommend = res.data.list

      //引入之前封装的GoodsList组件,直接展示推荐内容
    })
  },
  mounted(){
    //利用mixin监听图片加载完成->调用refresh()
  },
  destroyed(){
    this.$bus.$off('itemImageLoad',this.ItemImgListener)
    // console.log('destroyed')
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList
   

    
 

  },
  methods: {
    ...mapActions(['addCar']),
    imageLoad(){
      // this.$refs.scroll.refresh();

      // 使用了mixin.js里面封好的防抖+refresh()
      this.newRefresh()
      
      // 在图片都加载完成后,调用上面的方法获取themeTopYs
      this.getthemeTopYs()
    },

    //监听nav的点击
    //->跳转到对应的模块高度themeTopYs
    //(通过offsetTop获取,图片加载完成这个值才正确)
    navItemClick(index){
      this.$refs.scroll.scrollTo(0,(-this.themeTopYs[index]+44),100)
    },

    //监听scroll的滑动位置,需要传probeType == 3
    getScrollPosition(position){
      const positionY = -position.y
      const length = this.themeTopYs.length

      //滑动到相应位置,就显示相应模块高亮
      //思路: 
      //1.避免多次赋值,先判断currentIndexP是否等于当前值
      //2.为themeTopYs多push一个最大值,总共5个值[0,x,y,z,max],
      //判断:若i<4(最后一个值无效值)且
      //滚动的y值在themeTopYs[i]和themeTopYs[i+1]的区间内
      //则取到i值,把高亮的index设置成i值即可
      for(let i=0 ; i<length-1; i++){
        if(this.currentIndexP != i 
        && (i<length-1 
        && positionY >= this.themeTopYs[i] 
        && positionY < this.themeTopYs[i+1])){
          this.currentIndexP = i 
          this.$refs.nav.currentIndex = this.currentIndexP
        }
      }

      if(positionY > 1000){
        this.isShowBackTop = true
      }
    },
    addToCar(){

      //1.获取加入购物车的商品信息
      const product = {}

      product.id = this.id;
      product.title = this.goodsInfo.title;
      product.image = this.topImages[0];
      product.desc = this.detailInfo.desc;
      product.price = this.goodsInfo.newPrice;
      
       
      //2.加入购物车---利用vuex来保存加购信息
      //把product传到action里面做修改
      // this.$store.commit('addCar',product)->映射后可以直接使用
      this.addCar(product).then((res) => {
        this.$toast.show(res,2000)
      })
    }

  }
}
</script>

<style scoped>
#details{
  position: relative;
  z-index: 999;
  background-color: #fff;
  height: 100vh;
}
.content{
  height: calc(100% - 44px - 49px );
}
.detail-nav{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>