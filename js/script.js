let burger = document.querySelector(".promo__item_burger")

let burgerMenu = document.querySelector(".promo__burger_list")

burger.addEventListener("click", function(){
    burger.classList.toggle("promo__item_burger_active")
    burgerMenu.classList.toggle("promo__burger_list_active")
})