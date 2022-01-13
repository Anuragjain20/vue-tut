<template>
  <section class="flex  flex-wrap w-full">
      <div class="m-auto ">
          <h1 class="text-2xl my-5">Re-useable Modal</h1>
          <Modal v-if="isModal1Open" @close="isModal1Open = false" >
                <template #title> 
                     Modal - 1
                </template>
                 <template #body> 
                    body Modal
                </template>
               
            </Modal>
            
            <button class="border rounded px-2 mx-1 text-white bg-blue-600" @click="isModal1Open = true">Modal-1</button>
     
               <Modal v-if="isModal2Open" @close="isModal2Open = false" >
                <template v-slot:title> 
                    Modal - 2
                </template>
                 <template v-slot:body> 
                    body Modal
                </template>
               
            </Modal>
            
            <button class="border rounded px-2 mx-4 text-white bg-blue-600"  @click="isModal2Open = true">Modal-2</button>

 </div>

  </section>
</template>

<script>
import Modal from '../components/Modal'
import {ref} from 'vue'
export default {

    components:{Modal},
    setup(){
       const isModal1Open = ref(false)  
          const isModal2Open = ref(false)  
        return {isModal1Open,isModal2Open} 
    }

}
</script>

<style>

</style>