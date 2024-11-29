<template>
  <main>
    <Test :is_loading="isLoadingStatus">Login</Test>
    <button @click="isLoadingStatus = !isLoadingStatus">Change</button>


    <Card class="card"></Card>

    <!--  reuse function    -->
    {{ test }}
    <button @click="alertName" class="px-2 py-1 my-2 bg-red-400 rounded hover:bg-red-300">Alert</button>

    <!-- products   -->
    <h4 class="underline text-capitalize text-4xl text-center text-green-300">Products</h4>
    <ul class="px-10">
      <li v-for="product in products" class="p-2 my-1 rounded bg-green-300 rounded shadow-sm">
        {{ product.title }}
      </li>
    </ul>

    <!--    men cloth-->
    <ProductLists title="Men Cloth" :type="menCloths(products)"></ProductLists>
    <!--    <h1 class="underline text-capitalize text-4xl text-center text-green-300 my-2">Men clothing</h1>-->
    <!--    <ul class="px-10">-->
    <!--      <li v-for="men in menCloths(products)" :key="men.id">-->
    <!--        <h5 class="p-2 my-1 rounded bg-red-300 shadow">{{ men.title }}</h5>-->
    <!--      </li>-->
    <!--    </ul>-->


    <!--jewelery  -->
    <ProductLists title="jewelery" :type="jewelery(products)"></ProductLists>
    <!--    <h1 class="underline text-capitalize text-4xl text-center text-green-300 my-2">jewelery</h1>-->
    <!--    <ul class="px-10">-->
    <!--      <li v-for="j in jewelery(products)" :key="j.id">-->
    <!--        <h5 class="p-2 my-1 rounded bg-red-300 shadow">{{ j.title }}</h5>-->
    <!--      </li>-->
    <!--    </ul>-->

    <!--    electronics-->
    <ProductLists title="electronics" :type="electronics(products)"></ProductLists>
    <!--    <h1 class="underline text-capitalize text-4xl text-center text-green-300 my-2">electronics</h1>-->
    <!--    <ul class="px-10">-->
    <!--      <li v-for="e in electronics(products)" :key="e.id">-->
    <!--        <h5 class="p-2 my-1 rounded bg-red-300 shadow">{{ e.title }}</h5>-->
    <!--      </li>-->
    <!--    </ul>-->


    <!--    title only-->
    <h1 class="underline text-capitalize text-4xl text-center text-green-300 my-2">Title </h1>
    <ul class="px-10">
      <li v-for="t in productTitle" :key="t">
        <h5 class="p-2 my-1 rounded bg-red-300 shadow">{{ t }}</h5>
      </li>
    </ul>

  </main>
</template>


<script setup>
import ProductLists from "@/components/ProductLists.vue";
import {useFetchData} from "@/composiable/useFetchData.js";
import useTest from "../composiable/useTest.js";
import Card from '@/components/Card.vue';
import Test from "@/components/Test.vue";
import {computed, onMounted, onUpdated, ref} from "vue";

const isLoadingStatus = ref(false);
const {productsFetch, products} = useFetchData();
const {test, alertName} = useTest();
const titles= ref([]);

const categoryFilter = (p) => {
  return {
    menClothing: p.filter(product => product.category === 'men\'s clothing'),
    jewelery:p.filter(product => product.category === 'jewelery'),
    electronics:p.filter(product => product.category === 'electronics'),
  }
};
const menCloths = (products) => {
  return categoryFilter(products).menClothing
}
const jewelery = (products) => {
  return categoryFilter(products).jewelery
}
const electronics = (products) => {
  return categoryFilter(products).electronics
}

const productTitle = computed(() => {
  return titles.value = products.value.map(product => product.title);
})


// console.log(products.value)
// console.log(jewelery);
// console.log('hry',products.value.map(p=> p.title));
// console.log(products.value.map(product => product.title));


onMounted(() => {
  productsFetch();
});

onUpdated(() => {
  titles.value =products.value.map(product => product.title);
  // console.log(titles.value)
  // console.log(products.value.map(product => product.title));
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