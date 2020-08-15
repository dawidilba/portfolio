function main(){
    prepareDOMElements();
    prepareDOMEvents();
};
function prepareDOMElements(){
    navbarToggler = document.querySelector(".navbar-toggler");
    console.log(navbarToggler)
    navbarCollapse = document.querySelector(".navbar-collapse");

}
function prepareDOMEvents(){
   document.addEventListener('click', (e) => {
        if(navbarCollapse.contains("show") == true && e.target.classList.contains("navbar-toggler")){
            navbarToggler.onclick;
        }
   }) 
}

document.addEventListener("DOMContentLoaded", main);