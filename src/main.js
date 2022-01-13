import { createApp } from 'vue'
import App from './App.vue';
import "./assets/style.css";
import router from "./router";

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import store from './store/index'

const firebaseConfig = {
    apiKey: "AIzaSyCi1y9oajLwmTco5MJHJjHtmfRQkMET9U0",
    authDomain: "vue-prj-f5bf5.firebaseapp.com",
    databaseURL: "https://vue-prj-f5bf5-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vue-prj-f5bf5",
    storageBucket: "vue-prj-f5bf5.appspot.com",
    messagingSenderId: "1097588469311",
    appId: "1:1097588469311:web:e90f4d577719838ab5928a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


const appmain = createApp(App)
appmain.use(router);
//appmain.use(app)
appmain.use(store)
appmain.use(database)
appmain.mount('#app')