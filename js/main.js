// $(document).ready(function () {
//     $(document).click(function (event) {
//         var clickover = $(event.target);
//         var _opened = $(".navbar-collapse").hasClass("show");
//         if (_opened === true && !clickover.hasClass("navbar-toggler")) {
//             $(".navbar-toggler").click();
//         }
//     });
// }); KOD JQuery
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