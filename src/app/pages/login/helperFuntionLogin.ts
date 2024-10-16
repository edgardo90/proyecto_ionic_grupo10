
export const errorEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex para validar el formato del email
    if(!value){
        return "email es requerido"
    }
    if (!emailRegex.test(value)) {
        return "email formato invalido";
    }
    return ""
}

export const errorPassword = (value: string) => {
    const passwordRegex = /^(?=.*\d).+$/; // regex para que cumpla que almenos tenga un numero
    if(!value){
        return "password es requerido"
    }
    if(value.length < 8){
        return "la contraseña tiene que ser mayor a 7 caracteres"
    }
    if(!passwordRegex.test(value)){
        console.log(value)
        return "La contraseña tiene que tener al menos un numero"
    }
    return ""
}