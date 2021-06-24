var setTheme = localStorage.getItem('theme');
if (setTheme == null) {
    change('darkmode.css');
}
else {
    change(setTheme);
}
function change(name) {

    document.getElementById("myStyleSheet").href = name;
    localStorage.setItem('theme', name);
}




function topFunction() {


    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}









window.addEventListener('scroll', reveal);
function reveal() {
    //for left to right slide
    var reveals = document.getElementsByClassName('reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }

    }
    //for right to left slide
    var reveals1 = document.getElementsByClassName('revealRight');
    for (var i = 0; i < reveals1.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals1[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals1[i].classList.add('active');
        }
        else {
            reveals1[i].classList.remove('active');
        }

    }
}