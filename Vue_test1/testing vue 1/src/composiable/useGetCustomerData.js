import {ref} from "vue";

export function useGetCustomerData() {
    const customers = ref([]);
    const fetchData = async () => {
        const res = await fetch('http://localhost:3001/customers');
        customers.value = await res.json();

    }

    return {customers, fetchData};
}