<template>

  <div class="container">
    <div class="bg-red-200 px-2 py-1 my-2 text-black text-center text-2xl rounded-sm">LocalStorage</div>
    <div class="card p-2 bg-gray-200 rounded shadow my-2">
      <SubmitForm :form="form" :formSubmit="formSubmit" @createForm="handleEvent"/>
    </div>

  </div>

</template>

<script setup>
import SubmitForm from "@/components/SubmitForm.vue";
import { ref, watch} from "vue";
import {useStorage} from "@/composiables/useStorage.js";

const events = ref([])
const {form,formSubmit} = useStorage("name", "email");

const handleEvent = (...event) => {
  events.value.push(...event)
}

watch(events, (val) => {
  events.value = val

})

</script>

<style lang="scss" scoped>

</style>