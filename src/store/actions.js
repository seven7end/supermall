import {ADD_COUNT,ADD_TO_CAR} from './mutation-types.js'

export default {


  addCar(context,payLoad){  
    //为了监听是否加购完成,需要包装一个promise
    return new Promise((resolve,reject) => {

      //查找数组中是否已经存在某个商品
      let oldProduct =  
      context.state.carList.find(item => item.id === payLoad.id)

      if(oldProduct){
        // oldProduct.count += 1
        context.commit(ADD_COUNT,oldProduct)
        resolve('当前商品数量+1')
      }else{
        payLoad.count = 1;
        // state.carList.push(payLoad)
        context.commit(ADD_TO_CAR,payLoad)
        resolve('添加新的商品')
      }


    })


  }
}