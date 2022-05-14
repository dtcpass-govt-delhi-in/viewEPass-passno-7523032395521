// Coded by The Yogesh Kaushik
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('nav').addClass("sticky");
        } else {
            $('nav').removeClass("sticky")
        }
    })



    // applying again smooth scroll on menu items click
    $('.navbar li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });
    // $('document').click(function(){
    //     $('html').css("scrollBehavior", "smooth");
    // });
})

// let btnClear = document.getElementById('btnsubmit');
// let inputs = document.querySelectorAll('input')

// btnClear.addEventListener('click', ()=>{
//     inputs.forEach(input => input.value='')
// })

let btnClear = document.querySelector('button');
let inputs = document.querySelectorAll('input');
let textarea = document.querySelectorAll('textarea');

btnClear.addEventListener('click', () => {
    inputs.forEach(input => input.value = '');
    textarea.forEach(input => input.value = '');
});

function readmore() {
    const more = document.getElementById('readmore')
    if (more.style.display == 'none') {
        more.style.display = 'block '
    } else {
        more.style.display = 'none';
    }
}


// Menu burger button script
$('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active")
    $('.menu-btn i').toggleClass("active")
})
$('.read-more-btn').click(function () {
    $('#read-more').toggleClass("readdd")

})

// Animation text automation
// Animation text automation

var typed = new Typed(".typed-automation",{
    strings : ["Network Administrator", "Cyber Security Engineer" , "Web Designer "," Developer "],
    typeSpeed :100,
    backSpeed : 50,
    loop: true
})
var typed = new Typed(".typed-automation2",{
    strings : ["Network Administrator", "Cyber Security Engineer" , "Web Designer "," Developer "],
    typeSpeed :100,
    backSpeed : 50,
    loop: true
})


