<template>
  <section>
    <div>

      <ul>
        <CardList :tags="tags" title="Testing List" :customers="testingCustomers"></CardList>
        <CardList :tags="tags" title="Success List" :customers="progressCustomers"></CardList>
      </ul>
    </div>
    <TodoForm @emitTest="emitTest" :customers="customers"></TodoForm>
  </section>
</template>

<script>
import {computed, onMounted, onUpdated, ref} from "vue";
import CardList from "@/components/CardList.vue";
import TodoForm from "@/components/TodoForm.vue";

export default {
  name: 'Card',
  components: {TodoForm, CardList},
  props: {
    // todo: {
    //   type: Object,
    //   default:null
    // }
  },
  setup(props) {

    const customers = ref([
      {name: 'chan', active: false ,tag : "one"},
      {name: 'aung', active: false ,tag : "two"},
      {name: 'nyein', active: false ,tag : "three"},
      {name: 'susu', active: false ,tag : "four"},
    ]);

    const testingCustomers = computed(()=>{
      // const data = props.todo
      // if(data !== null && data.name !== null){
      //   customers.value.push({name:data.name,active:false})
      // }
      return customers.value.filter(c=>!c.active)
    })

    const progressCustomers = computed(()=>{
      return customers.value.filter(c=>c.active)
    })

    const test = (t)=>{
      console.log(t)
    }

    const emitTest= (e)=>{
      // console.log('this is emit...',e);
      alert(e)
    }

    const tags = computed(()=>{
        return new Set(customers.value.map(c=>c.tag));
    })


    // const addTodo = (todoData) => {
    //   customers.value.push(todoData);
    // }

    onMounted(() => {
      // console.log(props.todo)
    })

    onUpdated(() => {
      // console.log('update',data.name)
      // console.log(props)
    })

    return { customers , testingCustomers , progressCustomers , test , emitTest ,tags }
  }
}
</script>

<style lang="scss" scoped>

</style>