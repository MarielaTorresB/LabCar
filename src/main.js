const logo=document.getElementById("logo");
const dropdownMenu = document.getElementById("dropdownMenu");

//Función showMenu = Al hacer click en el ícono de hamburguesa se muestra y oculta el menú desplegable
const showMenu = () =>{
   dropdownMenu.classList.toggle("hidden");
}



logo.addEventListener("click", showMenu);