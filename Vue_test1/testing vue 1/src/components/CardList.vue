<template>

         <h1>{{title}}</h1>
         <li v-for="customer in customers" :key="customer.name">
           <SingleList :customer="customer"></SingleList>
         </li>

</template>

<script>
import SingleList from "@/components/SingleList.vue";

export default {
  components: {SingleList},
  props: {
    customers: Array,
    title: String,
  },
  setup() {

    return {}
  },

}

</script>

<style lang="scss" scoped>

</style>