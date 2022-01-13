<template>
  <nav class="text-white   px-5 py-2 w-full bg-gradient-to-r from-blue-700 to to-blue-900 " >

     <router-link v-for="item in list" :key="item.to" class="mx-2" :to="item.to"> {{item.title}} </router-link>
    <button  class="mx-3" @click="logout" v-if="isLoggedIn"> Logout</button>
    <button class="mx-3" @click="openLogin" v-else> Login</button>
  

 
  </nav>
</template>

<script>
      import { getAuth, signOut } from "firebase/auth";
export default {
  //props:["isLoggedIn"],


  data(){
    return{
      list:[
        {title:"Dc Heros",to:"/dc-heros"},
        {title:"Calender",to:"/calender"},
        {title:"MarkDown",to:"/markdown"},
        {title:"Slider",to:"/slider"},
        {title:"Calculator",to:"/calculator"},
        {title:"Modal",to:"/reuseable-modal"},        
        {title:"Chat",to:"/chat"},     
        {title:"User Crud",to:'/user-crud'},
       {title:"TensorFlow",to:'/tensorflow'},          

      ],
      
    };

  
  },

   computed:{
     isLoggedIn(){
       return this.$store.state.isLoggedIn
     }
   },

  methods:{
    logout(){


        const auth = getAuth();
        signOut(auth).then((res) => {
          // Sign-out successful.
          console.log(res);
        }).catch((error) => {
          // An error happened.
          console.log(error);
        });
    },

    openLogin(){
      this.$store.commit('setLoginModal',true)
    }
  }


}
</script>

<style>

</style>