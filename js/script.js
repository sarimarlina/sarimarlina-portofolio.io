// Back to TOp
window.onscroll = function () {
    const toTop = document.querySelector('#back-to-top');
    // const fixedNav = header.offsetTop;
    if(window.pageYOffset > 100) {
        toTop.style.display = "block";
        // toTop.classList.add('flex');
    } else {
        // toTop.classList.remove('flex');
        // toTop.classList.add('d-none');
        toTop.style.display = "none";
    }
};


// Dark Mode Script
var element = document.body;

function setColor() {
    element.classList.toggle("mode-malam");
    if(element.classList.contains('mode-malam')) {
        localStorage.setItem('tema', 'mode-malam')
    } else {
        localStorage.setItem('tema', 'mode-siang')
    }
}
var tema = localStorage.getItem("tema");
    if(tema == 'mode-malam') {
        element.classList.add("mode-malam")
    }


// ScrollReveal
const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true,
})
sr.reveal('.home-delay',{delay:200, origin:'top'})
sr.reveal('.home-image',{delay:200, origin:'bottom'})
sr.reveal('.about-delay, .portfolio-delay, .contact-delay',{delay:200, origin:'bottom'})