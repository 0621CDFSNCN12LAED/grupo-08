window.addEventListener("load", function (){
console.log("Edit product validations ON");

//req all necesary fields
        let image = document.querySelector("#images");  
        let title = document.querySelector("#title");
        // let category = document.querySelector("#category");
        let size = document.querySelector("#size");
        let color = document.querySelector("#color");
        let categoryGender = document.querySelector("#categoryGender");
        let categorySport = document.querySelector("#categorySport");
        let price = document.querySelector("#price");
        let stock = document.querySelector("#stock");
        let productDescription = document.querySelector("#productDescription");
//req all error fields 
        let errorName = document.querySelector("#errorName");
        // let errorCategory = document.querySelector("#errorCategory");
        let errorSize = document.querySelector("#errorSize");
        let errorColor = document.querySelector("#errorColor");
        let errorCategoryGender = document.querySelector("#errorCategoryGender");
        let errorCategorySport = document.querySelector("#errorCategorySport");
        let errorPrice = document.querySelector("#errorPrice");
        let errorStock = document.querySelector("#errorStock");
        let errorProductDescription = document.querySelector("#errorProductDescription");
        let errorImage = document.querySelector("#errorImage");
//formatos de imagen aceptados
        let validationImageJpg = /\.jpe?g$/i;
        let validationImageJpeg = /\.jpeg?g$/i;
        let validationImagePng = /\.png?g$/i;
        let validationImageGif = /\.gif?g$/i;

//scroll to errors
function scrollToErrors(){
document.getElementById('errores').scrollIntoView({behavior: 'smooth'});
}


//image preview
img.onchange = evt => {
  const [file] = img.files
  if (file) {
    imagePreview.src = URL.createObjectURL(file)
  }
}

let formulario = document.querySelector(".productForm");


    formulario.addEventListener("click",  async function(event){
               
    let errores = {};

        if(title.value.length < 1){
            errores.name = "El campo nombre no puede estar vacio";
        }

        if (image.value == null && !validationImageJpg.test(image.value) && !validationImageJpeg.test(image.value) && !validationImagePng.test(image.value) && !validationImageGif.test(image.value) ){
           errores.image = "El producto debe tener una imagen en formato jpg, png, jpeg o gif";
           image.classList.add('errorField')
        }else{
            image.classList.remove('errorField')
        }
        // if(category.value == "Elige una opción"){
        //     errores.category = "Debes indicar el tipo de producto";
        //     category.classList.add('errorField')
        // }else{
        //     category.classList.remove('errorField')
        // }
         if(size.value == "Elige una opción"){
             errores.size = "Debes indicar un talle para tu producto";
             size.classList.add('errorField')
        }else{
            size.classList.remove('errorField')
        }
         if(color.value == "Elige una opción"){
            errores.color = "Debes indicar un color para tu producto";
            color.classList.add('errorField')
        }else{
            color.classList.remove('errorField')
        }
         if(categoryGender.value == "Elige una opción"){
            errores.categoryGender = "Debes indicar para quien esta pensado tu producto";
            categoryGender.classList.add('errorField')
        }else{
            categoryGender.classList.remove('errorField')
        }
         if(categorySport.value == "Elige una opción"){
            errores.categorySport = "Por favor, indica una categoria para tu producto";
            categorySport.classList.add('errorField')
        }else{
            categorySport.classList.remove('errorField')
        }
        if(price.value < 1){
            errores.price = "El producto debe tener un precio";
            price.classList.add('errorField')
        }else{
            price.classList.remove('errorField')
        }
        if(stock.value=="" || stock.value == null){
            errores.stock = "El producto debe tener un stock (min: 1)";
            stock.classList.add('errorField')
        }else{
            stock.classList.remove('errorField')
        }
        if(productDescription.value=="" || productDescription.value == null){
            errores.productDescription = "Por favor, describe un poco tu producto";
            productDescription.classList.add('errorField')
        }else{
            productDescription.classList.remove('errorField')
        }

        if(Object.keys(errores).length >= 1){
                   event.preventDefault();
                   scrollToErrors();
                   errorName.innerText = (errores.name) ? errores.name: "";
                //    errorCategory.innerText = (errores.category) ? errores.category: "";
                   errorSize.innerText = (errores.size) ? errores.size: "";
                   errorColor.innerText = (errores.color) ? errores.color: "";
                   errorCategoryGender.innerText = (errores.categoryGender) ? errores.categoryGender: "";
                   errorCategorySport.innerText = (errores.categorySport) ? errores.categorySport: "";
                   errorPrice.innerText = (errores.price) ? errores.price: "";
                   errorStock.innerText = (errores.stock) ? errores.stock: "";
                   errorProductDescription.innerText = (errores.productDescription) ? errores.productDescription: "";
                   errorImage.innerText = (errores.image) ? errores.image: "";
        }
    })

})