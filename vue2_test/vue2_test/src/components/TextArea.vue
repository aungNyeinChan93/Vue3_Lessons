<template>
  <form class="w-full p-4 rounded" >
    <textarea rows="5" cols="50" class="text-black"
              v-text="modelValue"
              @keyup="update"
    ></textarea>
    <p>{{modelValue}}</p>

  </form>
</template>

<script setup>

import {onMounted} from "vue";

const props = defineProps({
  modelValue: {
    type: String,
  }
})

const emit = defineEmits(["update:modelValue"]);

const update = (e) => {
  emit('update:modelValue',e.target.value);
}

onMounted(()=>{
  // console.log(props.modelValue)
})


</script>

