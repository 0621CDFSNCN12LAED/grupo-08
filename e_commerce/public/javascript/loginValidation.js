let email = document.querySelector("#email");
let password = document.querySelector("#password");
let btnSubmit = document.querySelector("#buttonSubmitLogin");

let errMail = document.querySelector(".errMail");
let errPassword = document.querySelector(".errPassword");

let errores = {}

btnSubmit.addEventListener("click", (e) =>{

    let regex = /^[^\s@]+@[^\s@]+$/;
    

    if(email.value.length < 1){
        errores.email = "El campo de Email es obligatorio"
    }else if(!regex.test(email.value)){
        errores.email = "Debe ingresar un mail válido";
    }

    if(password.value.length < 1){
        errores.password = "Es obligatorio que ingrese una contraseña";
    }

    if(Object.keys(errores).length >= 1){
        errMail.innerText = (errores.email) ? errores.email : "asd";
        errPassword.innerText = (errores.password) ? errores.password : "";
        e.preventDefault();
    } else{
        btnSubmit.submit();
    }
})