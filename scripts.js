let clicked = 0;
let els = document.querySelectorAll('a');
for( var i=els.length; i--; ) {
    els[i].addEventListener( 'click', function() {
        clicked = 1;
    });
}

// Flip card
let card = document.querySelector('.card');
let cardFront = document.querySelector('.card--front');

function handleClick(ev) {
    if (clicked === 1) {
        clicked = 0;
    } else {
        card.classList.toggle('is-flipped');
        cardFront.classList.toggle('front-visible');
    }
}

document.addEventListener( 'click', handleClick);

// Support mobile touch event
// document.addEventListener('touchstart', handleClick, false)
