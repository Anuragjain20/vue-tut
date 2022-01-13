<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center my-5">Dc Heros {{ herosCount }}</h1>

    <ul>
      <li
        class="flex justify-between"
        v-for="(hero, index) in dcHeros2"
        :key="hero.name"
      >
        <div>
          {{ hero.name }}
        </div>
        <button @click="removeHero(index)">x</button>
      </li>
    </ul>

    <form class="mt-10" @submit.prevent="addHero">
      <input
        class="border rounded pl-2"
        v-model="newHero"
        placeholder="Type Name Here"
        ref="newHeroRef"
      />
      <button
        class="
          border
          rounded
          bg-gradient-to-r
          from-blue-700
          to-blue-900
          text-white
          mx-2
          px-1
        "
        type="submit"
      >
        Add Hero
      </button>
    </form>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
export default {
  setup() {
    let newHeroRef = ref("");
    let newHero = ref("");
    let dcHeros2 = ref([
      { name: "Flash" },
      { name: "Superman" },
      { name: "Batman" },
      { name: "Aquaman" },
      { name: "Wonder Woman" },
    ]);

    function removeHero(index) {
      dcHeros2.value = dcHeros2.value.filter((hero, i) => i != index);
    }
    function addHero() {
      if (newHero.value != "") {
        dcHeros2.value.unshift({ name: newHero.value });
        newHero.value = "";
      }
    }

    onMounted(() => {
      newHeroRef.value.focus();
    });

    const herosCount = computed({
      get: () => dcHeros2.value.length,
    });

    return { dcHeros2, newHero, removeHero, addHero, newHeroRef, herosCount };
  },
  // data() {
  //   return {
  //     // fname :"Anurag",
  //     // lname:"Jain",
  //     // attribute: "value",
  //     // isDisabled: true,

  //     title: "vue Page",
  //     title2: "<h4>Vue new</h4>",
  //     // isShowing: true,
  //     // isExp: 2 * 2 == 4,
  //     // count: 0,
  //     // dcHeros: ["Batman", "Supergirl", "Flash"],
  //   };

  // },

  // methods: {

  //   // setFullName(){
  //   //   this.fullname = "rick";
  //   // }

  // },

  // // computed: {

  // // },

  // mounted(){

  // }
};
</script>

<style>
</style>