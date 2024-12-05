<template>
  <div class="container mx-auto bg-white p-3 rounded-lg text-black">

    <QuizHeader :title="title"/>

    <QuizBody/>

    <QuizFooter/>

  </div>
</template>

<script setup>
import QuizHeader from "@/components/QuizHeader.vue";
import QuizBody from "@/components/QuizBody.vue";
import QuizFooter from "@/components/QuizFooter.vue";
import {ref, provide} from "vue";
import {useFlash} from "@/composiables/useFlash.js";


const {successFlash , failFlash} = useFlash()
let title = ref('default title name')
let body = ref('default Body Name')
let lorem = ref('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta earum id in magnam maxime numquam praesentium,\n' +
    '    quibusdam sit temporibus voluptatibus.');

provide("quiz", {
  title,
  body,
  changeName: () => title.value = 'change name',
  successFlash,
  failFlash
})

provide("lorem", lorem)

</script>

