const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  this.classList.add('trigger-enter');

  //흰배경이 먼저 나온 후 내용이 나오기 위해서 setTimeout 으로 딜레이를 준다.
  //trigger-enter 클래스가 있을 경우에만 trigger-enter-active 클래스를 추가한다.
  //(마우스를 빨리 움직일경우 trigger-enter-active가 추가되기 전에 leave 이벤트가 실행되기 때문에)
  setTimeout(
    () =>
      this.classList.contains('trigger-enter') &&
      this.classList.add('trigger-enter-active'),
    150
  );
  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    //새로운 엘레멘트가 생겼을경우 좌표가 맞지않기 때문에 nav 값만큼 빼준다.
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty(
    'transform',
    `translate(${coords.left}px ,${coords.top}px)`
  );
}

//마우스가 벗어나면 클래스 지우기
function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

triggers.forEach(trigger =>
  trigger.addEventListener('mouseenter', handleEnter)
);

triggers.forEach(trigger =>
  trigger.addEventListener('mouseleave', handleLeave)
);
