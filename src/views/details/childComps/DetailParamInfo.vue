<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table class="sizes" v-for="item in paramInfo.sizes" :key="item.id" >
      <tr v-for="tr in item" :key="tr.id">
        <td v-for="td in tr" :key="td.id">{{td}}</td>
      </tr>
    </table>
    <table class="infos">
      <tr v-for="item in paramInfo.infos" :key="item.id">
        <td class="infos-key">{{item.key}}</td>
        <td class="infos-value">{{item.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
	export default {
		name: "DetailParamInfo",
    props: {
		  paramInfo: {
		    type: Object,
        default() {
		      return {}
        }
      }
    }
	}
</script>

<style scoped>
  .param-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .param-info table{
    width: 100%;
    /* border-collapse: collapse; */
  }
  .sizes tr{
    height: 42px;
  }
  .sizes td{
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .infos tr{
    height: 42px;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .infos-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }
  .infos-value{
    color: var(--color-tint);
  }



</style>
