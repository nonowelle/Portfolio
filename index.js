
//HOVER EFFECT NAV
$(".navli").hover(function () {
    $(this).css("color", "#E5E5E5")
},
    function () {
        $(this).css("color", "#FCAF58")
    }
);

//HOVER EFFECT BOUTON CENTRAL
$('.fleche').hover(function () {
    $(this).css("color", "#E5E5E5")
},
    function () {
        $(this).css("color", "#FCAF58")
    }
);

$('.rond-fleche').hover(function () {
    $(this).css("border-color", "#E5E5E5")

},
    function () {
        $(this).css("border-color", "#FCAF58")
    }
);

// SCROLL EFFECT SECTION PROJETS

let scroll = window.requestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60)
};

let elementsToShow = document.querySelectorAll('.show-on-scroll-left');

function loopL() {
    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible-left');
        } else {
            element.classList.remove('is-visible-left');
        }
    });
    scroll(loopL);
}
loopL();

let elementsToShowRight = document.querySelectorAll('.show-on-scroll-right');

function loopR() {
    elementsToShowRight.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible-right');
        } else {
            element.classList.remove('is-visible-right');
        }
    });
    scroll(loopR);
}

loopR();

function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

