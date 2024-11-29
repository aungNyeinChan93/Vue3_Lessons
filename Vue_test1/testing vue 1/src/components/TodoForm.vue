
<template>
  <form @submit.prevent="addTodo">
    <input type="text" placeholder="Todo" class="p-1 mx-1 bg-gray-100 rounded " v-model="form.name" >
    <input type="submit" value="Add" class="py-1 px-3 my-1 bg-green-400 hover:bg-green-200 rounded" >
    <button class="rounded bg-red-500 px-3 py-1 my-1 block" @click="create">Emit test</button>
  </form>
</template>

<script>
import {onMounted, reactive} from "vue";

export default {

  props:{
    customers:{
      type:Array
    }
  },

  setup(props){

    const form = reactive({
      name:null,
    })

    const addTodo=()=>{

        if(form.name != null){
          props.customers.push({name: form.name, active: false,tag:'default'})
          form.name = null
        }
    }

    onMounted(()=>{
    })
    return{ addTodo,form }

  },

  methods: {
    create() {
        this.$emit("emitTest",'hello this is emit testing');
    }
  },

}
</script>

