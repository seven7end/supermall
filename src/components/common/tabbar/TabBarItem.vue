<template>
    <div class="tab-bar-item" @click="itemClick">
        <!-- 一次性请求两张图片 -->
        <!-- 插槽外层最好包裹多层div,以免插槽替换的时候,把设置的class覆盖了 -->
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            // isActive: true
        }
    },
    computed: {
        //若活跃组件的path包含在当前path中,则,让isActive=true
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
            return this.isActive ? {color : this.activeColor} : {}
        }
    },
    props: {
        path: String,
        activeColor: {
            type: String,
            default: 'red'
        }
    },
    methods: {
        itemClick(){
            // console.log(this.path)
            this.$router.replace(this.path)
        }
    },
    components: {}
}
</script>

<style scoped>
.tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    margin-top: 3px;
}

.tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;

}
/* .active{
    color: red;
} */
</style>
