<template>
  <div class="flex flex-wrap w-full">
      <h1 class="w-full text-center text-2xl my-4">Markdown App</h1>
    <section class="flex w-10/12 m-auto h-screen">
      <article class="w-1/2 border">
      <textarea class="w-full h-full px-1" ref = "MarkDownRef" :value="text" @input="update" ></textarea>
      </article>
      <article class="w-1/2 border px-1 bg-gray-100" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import { marked } from 'marked'
// import debounce from '../utilites/mixins/debounce'
import useDebounce from '../utilites/composition/useDebounce'

export default {
 

// beforeCreate(){
//   console.log("before Create");
// },
// created(){
//   console.log("Created");
// },

// beforeMount(){
//   console.log("before mount");
// },
// mounted(){
//   console.log("mounted");
// },
// beforeUnmount(){
//   console.log("before unmount");
// },

// unmounted(){
//   console.log("unmounted");
// },

// beforeUpdate(){
//   console.log("before Update");
// },

// updated(){
//   console.log("Update");
// },


// mixins:[debounce],   



data(){
    return{
        text:"",
        debounce:"",
        
    }
},

methods:{
    update(e){
      const task = ()=>{
          this.text = e.target.value;
      }
       
      this.debounce(task,500)
      
    },



},
computed:{
    markedText(){
      
        return marked(this.text);
    }
},
 mounted(){

    
   this.debounce =  useDebounce();
    this.$refs.MarkDownRef.focus();
  }

};
</script>

<style>
</style>