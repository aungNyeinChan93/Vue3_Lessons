<template>
  <div class="w-full mx-auto text-center my-5">
    <TextArea v-model="text" @update:modelValue="handleEvent"  />
  </div>
</template>

<script setup>
import TextArea from "@/components/TextArea.vue";
import {ref} from "vue";

let text = ref('default');

const handleEvent= (e)=>{
  text.value = e
}
</script>

