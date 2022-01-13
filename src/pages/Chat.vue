<template>

  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl">Real Time Chat</h1>
      <div class="border rounded-lg">
        <div class="h-64 p-2 overflow-y-auto   "  id="scrollToMe"  >
          <div v-for="chat in state.chats" :key="chat.message" class="w-full" :class="chat.userId === state.userId ? 'text-right' : 'text-left'"  >
            {{ chat.message }}
          </div>
        </div>
        <div class="h-8 p-2">
          <input
            v-model="state.message"
            placeholder="Start Typing ..."
            class="p-1 border rounded shadow"
            @keydown.enter="addMessage"
                
          />
      
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, reactive } from "vue";
//import { getAuth } from "firebase/auth";
import { getDatabase, ref, push, set, onChildAdded } from "firebase/database";
import {useStore} from 'vuex'


export default {
  setup() {
    const state = reactive({
      chats: [],
      message: "",
      collection:null,
      userId :null,
    
    });

       

    const store = useStore()    
     state.userId = computed(()=>
           store.state.authUser.uid
    ) 




    function addMessage() {
      //const auth = getAuth();
    //  const user = auth.currentUser.uid;
  //
    //  console.log(user)
      const db = getDatabase();
      const postListRef = ref(db, "chats");
      const newPostRef = push(postListRef);
      set(newPostRef, {
        message: state.message,
        userId: state.userId,
      });
      state.message = "";
    }

    const commentsRef = ref(getDatabase(), "chats");
    onChildAdded(commentsRef, (data) => {
    //  state.userId = getAuth().currentUser.uid();
      state.chats.push({userId:data.val().userId,message:data.val().message})
     
    //  console.log(data.key,"+++++++", data.val().message);
      //console.log(state.chats)
     
    });
   

    return { state, addMessage};
  },

   updated(){
    
      var container = this.$el.querySelector("#scrollToMe");
      container.scrollTop = container.scrollHeight;
    
   },
   mounted(){
         
      var container = this.$el.querySelector("#scrollToMe");
      container.scrollTop = container.scrollHeight;
   }

};
</script>

<style>
</style>