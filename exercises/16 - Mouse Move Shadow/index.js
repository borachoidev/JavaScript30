'use strict';

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 70; //px

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  const { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(178, 127, 214, 0.6),
    ${xWalk * -1}px ${yWalk}px 0 rgba(134, 127, 250, 0.6),
    ${xWalk * -1}px ${yWalk * -1}px 0 rgba(252, 23, 69, 0.6),
    ${xWalk}px ${yWalk * -1}px 0 rgba(252, 182, 69, 0.6),
    ${yWalk}px ${xWalk}px 0 rgba(178, 221, 214, 0.6),
    ${yWalk * -1}px ${xWalk}px 0 rgba(255, 242, 0, 0.6),
    ${yWalk * -1}px ${xWalk * -1}px 0 rgba(235, 127, 207, 0.6),
    ${yWalk}px ${xWalk * -1}px 0 rgba(204, 242, 0, 0.6)
  `;
}

hero.addEventListener('mousemove', shadow);
