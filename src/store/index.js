import Vue from 'vue'
import Vuex from 'vuex'
import ExampleModule from './modules/ExampleModule.js'

//Load Vuex to our Vue app(instance)
Vue.use(Vuex)


export default new Vuex.Store({
    /**
     * Modules will be added here 
     * Eg: authentication module, component modules and others
     */
    modules: {
        ExampleModule,
    }
})