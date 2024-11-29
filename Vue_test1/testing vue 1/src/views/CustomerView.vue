

<template>

  <CustomerLists :userNames="userNames" :customers="customers"/>

</template>


<script setup>
import {getMethod} from "@/composiable/getMethod.js";
import CustomerLists from "@/components/CustomerLists.vue";
import {useGetCustomerData} from "@/composiable/useGetCustomerData.js";
import {computed, onMounted, ref} from "vue";


const {customers ,fetchData} = useGetCustomerData();
const {fetchingdataByGet ,data} = getMethod();

const userNames = computed(()=>{
  return customers.value.map(c=>c.name);
})

onMounted(()=>{
  fetchData();
  fetchingdataByGet('http://localhost:3001/customers')
})

</script>

