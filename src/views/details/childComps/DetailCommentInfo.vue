<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length!==0">
    <div class="head">
      <span class="head-left">用户评论</span>
      <span class="head-right">更多</span>
    </div>
    <div class="userInfo">
      <img :src="commentInfo.user.avatar" v-if="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="userComment">
      <p>{{commentInfo.content}}</p>
      <div class="userGoodInfo">
        <span class="time">{{commentInfo.created | showData}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>
    <div class="userImage" v-if="commentInfo.images">
      <img :src="item" alt="" v-for="(item,index) in commentInfo.images" :key="index">
      <div class="extraInfo">
        <span v-for="item in commentInfo.extraInfo" :key="item.id">{{item}}</span>
      </div>
    </div>
  </div>

  <!-- <div class="commontInfo" v-if="Object.keys(commontInfo).length!==0">
    <div class="head">
      <span>用户评价</span>
      <span>更多<img src="~assets/img/detail/more.svg" alt=""></span>
    </div>
    <div class="userInfo">
      <img v-if="commontInfo.user.avatar" :src="commontInfo.user.avatar" alt="">
      <span>{{commontInfo.user.uname}}</span>
    </div>
    <div class="userCommont">
      <p>{{commontInfo.content}}</p>
      <div class="userGoodInfo">
        <span>{{commontInfo.created | showData}}</span>
        <span>{{commontInfo.style}}</span>
      </div>
      <div class="userGoodImg">
        <img v-for="(image,index) in commontInfo.images" :src="image" alt="" :key="index">
        <div class="imageExplain">
          <span v-for="explain in commontInfo.extraInfo">{{explain}}</span>
        </div>  
      </div>
    </div>
  </div> -->
</template>

<script>
import {formatTime} from 'common/utils.js'

export default {
  props: {
    commentInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  filters: {
    showData(value){
      const date = new Date(value);
      return formatTime(date,'Y-M-D');
    }
  }
}
</script>

<style scoped>
.comment-info{
  padding: 0 10px;
}
.head{
  line-height: 60px;
  border-bottom: 1px solid  rgba(100,100,100,.1);
}

.head :last-child{
  float: right;
}

.userInfo{
  margin: 10px 0;
} 
.userInfo img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.userInfo span{ 
  height: 40px;
  line-height: 40px;
  padding-left: 15px;
}

.userGoodInfo{
  height: 40px;
  line-height:40px;
  color: rgb(158, 154, 154);
  font-size: 15px;
}
.userGoodInfo .time{
  margin-right: 15px;
}

.userImage img{
  width: 100px;
  height: 100px;
  margin-right: 10px;

}

.extraInfo{
  display: flex;
  flex-direction: column;
}
.extraInfo span{
  flex: 1;
}
</style>