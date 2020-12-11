<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message,duration = 1500){
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      },duration)
    }
  }
}
</script>

<style scoped>
.toast{
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50% , -50%);
  z-index: 9999;
  color: #fff;
  font-size: 20px;
  padding: 8px 10px;
}
</style>