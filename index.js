


//----------------HOVER EFFECT BOUTON CENTRAL------------------//
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

//--------------BOUTON VERS À PROPOS ---------------------//
$(".rond-fleche").click(function () {
    $('html, body').animate({ scrollTop: $(".apropos").offset().top }, '2000');
})


//-------------- SCROLL EFFECT SECTION PROJETS-----------------//

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
    // because of jQuery
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

//-------------BOUTON BACK TO TOP JQUERY-----------------//

jQuery(document).ready(function () {

    const btn = $('.button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '8000');
    });

});

//---------------NAV LINKS SCROLL ANIMATION-----------------//

$(document).ready(function () {
    $(".nav").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default click behaviour
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL
                window.location.hash = hash;

            });

        }
        $('.navbar').toggleClass('expand')
        $('.menu-icon').toggleClass("span-animate");

    });
});


// -------------------- NAVBAR EXPAND RESPONSIVE ------ //

$(document).ready(function () {
    $('.menu-icon').on('click', function () {
        $('.navbar').toggleClass('expand');
        $('.menu-icon').toggleClass("span-animate");
        return false;
    });
});

$('.navli').on('click', function () {
    $('.men;u-icon').toggleClass("span-animate");
})

