<template>
  <main>
    <Test :is_loading="isLoadingStatus">Login</Test>
    <button @click="isLoadingStatus = !isLoadingStatus">Change</button>

    <Card class="card"></Card>

    <!--  reuse function    -->
    {{ test }}
    <button @click="alertName" class="px-2 py-1 my-2 bg-red-400 rounded hover:bg-red-300">Alert</button>

    <h4 class="underline text-capitalize text-4xl text-center text-green-300">Products</h4>
    <ul class="px-10">
      <li v-for="product in products" class="p-2 my-1 rounded bg-green-300 rounded shadow-sm">
        {{ product.title }}
      </li>
    </ul>
    <!--  reuse function end  -->

    <h1 class="underline text-capitalize text-4xl text-center text-green-300 my-2">Men clothing</h1>
    <ul class="px-10">
      <li v-for="men in categoryFilter(products).menClothing" :key="men.id">
        <h5 class="p-2 my-1 rounded bg-red-300 shadow">{{ men.title }}</h5>
      </li>
    </ul>
  </main>
</template>


<script setup>
import {useFetchData} from "@/composiable/useFetchData.js";
import useTest from "../composiable/useTest.js";
import Card from '@/components/Card.vue';
import Test from "@/components/Test.vue";
import { onMounted, ref} from "vue";

const isLoadingStatus = ref(false);
const {productsFetch, products} = useFetchData();
const {test, alertName} = useTest();

const categoryFilter = (p) => {
  return {
    menClothing :p.filter(product => product.category === 'men\'s clothing')
  }
}

onMounted(() => {
  productsFetch();
})


</script>


<style scoped>

main {
  width: 100%;
  height: 100vh;

}

.card {
  margin-top: 20px;
  padding: 20px;
  display: grid;
  place-items: center;
}
</style>