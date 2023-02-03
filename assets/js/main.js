var img = document.querySelector('.header_img');
var imgarr = ["./assets/images/hero_bg_1.jpg","./assets/images/hero_bg_2.jpg","./assets/images/hero_bg_3.jpg"]
var i =0

function slideimg(){
    img.setAttribute("src",imgarr[i]);
    i++;
    if(i == imgarr.length) i = 0;
}
setInterval(slideimg,2000)

// Scroll reveal
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for( var i=0; i < reveals.length;i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint =150;
        if(revealtop < windowheight -revealpoint){
            reveals[i].classList.add('acttive');
        }else{
            reveals[i].classList.remove('acttive');

        }

    }
}
//back top
window.onscroll = function() {scrollFunction()};

let mybutton = document.querySelector('.btn-top')
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }