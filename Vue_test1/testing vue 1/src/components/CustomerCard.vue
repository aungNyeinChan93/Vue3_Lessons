<template>

  <div class="wrapper">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 px-10">
      <div :class="{
        'card text-center my-2 p-2 border border-red-800 rounded-lg shadow-md':true ,
        'bg-gray-100 text-dark-600 border border-dark-500': theme==='light',
        'bg-gray-600 text-black-400 border-0': theme==='dark'
      }"
           v-for="c in customers" :key="c.id">
        <div class="card-header">
          {{c.name}}
        </div>
        <div class="card-body text-start py-5 px-1 bg-gray-200 rounded-sm mt-2">
          <span class=" text-gray-700/90 text-md ">{{c.bio}}</span>
        </div>
        <div class="px-3 py-2 card-footer text-end bg-gray-200 mt-1 flex gap-2 justify-start items-center">
          <slot v-if="!$slots.back_btn">
            <button class="px-2 py-1  rounded bg-green-400 ">Back</button>
          </slot>
          <slot name="back_btn" />
          <slot name="edit_btn" />
          <slot name="delete_btn" />
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
const props = defineProps({
  customers: {
    type: Array,
  },
  theme:{
    type: String,
    default: "true"
  }
})
</script>

