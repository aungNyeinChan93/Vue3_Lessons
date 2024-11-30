<template>
  <form @submit.prevent="formSubmit(form.name, form.email)">
    <input type="text" placeholder="Name" class="p-2 rounded my-1 min-w-full text-black" v-model="form.name">
    <input type="email" placeholder="Email" class="p-2 rounded my-1 min-w-full text-black" v-model="form.email">
    <input @click="handleClick" type="submit" value="Submit" class="px-3 py-1 my-1 bg-red-500 hover:bg-red-300 rounded text-black">
  </form>
</template>

<script setup>
import {reactive} from "vue";

defineProps({
  formSubmit: {
    type: Function,
  },
  form: {
    type: Object,
  }
})

const userData = reactive({
  name:localStorage.getItem('name'),
  email:localStorage.getItem('email'),
});

const emit = defineEmits(['createForm']);
const handleClick = () => {
  emit("createForm", 'createForm emit data','test',userData);
}
</script>

