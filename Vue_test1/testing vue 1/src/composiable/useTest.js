import {ref} from "vue";


export default function test() {
    const test= ref('default test');

    function alertName(){
        alert(test.value);
    }

    return {
        alertName,test
    }
};