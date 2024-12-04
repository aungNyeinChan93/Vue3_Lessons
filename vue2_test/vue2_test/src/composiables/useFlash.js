import swal from 'sweetalert';

export function useFlash() {
    const successFlash = (title ,body)=>{
        swal(title,body, "success");
    }
    const failFlash  = (title ,body)=>{
        swal(title,body,"error");
    }

    return {successFlash ,failFlash};
}