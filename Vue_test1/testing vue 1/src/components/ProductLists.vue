<template>
  <h1 class="underline text-capitalize text-4xl text-center text-green-300 my-2">{{title.toUpperCase()}}</h1>
  <ul class="px-10">
    <li v-for="t in type" :key="t.id">
      <h5 class="p-2 my-1 rounded bg-red-300 shadow">{{ t.title }}</h5>
    </li>
  </ul>
</template>

<script>
export default {
  props:{
    type:Function,
    title:String,
  },
  setup(props) {


    return {}
  }
}
</script>

