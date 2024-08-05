// main.js는 vue 애플리케이션의 시작점이다.
// 수정하고 저장하면 알아서 빌드돼있다. 부분 빌드하기 때문에 속도가 빠르다.

import { createApp } from 'vue'
import App from './App.vue'
// src/router/index.js 파일의 router를 사용하겠다는 선언
import router from '@/router/index.js' 
import vuetify from './plugins/vuetify'; // ⭐️

// App.vue 파일을 빌드해서 웹 브라우저에 올려놓겠다는 의미이다.
// createApp(App).mount('#app')
const app = createApp(App);

app.use(router);
app.use(vuetify); // ⭐️
app.mount('#app');
