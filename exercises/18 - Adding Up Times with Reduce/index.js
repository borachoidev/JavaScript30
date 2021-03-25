const timeNodes = Array.from(document.querySelectorAll('[data-time]')); //NodeLists 를 Array로 바꾸기

const seconds = timeNodes
  .map(node => node.dataset.time) // data-time 속성에 있는 값 가져오기
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat); // "mm:ss" 형태의 값을 split(":")나눈 배열로 만들고 문자를 숫자로 바꿔주기
    return mins * 60 + secs; // 분, 초를 모두 초로 바꾸기
  })
  .reduce((total, vidSeconds) => total + vidSeconds); //초로 바꾼것 다 더해주기

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);
