const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    //어떤 엘레멘트의 position을 fix로 할 경우 엘레멘트의 크기는 document에서 무시된다.
    //따라서 window.scrollY = topOfNav일때 document의 내용이 nav의 offsetTop만큼 올라가 부자연스러워지므로
    //padding 값을 준다.
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav);
