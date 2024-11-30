<template>
  <form @submit.prevent="formSubmit(form) && handleClick">
    <input type="text" placeholder="Name" class="p-2 rounded my-1 min-w-full text-black" v-model="form.name">
    <input type="email" placeholder="Email" class="p-2 rounded my-1 min-w-full text-black" v-model="form.email">
    <input type="submit" value="Submit"
           class="px-3 py-1 my-1 bg-red-500 hover:bg-red-300 rounded text-black">
  </form>
</template>

<script setup>
import { watch} from "vue";

const props = defineProps({
  formSubmit: {
    type: Function,
  },
  form: {
    type: Object,
  }
})

const emit = defineEmits(['createForm']);

const handleClick = () => {
  emit("createForm", 'createForm emit data', 'test', props.form);
}

watch(props.form, () => {
  emit("createForm", 'createForm emit data', 'test', props.form);
})

</script>

