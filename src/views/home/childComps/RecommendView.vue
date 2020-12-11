<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.id" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    recommend: {
      type: Array,
      default(){
        () => {return []}
      }
    }
  },
  components: {
  }
}
</script>

<style>
.recommend{
  display: flex;
  text-align: center;
  font-size: 18px;
}
.recommend-item{
  flex: 1;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee ;

}

.recommend-item img{
  width: 80px;
  height: 80px;
}

.recommend-item a{
  text-decoration:none
}
</style>