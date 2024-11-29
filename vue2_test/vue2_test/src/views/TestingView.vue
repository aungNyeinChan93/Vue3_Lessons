
<template>
  <div class="w-full min-h-screen flex flex-col gap-3 justify-center items-start ">
    <h1 class="text-red-800 bg-gray-500 hover:bg-gray-200 p-2 rounded ">Testing Area</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur cum delectus, explicabo fuga fugiat
      ipsa, laborum molestias nisi provident quae quam sed sint vel, voluptate? Atque error quo similique?</p>
    <h4>{{user}}</h4>
    <button @click="changeName" class="bg-red-400 p-2 rounded active:bg-red-100  my-2">Change Name</button>
    <button @click="flash('Testing Alert!','success')" class="bg-red-400 p-2 rounded active:bg-red-100 my-2 ">Flash Alert </button>


  </div>

</template>


<script setup>
import {ref} from "vue";
import {useFlash} from "@/composiables/useFlash.js";

let user = ref('aung nyein chan');
const {flash} = useFlash();

const changeName = ()=>{
  setTimeout(()=>{
    user.value= 'Chan Gyi'
  },3000)
}

</script>

<style lang="scss" scoped>

</style>