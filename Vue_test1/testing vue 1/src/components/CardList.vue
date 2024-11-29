<template>

          <div class=" flex justify-center items-center">
            <h1 class="text-3xl rounded py-2 my-2 bg-green-300">{{title}}</h1>
            <span class="border border-red-200 p-1 ms-1 rounded hover:bg-red-400">({{customers.length}})</span>
          </div>
          <div class=" flex flex-wap gap-2">
            <div class="p-1 bg-red-200 mx-1 my-2 rounded" v-for="tag in tags " :key="tags">{{tag}}</div>
          </div>
          <li class="p-2 bg-red-300 hover:bg-red-200 rounded my-1" v-for="customer in customers" :key="customer.name">
            <SingleList :customer="customer"></SingleList>
          </li>
</template>

<script>
import SingleList from "@/components/SingleList.vue";

export default {
  components: {SingleList},
  props: {
    customers: {
      type: Array,
      required: true,
      default: null
    },
    title: String,
    tags:Array,
  },
  setup() {

    return {}
  },

}

</script>

<style lang="scss" scoped>

</style>