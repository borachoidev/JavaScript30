window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
//이야기를 멈추면 새로 p 태그를 생성해 작성한다.

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
  console.log(e);
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  //문장을 쉬었다 말하면 덮어쓰이기때문에 새 DOM elements를 만든다
  p.textContent = transcript;
  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }

  if (transcript.includes('unicorn')) {
    console.log('🦄');
  }
});

//한번 말하는게 끝나면 이벤트가 종료되기때문에
//이벤트가 종료되면 다시 인식을 시작한다
recognition.addEventListener('end', recognition.start);

recognition.start();
