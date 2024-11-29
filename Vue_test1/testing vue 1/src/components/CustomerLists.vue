<template>

  <div class="container m-auto my-2 " >
    <ul class="nav nav-tabs p-2 rounded">
      <li class="bg-green-300 px-2 py-1 my-2 rounded " v-for="customer in userNames" :key="customer">
        {{customer}}
      </li>
    </ul>
  </div>

  <!-- slot  -->
  <CustomerCard :customers="customers" theme="dark">
    <template v-slot:back_btn class="footer p-2">
      <button class="px-2 py-1 rounded bg-gray-300 hover:bg-gray-200 "> Back</button>
    </template>

    <template v-slot:delete_btn class="footer p-2">
      <button class="px-2 py-1 rounded bg-red-300 hover:bg-red-200 "> Delete</button>
    </template>

    <template v-slot:edit_btn class="footer p-2">
      <button class="px-2 py-1 rounded bg-yellow-300 hover:bg-yellow-200 "> Edit</button>
    </template>
  </CustomerCard>

  <CustomerCard  theme="light" :customers="customers"></CustomerCard>

  <CustomerCard :customers="customers">
    <button class="px-2 py-1 rounded bg-yellow-300 hover:bg-yellow-200 "> More... </button>
  </CustomerCard>
  <!-- slot  end -->

</template>

<script setup>
import CustomerCard from "@/components/CustomerCard.vue";
const props = defineProps({
  userNames: {
    type: Array,
  },
  customers:{
    type: Array,
  }

})


</script>

<style lang="scss" scoped>

</style>