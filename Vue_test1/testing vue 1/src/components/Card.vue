<template>
  <section>
    <div>
      <ul>
        <CardList title="Testing List" :customers="customers"></CardList>
        <CardList title="Success List" :customers="customers.filter(c=>c.active)"></CardList>

      </ul>
    </div>
  </section>
</template>

<script>
import {ref} from "vue";
import CardList from "@/components/CardList.vue";

export default {
  name: 'Card',
  components: {CardList},
  setup() {

    const customers = ref([
      {name: 'chan', age: 22, active: false},
      {name: 'aung', age: 22, active: false},
      {name: 'nyein', age: 22, active: false},
      {name: 'susu', age: 22, active: false},
    ]);

    return {customers}
  }
}
</script>

<style lang="scss" scoped>

</style>