<template>

  <div class="container">
    <div class="bg-red-200 px-2 py-1 my-2 text-black text-center text-2xl rounded-sm">LocalStorage</div>
      <div class="card p-2 bg-gray-200 rounded shadow my-2">
          <SubmitForm :form="form" :formSubmit="formSubmit" @createForm="handleEvent" />
      </div>
    <p>{{events}}</p>
  </div>

</template>

<script setup>
import SubmitForm from "@/components/SubmitForm.vue";
import {onMounted, reactive, ref} from "vue";

const events = ref([])
const form = reactive({
  name:localStorage.getItem('name'),
  email:localStorage.getItem('email'),
})
const formSubmit = (name ,email)=>{
  localStorage.setItem('name',name);
  localStorage.setItem('email',email);
}

const handleEvent = (...event)=>{
  events.value.push(...event)
  console.log(events.value)
}

onMounted(() => {
  handleEvent();
})
</script>

<style lang="scss" scoped>

</style>