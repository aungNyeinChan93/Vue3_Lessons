import {ref} from "vue";


export function useFetchData () {

    const products = ref([]);
    const productsFetch = async() => {
        const res  = await fetch('https://fakestoreapi.com/products')
        products.value =  await res.json()
    }

    return  {
        productsFetch,
        products
    }
}