<template>
  <div class="tab-control">
    <div class="tab-control-item" 
    v-for="(item,index) in titles" 
    :key="item.id" 
    :class="{active: index===currentIndex}"
    @click="itemClick(index)">

      <span>{{item}}</span>
      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default(){
        () => { return []}
      }
    }
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit('tabcontrolclick',index)
    }
  }
}
</script>

<style>
.tab-control{
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
}

.tab-control-item{
  flex: 1;
}

.tab-control-item span{
    padding: 5px;
}
.active{
  color: var(--color-high-tex);
}

.active span{
  border-bottom: 3px solid var(--color-tint);
}
</style>