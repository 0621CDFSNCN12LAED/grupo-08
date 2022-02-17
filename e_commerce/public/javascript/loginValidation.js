let email = document.querySelector("#email");
let password = document.querySelector("#password");
let btnSubmit = document.querySelector("#buttonSubmitLogin");
let formulario = document.querySelector("#formLogin")

let errMail = document.querySelector(".errMail");
let errPassword = document.querySelector(".errPassword");
let errorContainerLogin = document.querySelector(".errorContainerLogin")




formulario.addEventListener("submit", (e) =>{
    let errores = {}

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
        e.preventDefault();
        errorContainerLogin.style.display = "flex"
        errMail.innerText = (errores.email) ? errores.email : "";
        errPassword.innerText = (errores.password) ? errores.password : "";
        
    } 
})