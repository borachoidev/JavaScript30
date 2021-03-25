const canvas = document.querySelector('#draw');
//canvas에 직접 그리는것이 아니라 컨텍스트에 그린다.
const ctx = canvas.getContext('2d');
//사이즈를 window 사이즈로 맞춘다
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = ' #BADA55'; //처음 시작하게 될 색상
ctx.lineJoin = 'round';
ctx.lineCap = 'round'; //선의 끝은 둥글게
ctx.lineWidth = 50;
ctx.globalCompositeOperation = 'sourcein'; //색상을 블랜딩

let isDrawing = false; //마우스 다운 상태만 그림을 그릴 수 있게 flag 지정
let lastX = 0; //선을 그리기 위해 시작 x,y 와 끝나는 x,y 를 이어줘야한다.
let lastY = 0;
let hue = 0; // hsl 범위
let direction = true; // stroke 굵기를 + 할지 - 할지 정하는 flag

function draw(e) {
  if (!isDrawing) return; // 마우스 다운 상태가 아닐때는 함수 실행 중지

  console.log(e);
  ctx.strokeStyle = `hsl(${hue},99%, 50%)`;

  ctx.beginPath();
  //시작점
  ctx.moveTo(lastX, lastY);
  //도착점
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  //색
  hue++;
  if (hue >= 360) {
    //hsl 범위를 초과하면 0으로 초기화 시킨다.
    hue = 0;
  }

  //stroke 굵기
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 3) {
    //최대값 보다 크면 굵기를 줄이고 최소값 보다 작으면 굵기를 늘린다.
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  }
  if (!direction) {
    ctx.lineWidth--;
  }
}

canvas.addEventListener('mousedown', e => {
  isDrawing = true;
  //0,0좌표에서 시작하지 않고 마우스를 클릭한지점에서 그리기 위해
  //lastX,lastY를 업데이트시킨다.
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
