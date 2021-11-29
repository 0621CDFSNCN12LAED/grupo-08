window.addEventListener("load", function (){

console.log("front end validations turned on");


img.onchange = evt => {
  const [file] = img.files
  if (file) {
    imagePreview.src = URL.createObjectURL(file)
  }
}


let formulario = document.querySelector(".CreateForm");

    formulario.addEventListener("submit", function(event){


        let errores = [];

        let image = document.querySelector("#img");  
        let name = document.querySelector("title");
        let category = document.querySelector("#category");
        let size = document.querySelector("#size");
        let color = document.querySelector("#color");
        let categoryGender = document.querySelector("#categoryGender");
        let categorySport = document.querySelector("#categorySport");
        let price = document.querySelector("#price");
        let stock = document.querySelector("#stock");
        let productDescription = document.querySelector("#productDescription");
    let validationImageJpg = /\.jpe?g$/i;
    let validationImageJpeg = /\.jpeg?g$/i;
    let validationImagePng = /\.png?g$/i;
    let validationImageGif = /\.gif?g$/i;

        let imageExt = image.filename.split('.').pop().toLowerCase();

// imgExtensions != "png" ||


    let validationImageJpg = /\.jpe?g$/i;
    let validationImageJpeg = /\.jpeg?g$/i;
    let validationImagePng = /\.png?g$/i;
    let validationImageGif = /\.gif?g$/i;

        if (!validationImageJpg.test(image.value) || !validationImageJpeg.test(image.value) || !validationImagePng.test(image.value) || !validationImageGif.test(image.value)){
           errores.push("El producto debe tener una imagen en formato jpg, png, jpeg o gif");
        }

        if(name.value==""){
            errores.push("El campo nombre no puede estar vacio");
        }

        if(category.value == "Elige una opción"){
            errores.push("Debes indicar el tipo de producto");
        }
         if(size.value == "Elige una opción"){
             errores.push("Debes indicar un talle para tu producto");
        }
         if(color.value == "Elige una opción"){
            errores.push("Debes indicar un color para tu producto");
        }
         if(categoryGender.value == "Elige una opción"){
            errores.push("Debes indicar para quien esta pensado tu producto");
        }
         if(categorySport.value == "Elige una opción"){
            errores.push("Por favor, categoriza tu producto");
        }
        if(price.value < 1){
            errores.push("El producto debe tener un precio");
        }
        if(stock.value=="" || stock.value == null){
            errores.push("El producto debe tener un stock (min: 1)");
        }
        if(productDescription.value=="" || productDescription.value == null){
            errores.push("Por favor, describe un poco tu producto");
        }



        if(errores.length > 0){
                   event.preventDefault();
                   let ulErrores = document.querySelector("#errorList");
                   for(let i=0; i < errores.length; i++){
                       ulErrores.innerHTML += "<li>"+errores[i]+"<li>"
                   }          
        }
    })
})


