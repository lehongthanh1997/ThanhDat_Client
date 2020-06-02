import Vue from 'vue'
import App from './App.vue'
import router from './router'
import CKEditor from '@ckeditor/ckeditor5-vue';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.config.productionTip = false;
Vue.use(CKEditor);
Vue.use(VueSweetalert2);

Vue.mixin({
    data: function () {
        return {
            baseUrl: 'http://localhost:8080',
            token: '',
        }
    },
    created: function () {
        var match = document.cookie.match(new RegExp('(^| )' + 'token' + '=([^;]+)'));
        if (match) this.token = match[2];
    }
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
