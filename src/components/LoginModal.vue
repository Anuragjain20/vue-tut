<template>
  <div v-if="isLoginOpen">
    <section
      @click="close"
      class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-90"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto w-1/3 bg-white p-2 rounded shadow">
          <div class="p-2 border">
            <h1 class="text-2xl text-center">Login</h1>
            <GoogleLogin @close-login-from-google="close" />
            <p class="my-3 text-center">Or</p>
            <form class="p-2 my-2" @submit.prevent="submit">
              <div class="my-4">
                <label>Email or Username </label>
                <input
                  v-model="form.email"
                  placeholder="Enter your Email or Username "
                  class="rounded shadow p-2 w-full"
                  ref="EmailRef"
                />
              </div>
              <div class="my-4">
                <label>Password </label>
                <input
                  v-model="form.password"
                  placeholder="Enter your Password "
                  type="password"
                  class="rounded shadow p-2 w-full"
                />
              </div>
              <div class="my-4">
                <button
                  type="submit"
                  class="
                    w-full
                    rounded
                    shadow-md
                    bg-gradient-to-r
                    from-red-600
                    to-pink-500
                    text-white
                    p-3
                  "
                >
                  <span v-if="!isLoading">Login</span>
                  <span v-else>⌛</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import GoogleLogin from "../components/Login/GoogleLogin.vue";

export default {
  components: { GoogleLogin },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      isLoading: false,
    };
  },
  computed: {
    isLoginOpen() {
      return this.$store.state.isLoginOpen;
    },
  },

  methods: {
    submit() {
      this.isLoading = true;

      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.form.email, this.form.password)
        .then(() => {
          this.form.email = "";
          this.form.password = "";
          this.isLoading = false;
          this.close();
        })
        .catch((error) => {
          console.log(error.message);
          this.isLoading = false;
        });
    },
    close() {
      this.$store.commit("setLoginModal",false)
    },
  },

  mounted() {
    //this.$refs.EmailRef.focus();
  },
};
</script>

<style>
</style>