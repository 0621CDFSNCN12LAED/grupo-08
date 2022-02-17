window.addEventListener("load", function (){
console.log("header js funcionando");


  var HamburguerIcon = document.querySelector(".iconBurger i");
  var navBar = document.getElementById("navBar");
  var dropdownMenu = document.querySelector("dropdown");
  
HamburguerIcon.addEventListener("click", function(){
navBar.classList.toggle("navBarHambu");
dropdownMenu.classList.toggle("dropdown-menu");
HamburguerIcon.classList.toggle("minimizeHamburguer");
})

 })