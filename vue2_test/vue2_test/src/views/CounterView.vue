<template>
  <div>
      <h3 class="w-full p-2 border-gray-400 rounded text-2xl">{{useCounter.name}}</h3>

      <p>{{useCounter.count}}</p>

    <button class="p-2 my-4 bg-red-500 rounded" @click="useCounter.increment">Increment</button>
    <hr>

    <h1>{{counter.name}}</h1>
    <p>{{counter.count}}</p>
    <button class="p-2 my-4 bg-red-500 rounded" @click="counter.increment()">Increment</button>
    <p>Remaining count {{counter.remaining}}</p>
  </div>
</template>

<script setup>
import {useCounter} from "@/stores/useCounter.js";
import {useCounter2} from "@/stores/Counter2.js";

let counter = useCounter2();

</script>

