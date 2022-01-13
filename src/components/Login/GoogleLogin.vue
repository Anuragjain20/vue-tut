<template>
            <section class="mt-5 text-center">
            <button class="border px-2 rounded" @click="loginWithGoogle">
              Login With Google
            </button>
          </section>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default {

    methods:{
          loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider).then(()=>{
          this.$emit("close-login-from-google");
      })
 
    },
    }

}
</script>

<style>

</style>