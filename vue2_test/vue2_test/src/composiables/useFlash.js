import swal from 'sweetalert';

export function useFlash() {
    const flash = (message ,status)=>{
        swal(message, "You clicked the button!", status);
    }

    return {flash};
}