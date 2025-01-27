let lastScrollTop = 0;
navbar = document.getElementById("navigation");
window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffSet || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-82px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
})

// ---------------------------- //

const txtAnim = document.getElementById("text_anim");

new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 25
})
    .changeDelay(80)
    .typeString('développeur')
    .pauseFor(1000)
    .deleteChars(11)
    .pauseFor(1000)
    .typeString('motivé')
    .pauseFor(1000)
    .deleteChars(6)
    .pauseFor(1000)
    .typeString('enthousiaste')
    .pauseFor(1000)
    .deleteChars(12)
    .pauseFor(1000)
    .typeString('polyvalent')
    .pauseFor(1000)
    .deleteChars(10)
    .pauseFor(1000)
    .typeString('assidu')
    .pauseFor(1000)
    .deleteChars(6)
    .pauseFor(1000)
    .start()

function gotoPage() {
    window.location.href = "AP3.html";
}
function gotoPage2() {
    window.location.href = "AP2.html";
}
function gotoPage3() {
    window.location.href = "Veille.html";
}
function gotoPage4() {
    window.location.href = "SNCF.html";
}
function gotoPage5() {
    window.location.href = "D2R.html";
}
function gotoPage6() {
    window.location.href = "https://drive.google.com/drive/u/0/folders/11el2xoHc8YXs_FWEK0baW7SJ8AXfZeo3";
}
function gotoPage7() {
    window.location.href = "tableau.html";
}