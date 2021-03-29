const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(
  data => {
    speed.textContent = data.coords.speed;
    //나침반 바늘 방향 바꾸기
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  err => {
    alert('위치정보를 허용하세요!');
  }
);
