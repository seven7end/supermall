import {debounce} from 'common/utils'
import BackUp from 'components/content/backup/BackUp';


export const ItemListenerMixin ={
  data(){
    return {
      ItemImgListener: null,
      newRefresh: null,
    }
  },
  mounted() {
    //监听goodsListItem图片加载完成
    this.newRefresh = debounce(this.$refs.scroll.refresh,200)
    this.ItemImgListener =  () => {this.newRefresh()}
    this.$bus.$on('itemImageLoad',this.ItemImgListener)
    // console.log('mixin')
  },

}  

export const BackUpMixin = {
  data(){
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backUpClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },

  },
  components: {
    BackUp
  }
}
  
