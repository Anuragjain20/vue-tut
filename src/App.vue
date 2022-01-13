<template>
  <AppHeader/>
  <!-- <h1>Heyy Vue3 from CLI</h1>
  <p>Something else</p>
  <h1>{{ title.toUpperCase() + 20 }}</h1>
  <p v-if="isShowing" v-html="title2"></p>
  <p v-else>no</p>
  <p v-if="isExp != true" v-html="title2"></p>
  <p v-else-if="isExp == true" v-html="title"></p>
  <h1 v-show="!isShowing">{{ count }}</h1>

  <h1 v-show="isShowing" v-text="count + ' ------'"></h1>

  <h1 v-once>
    {{ count }}
  </h1>

  <p>{{ randC }}</p>
  <p>{{ fullname }}</p>

  <input :value="newHero" />
  <button :disabled="isDisabled">Add Hero</button>
  <input :[attribute]="newHero" />
  <button :disabled="isDisabled">Add Hero</button>

  <input v-model.trim="newHero" />
  <textarea v-model.lazy="newHero"></textarea>
  <input v-model.number="newHero" />
  <button>Add Hero</button>
  <button @click="setFullName">Set full name</button> -->

  <div class="w-full flex">
          <router-view></router-view>
    <!-- <DcHeros /> -->
  

  </div>
  
  <teleport to="body">
    <LoginModal />

  </teleport>
  
</template>



<script>
import AppHeader from "./components/AppHeader.vue";
import LoginModal from "./components/LoginModal.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";



// import Calender from "./components/Calender.vue";
// import DcHeros from "./components/DcHeros.vue";
export default {
  components: { AppHeader,LoginModal},//DcHeros 

 
    // randC(){
    //   return Math.random();
    // },

    // fullname:{
    //   get(){
    //   return `${this.fname} ${this.lname}`;
    //   },
    //   set(fullname){
    //     alert(fullname);
    //   }

    // }
  

  mounted() {
    setInterval(() => {
      this.count++;
    }, 1000);
   
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
      this.$store.commit("setIsLoggedIn",true);
      this.$store.commit("setAuthUser",user);
 
  } else {
   this.isLoggedIn = false;
  
     this.$store.commit("setIsLoggedIn",false);
      this.$store.commit("setAuthUser",{});
 
  }
});

  },
  
};
</script>

