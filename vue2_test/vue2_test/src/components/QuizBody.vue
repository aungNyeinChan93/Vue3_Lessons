
<template>
  <div class="container w-full p-3 my-3 bg-gray-500 rounded mx-auto">
      <span class="text-xl py-3 my-2 ">{{body}}</span>
      <p>{{lorem}}</p>
      <button class="px-2 py-1 mt-2 rounded bg-gray-200" @click="successFlash('title','body quiz')">Alert</button>
  </div>
</template>

<script setup>
import {inject} from "vue";

const {title,body,changeName,successFlash,failFlash} = inject('quiz')

const lorem = inject('lorem')
</script>

