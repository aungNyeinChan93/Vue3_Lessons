import {reactive} from "vue";


export const useCounter = reactive({
    //state
    name: 'useCounter',
    count: 0,

    //action
    increment(){
        if(this.count >= 10){
            return
        }
        this.count++;
    },



})