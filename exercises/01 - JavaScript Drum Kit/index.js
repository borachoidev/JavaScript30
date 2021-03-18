'use strict';

function playSound(e) {
  //강의에서 사용된 keycode 가 deprecated 됐기 때문에 다른 방식으로 keycode를 찾아보았다.
  const keycode = e.key.toUpperCase().charCodeAt(0); //toUppercase로 소문자가 눌렸을때도 소리가 들릴 수 있도록 한다.
  const key = document.querySelector(`.key[data-key="${keycode}"]`);
  const audio = document.querySelector(`audio[data-key="${keycode}"]`);

  //해당하는 keycode가 없는 키보드를 눌렀을 때 함수를 멈춘다.
  if (!audio) return;
  //키보드를 연속으로 눌러도 플레이가 될 수 있게 앞으로 시작위치를 놀려놓는다.
  audio.currentTime = 0;
  //재생
  audio.play();
  //재생중인 키에 playing 클래스 추가
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //transform property가 아닐때 리턴
  this.classList.remove('playing'); // this 는 이벤트를 부른 DOM element
}

//transition이 끝나면 playing 클래스를 지우는 이벤트
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
