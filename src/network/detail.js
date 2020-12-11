import {request} from 'network/request.js'

//获取详情页数据
export function getDetails(id){
  return request({
    url: '/detail',
    params: {
      iid: id
    }
  })
}

//获取推荐数据
export function getRecommend(){
  return request({
    url: '/recommend'
  })
}


export class GoodsInfo{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title,
    this.oldPrice = itemInfo.oldPrice,
    this.newPrice = itemInfo.lowNowPrice,
    this.discount = itemInfo.discountDesc,
    this.columns = columns,
    this.services = services
  }
}

export class ShopInfo{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo,
    this.name = shopInfo.name,
    this.cSells = shopInfo.cSells,
    this.cGoods = shopInfo.cGoods,
    this.score = shopInfo.score
  }
}

export class ParamsInfo{
  constructor(info,rule){
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}