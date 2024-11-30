import {reactive, watch} from "vue";

export function useStorage(keyName, keyEmail) {

    const storageVals = {
        name: localStorage.getItem('keyName'),
        email: localStorage.getItem('keyEmail'),
    }

    const form = reactive(storageVals);

    const formSubmit = (form) => {
        localStorage.setItem('name', form.name);
        localStorage.setItem('email', form.email);
    }

    watch(form, () => {
        formSubmit(form)
    })

    return { form ,formSubmit}
}
