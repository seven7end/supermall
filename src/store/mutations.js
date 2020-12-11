import {ADD_COUNT,ADD_TO_CAR} from './mutation-types.js'

export default  {
  //数量加1
  [ADD_COUNT](state,payLoad){
    payLoad.count ++
  },
  //加入购物车
  [ADD_TO_CAR](state,payLoad){
    //新增checked属性记录购物车中是否被选中
    payLoad.checked = true
    
    state.carList.push(payLoad)
  }
}