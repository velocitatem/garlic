import Vue from 'vue'
import Garlic from './garlic'

// esling gobaly disable no-unused-vars

console.log('Garlic', Garlic)
// the intention here is to replace the innerText of the div with itself but encoded with base64
// we do this with a custom directive
Vue.directive('garlic', {
  bind(el, binding, vnode, prevVnode) {
    // eslint-disable-next-line no-unused-vars
    console.log('inserted', el)
    el = Garlic.clove(el)
  }
  // what methods can we use here?
  // methods: inserted, update, componentUpdated, unbind, bind

})
