<template>
  <div class="container  mx-auto  my-10">
    <div class="container mx-auto mt-3">
      <h3 class="p-2 rounded underline my-1 text-2xl " > Todo Lists</h3>
      <Card />
    </div>
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm.vue";
import Card from "@/components/Card.vue";

export default {
  name:'TodoView',
  components:{TodoForm, Card},
  setup() {

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>