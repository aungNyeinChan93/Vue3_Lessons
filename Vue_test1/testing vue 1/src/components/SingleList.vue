<template>
  <div>
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