import Toast from './Toast'

const obj = {}

obj.install = function(Vue){
 
  //1.新建构造器
  const toastConstructor = Vue.extend(Toast);
  //2.创建组件对象
  const toast = new toastConstructor()
  //3.把组件挂载到某一元素上
  toast.$mount(document.createElement('div'))
  //4.该元素挂载到body上
  document.body.appendChild(toast.$el)

  //把该对象挂载到Vue原型上
  Vue.prototype.$toast = toast
}

export default obj