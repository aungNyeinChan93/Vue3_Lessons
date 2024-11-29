<template>
  <div class="container m-auto h-screen my-2 " >
    <ul class="nav nav-tabs p-2 rounded">
      <li class="bg-green-300 px-2 py-1 my-2 rounded " v-for="customer in userNames" :key="customer">
        {{customer}}
      </li>
    </ul>
  </div>
</template>

<script setup>

const props = defineProps({
  userNames: {
    type: Array,
  }
})


</script>

<style lang="scss" scoped>

</style>