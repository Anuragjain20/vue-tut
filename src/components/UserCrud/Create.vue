<template>
  <button
          class="px-2 rounded border my-4 py-1"
          @click="isModalOpen = true"
        >
          Add User
        </button>
  <teleport to="body">
    <Modal v-if="isModalOpen" @close="isModalOpen = false">
      <template #title> Add New User </template>
      <template #body>
        <form class="p-2" @submit.prevent="submit">
          <div class="p-2">
            <label>Name</label>
            <input
              v-model="state.form.name"
              class="w-full p-2 rounded border"
              placeholder="User Name"
            />
          </div>
          <div class="p-2">
            <label>Email</label>
            <input
              v-model="state.form.email"
              class="w-full p-2 rounded border"
              placeholder="User Email"
              type="email"
            />
          </div>
          <div class="p-2">
            <label>Avatar</label>
            <input
              v-model="state.form.avatar"
              class="w-full p-2 rounded border"
              placeholder="Avatar Url"
              type="text"
            />
          </div>
          <div class="p-2">
            <input
              class="w-full p-2 rounded border hover:bg-gray-400"
              type="submit"
              value="Create"
            />
          </div>
        </form>
      </template>
    </Modal>
  </teleport>
</template>

<script>
import Modal from "../Modal";
import { ref, reactive } from "vue";
import axios from "../../plugins/axios";
export default {
  components: { Modal },
  setup(_,{emit}) {
    const state = reactive({
      form: {
        name: "",
        email: "",
        avatar: "",
      },
    });

    const isModalOpen = ref(false);
    async function submit() {
      const { data } = await axios.post("/users", state.form);
      //console.log(data);
      emit('new-user-added',data)
     
      state.form.email = "";
      state.form.name = "";
      state.form.avatar = "";
      isModalOpen.value = false;
    }

    return { isModalOpen,submit,state };
  },
};
</script>

<style>
</style>