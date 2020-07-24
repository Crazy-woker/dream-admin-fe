import Vue from 'vue'
import vueCompositionApi from "@vue/composition-api"
import App from './App.vue'
import router from './router'
import store from './store'
import Cookie from "cookie_js"
import "@/router/premit"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(vueCompositionApi);
Vue.config.productionTip = false



console.log(process.env.VUE_APP_URL);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')