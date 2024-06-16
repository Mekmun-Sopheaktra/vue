import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'animate.css';
import './assets/css/feature.css';
import './assets/scss/style.scss';
import 'bootstrap';
import VueSocialSharing from 'vue-social-sharing';
import WatermarkDesign from '@watermark-design/vue';

// Create Vue application instance
const app = createApp(App);

// Use plugins and router
app.use(router);
app.use(VueSocialSharing);
app.use(WatermarkDesign);

// Mount the application
app.mount('#app');
