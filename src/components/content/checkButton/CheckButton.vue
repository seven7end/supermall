<template>
  <div class="check-button">
    <img src="~assets/img/cart/tick.svg" alt="" :class="{check: isChecked}">
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default(){
        return false
      }
    }
  }
}
</script>

<style scoped>
  .check-button img{
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border:2px solid #c0c0c0;
    vertical-align: middle;
    margin-bottom: 6px;
  }
  .check{
    border-color: var(--color-tint)!important;
    background: var(--color-tint);
  }
</style>