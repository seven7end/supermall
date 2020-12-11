<template>
    <div class="">
        <tab-bar>
          <!-- activeColor可以自由指定 -->
          <tab-bar-item path="/home" activeColor="blue">
            <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/home-active.svg" alt="">
            <div slot="item-text">首页</div>
          </tab-bar-item>
          <tab-bar-item path="/category">
            <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/category-active.svg" alt="">
            <div slot="item-text">分类</div>
          </tab-bar-item>
          <tab-bar-item path="/car">
            <img slot="item-icon" src="~assets/img/tabbar/car.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/car-active.svg" alt="">
            <div slot="item-text">购物车</div>
          </tab-bar-item>
          <tab-bar-item path="/me">
            <img slot="item-icon" src="~assets/img/tabbar/me.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/me-active.svg" alt="">
            <div slot="item-text">我的</div>
          </tab-bar-item>
        </tab-bar> 
    </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped>
</style>
