// 封装一个防抖动函数->防止refresh()的调用频繁

export function debounce(func,delay=100){
  let timer = null
  return function(...args){
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this,args)
    },delay)
  }
}


function formatNumber (n) {
  n = n.toString()
  return n[1] ? n : '0' + n;
}

//封装一个时间显示函数
export function formatTime (number, format) {
  let time = new Date(number)
  let newArr = []
  let formatArr = ['Y', 'M', 'D', 'h', 'm', 's']
  newArr.push(time.getFullYear())
  newArr.push(formatNumber(time.getMonth() + 1))
  newArr.push(formatNumber(time.getDate()))

  newArr.push(formatNumber(time.getHours()))
  newArr.push(formatNumber(time.getMinutes()))
  newArr.push(formatNumber(time.getSeconds()))

  for (let i in newArr) {
      format = format.replace(formatArr[i], newArr[i])
  }
  return format;
}