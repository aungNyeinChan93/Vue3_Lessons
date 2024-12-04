import {reactive, watch} from "vue";

export function useStorage(keyName, keyEmail) {

    const formSubmit = (form) => {
        if (form.name === null && form.email === null) {
            localStorage.removeItem(keyName);
            localStorage.removeItem(keyEmail);
        } else {
            localStorage.setItem(keyEmail, JSON.stringify(form.email));
            localStorage.setItem(keyName, JSON.stringify(form.name));
        }
    }

    const form = reactive({
        name: JSON.parse(localStorage.getItem(keyName)),
        email: JSON.parse(localStorage.getItem(keyEmail)),
    });

    watch(form, () => {
        formSubmit(form)
    })

    return {form, formSubmit}
}
