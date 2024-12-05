
<template>
  <div class="container w-full p-3 my-3 bg-gray-500 rounded mx-auto">
      <span class="text-xl py-3 my-2 ">{{body}}</span>
      <p>{{lorem}}</p>
  </div>
</template>

<script setup>
import {inject} from "vue";

const {title,body,changeName} = inject('quiz')

const lorem = inject('lorem')
</script>

