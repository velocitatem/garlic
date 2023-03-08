import Vue from 'vue'
import Garlic from './garlic'

// esling gobaly disable no-unused-vars

// the intention here is to replace the innerText of the div with itself but encoded with base64
// we do this with a custom directive
Vue.directive('garlic', {
    // eslint-disable-next-line no-unused-vars
    beforeMount(el, binding, vnode, prevVnode) {
        // eslint-disable-next-line no-unused-vars
        console.log('beforeCreate', el)
      el = Garlic.clove(el)
    },
    /*
      Since most custom directives involve direct DOM manipulation, they are ignored during SSR. However, if you want to specify how a custom directive should be rendered (i.e. what attributes it should add to the rendered element), you can use the getSSRProps directive hook:
    */
    getSSRProps(el) {
        // eslint-disable-next-line no-unused-vars
        console.log('getSSRProps', el)
        return {
            innerHTML: Garlic.clove(el)
        }
    }
})
