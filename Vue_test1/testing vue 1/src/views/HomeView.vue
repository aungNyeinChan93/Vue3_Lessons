
<template>
  <main >
    <Test :is_loading="isLoadingStatus">Login</Test>
    <button @click="isLoadingStatus = !isLoadingStatus">Change</button>

    <Card class="card"></Card>

    <!--  reuse function    -->
    {{test}}
    <button @click="alertName">Alert</button>


    <ul>
      <li v-for="product in products">
        {{product.title}}
      </li>
    </ul>
    <!--  reuse function end  -->

  </main>
</template>



<script setup>
import {useFetchData} from "@/composiable/useFetchData.js";
import useTest from "../composiable/useTest.js";
import Card from '@/components/Card.vue';
import Test from "@/components/Test.vue";
import {onMounted, ref} from "vue";

  const isLoadingStatus =ref(false);
  const {productsFetch,products} = useFetchData();
  const { test , alertName} = useTest();


  onMounted(() => {
    productsFetch();
  })



</script>


<style scoped>

  main{
    width: 100%;
    height: 100vh;

  }
  .card{
    margin-top: 20px;
    padding: 20px;
    display: grid;
    place-items: center;
  }
</style>