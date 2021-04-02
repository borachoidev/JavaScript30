const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
  console.log(this.classList.value); // three ; two ; one;
  e.stopPropagation(); //bubbling을 하지 않고 이벤트가 발생한 최하위 자식에서 멈춘다.
  //three를 클릭하면 three를 감싸고 있는 모든 것들이 클릭 된다.
  //bubbling 자식 엘레멘트에서 부모 엘레멘트로 이벤트
  //capture 부모 엘레멘트에서 자식 엘레멘트로
}

document.body.addEventListener('click', logText);
divs.forEach(div =>
  div.addEventListener('click', logText, { capture: false, once: true })
);
// 이벤트리스너의 3번째인수
/*
capture : true 이벤트 캡처링
once : 이번트가 단 한번만 발생한다.
*/

button.addEventListener(
  'click',
  () => {
    console.log('Click');
  },
  { once: true }
);
