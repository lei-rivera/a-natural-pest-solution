const heading = document.querySelectorAll("a.nav-item");
const sections = document.querySelectorAll("section");
const screenSizeReduction = window.screen.height * .4;

const sectionOneHeight = sections[0].offsetHeight - screenSizeReduction;
const sectionTwoHeight = sectionOneHeight + sections[1].offsetHeight;
const sectionThreeHeight = sectionTwoHeight + sections[2].offsetHeight;
const sectionFourHeight = sectionThreeHeight + sections[3].offsetHeight;
const removeLoop = () => {
    for (var i = 0; i < heading.length; i++) {
            heading[i].classList.remove("active");
        }
}

// DESKTOP HEADER NAV
window.onscroll = () => {
    if (window.scrollY < sectionOneHeight) {
        removeLoop();
        heading[0].classList.add("active");
    } else if (window.scrollY >= sectionOneHeight && window.scrollY < sectionTwoHeight) {
        removeLoop();
        heading[1].classList.add("active");
    } else if (window.scrollY >= sectionTwoHeight && window.scrollY < sectionThreeHeight) {
        removeLoop();
        heading[2].classList.add("active");
    } else if (window.scrollY >= sectionThreeHeight) {
        removeLoop();
        heading[3].classList.add("active");
    }
}