<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="failFlash('About Alert!','alert body ')" class="px-2 py-1 my-1 mx-1 rounded bg-red-500 ">Alert</button>
  </div>
</template>

<script setup>
import {useFlash} from "@/composiables/useFlash.js";

const {successFlash , failFlash} = useFlash();
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
