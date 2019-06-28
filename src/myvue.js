import Vue from 'vue'
import HelloComponent from './components/Hello.vue'

new Vue({
    el: '#app',
    data: {
      message: "Hello Vue Js"
    },
    components:{
    	HelloComponent	
    }
})