import {ref} from "vue";


export function getMethod() {

    const data = ref()
    const fetchingdataByGet = async (url) => {
        const res = await fetch(url);
        data.value = await res.json();

    }

    return {fetchingdataByGet , data};
}