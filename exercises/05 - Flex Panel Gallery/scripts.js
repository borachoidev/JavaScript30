const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  //safari 에서는 flex 기타브라우저에서는 flex-grow이기 때문에 모든 브라우저에 호환할 수 있게
  //propertyName에 flex가 들어가 있으면 open-active 클래스를 추가한다
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
