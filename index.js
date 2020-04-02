let burger_menu = document.getElementById("nav");
let band = document.getElementById("bands");
let counter = 1;
let header = document.getElementsByTagName("header")[0];
let remove_in_scroll = document.getElementsByClassName("scroll_remove");
let bandOne = document.getElementById("bandOne");
let bandTwo = document.getElementById("bandTwo");
let bandThree = document.getElementById("bandThree");


function openBurger() {
    if(counter === 1) {
        burger_menu.classList.remove("nonactive_burger");
        burger_menu.classList.add("active_burger");
        bandTwo.classList.add("bandTwo");
        bandOne.classList.add("bandOne");
        bandThree.classList.add("bandThree");
        counter = 0
    }else{
        burger_menu.classList.add("nonactive_burger");
        burger_menu.classList.remove("active_burger");
        bandTwo.classList.remove("bandTwo");
        bandOne.classList.remove("bandOne");
        bandThree.classList.remove("bandThree");
        counter = 1
    }

}

band.addEventListener("click", openBurger);

window.onscroll = function header_change() {

    document.getElementById("small_text").style.display = "none";
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrollTop)
    if(window.innerWidth >= 1024 && document.documentElement.scrollTop > 20) {
        header.classList.add("scroll_header");
        for (let i = 0; i < remove_in_scroll.length; i++) {
            remove_in_scroll[i].style.display = "none"
        }
        document.getElementById("shark").style.display = "block";
        document.getElementById("small_text").style.display = "none";
    }
    if (document.documentElement.scrollTop <= 20) {
        header.classList.remove("scroll_header");
        document.getElementById("shark").style.display = "none";
        for (let i = 0; i < remove_in_scroll.length; i++) {
            remove_in_scroll[i].style.display = "block"
        }
    }
};



let description = document.getElementsByClassName("descriptionService");
let plus = document.getElementsByClassName("plus");
console.log(description[1])

function openService( num) {
    if(!description[num].classList.contains('open_service')) {
        description[num].classList.add("open_service")
        plus[num].src = "img/minus.svg"
    }else{
        description[num].classList.remove("open_service")
        plus[num].src = "img/plus.svg"
    }
}

function play_video() {
    let video = document.getElementById("back_video")
    video.style.display = "grid"
}



