<template>
  <div class="car">
      <!-- 导航 -->
      <nav-bar class="nav-bar">
          <div slot="center">购物车({{carCount}})</div>
      </nav-bar>
      <!-- 商品列表 -->
      <car-list/>
      <!-- 底部汇总 -->
      <car-bottom-bar/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import CarList from './childComps/CarList'
import CarBottomBar from './childComps/CarBottomBar'

import {mapGetters} from 'vuex'



export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  components: {
    NavBar,
    CarList,
    CarBottomBar

  },
  computed: {
    ...mapGetters({
        carCount: 'carCount'
    })
  }
};
</script>

<style scoped>
.nav-bar{
    background-color: var(--color-tint);    
    color: #fff;
    font-size: 20px;
}

</style>
