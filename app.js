/*const scrollContainer = document.getElementsByClassName('main')[0];

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft = scrollContainer.scrollLeft + 20 * evt.deltaY;
});*/

var setTheme = localStorage.getItem('theme');
if (setTheme == null) {
    document.getElementById("myStyleSheet").href = 'lightmode.css';
    localStorage.setItem('theme', 'lightmode.css');
}
function change() {
    var setTheme = localStorage.getItem('theme');
    if (setTheme == 'darkmode.css') {
        document.getElementById("myStyleSheet").href = 'lightmode.css';
        localStorage.setItem('theme', 'lightmode.css');
    }
    else if (setTheme == 'lightmode.css') {
        document.getElementById("myStyleSheet").href = 'darkmode.css';
        localStorage.setItem('theme', 'darkmode.css');
    }
}




const scrollContainer = document.getElementsByClassName('main')[0];

window.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    if (evt.deltaY > 0) {
        slideRight();
    }
    else if (evt.deltaY < 0) {
        slideLeft();
    }
});

window.addEventListener("keydown", (e) => {
    e.preventDefault();
    var x = e.key;
    if (x == "ArrowDown" || x == "ArrowRight" || x == "PageDown" || x == " ") {
        slideRight();
    }
    else if (x == "ArrowUp" || x == "ArrowLeft" || x == "PageUp") {
        slideLeft();
    }
    else if (x == "Home") {
        homeFunction();
    }
    else if (x == "End") {
        endFunction();
    }
});

function homeFunction() {
    scrollContainer.scrollBy({
        top: 0,
        left: -50000/*,
        behavior: 'smooth'*/
    })
}
function slideRight() {
    scrollContainer.scrollBy({
        top: 0,
        left: window.innerWidth * 1/*,
        behavior: 'smooth'*/
    })
}
function slideLeft() {
    scrollContainer.scrollBy({
        top: 0,
        left: window.innerWidth * (-1)/*,
        behavior: 'smooth'*/
    })

}
function endFunction() {
    scrollContainer.scrollBy({
        top: 0,
        left: 50000/*,
        behavior: 'smooth'*/
    })

}




