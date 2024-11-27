
<template>
  <main>
    <Test :is_loading="isLoadingStatus">Login</Test>
    <button @click="isLoadingStatus = !isLoadingStatus">Change</button>
  </main>
</template>


<script setup>
import Test from "@/components/Test.vue";
import {ref} from "vue";

  const isLoadingStatus =ref(false);



</script>
