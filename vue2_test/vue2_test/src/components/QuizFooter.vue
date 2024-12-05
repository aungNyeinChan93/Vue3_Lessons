<template>
  <div class="w-full p-3 my-3 bg-gray-500 rounded mx-auto flex items-center justify-between">
      {{title}}
    <span>
      <button class="px-2 py-1 bg-red-500 hover:bg-red-200 rounded" @click="changeName"> Change Name</button>
    </span>
  </div>
</template>

<script setup>
import {inject} from "vue";

const {title,body ,changeName,successFlash,failFlash} = inject('quiz')
</script>

