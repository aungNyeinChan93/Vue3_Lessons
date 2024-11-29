<template>
  <div class="flex  justify-between px-3 my-2 w-50">
    <span>{{ customer.name }}</span>
    <span> <input type="checkbox" v-model="customer.active"/></span>
  </div>
</template>

<script>
export default {
  props: {
    customer:Object,
  },
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>