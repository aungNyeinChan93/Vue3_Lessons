<template>
  <button :class="
      {
        ' bg-gray-400':!is_loading,
        ' bg-green-500 ':is_loading,
      }">
    <slot>Click</slot>
  </button>
</template>

<script>
import {defineComponent, onMounted} from 'vue';

export default defineComponent({
  props: {
    is_loading: {type: Boolean, default: false},
  },
  setup(props) {
    onMounted(() => {
      console.log(props.is_loading)
    })
    return {props}
  },

});
</script>

<style scoped>
.bg-green-500 {
  background-color: green;
}

.bg-gray-400 {
  background-color: red;
}

</style>

