import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useCounter2 =  defineStore("counter-2",()=>{

    const name = "Counter-2";
    const count = ref(0);
    function increment (){
        if (count.value >= 10){
            return
        }
        count.value++;
    }
    const remaining = computed(() => 10 - count.value);
    return {name,count, increment ,remaining}
})