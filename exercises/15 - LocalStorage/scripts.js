'use strict';

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// 로컬 스토리지에 값이 있으면 값으로 없으면 빈배열로 초기화 된다.
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  //submit 이벤트의 기본값은 폼의 내용을 서버에 보내고 페이지를 새로고침한다.
  //기본 이벤트를 방지하기 위해 사용함.
  e.preventDefault();
  const text = this.querySelector('[name=item]').value; // this 는 form 태그를 가리킨다.
  const item = {
    text, // es6 이후로 변수 값을 값으로 변수명이 키와 같으면 생략가능하다.
    done: false,
  };
  //item을 items 배열에 넣는다.
  items.push(item);
  //함수를 사용해서 전체를 렌더링 하지 않고 컴포넌트 별로 렌더링 한다.
  populateList(items, itemsList);
  //새로 고침후에도 목록을 유지하기 위해 local Storage에 저장한다.
  //local Storage의 값은 string이여야하기 때문에 item을 JSON.stringify()를 통해 string 으로 바꾼다.
  localStorage.setItem('items', JSON.stringify(items));
  this.reset(); //form의 데이터 값을 초기화 한다.
}

//렌더링 하기 위한 함수
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? 'checked' : ''
      } />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
    })
    .join(''); //map의 반환 값인 배열을 join을 통해 string으로 변경시킨다.
}

function toggleDone(e) {
  if (!e.target.matches('input')) return; // input 이 아니면 이벤트를 스킵한다
  const el = e.target;
  const index = el.dataset.index; //items 배열에서 변경할 프로퍼티 찾기
  items[index].done = !items[index].done;
  //새로 고침후에도 목록을 유지하기 위해 local Storage에 저장한다.
  localStorage.setItem('items', JSON.stringify(items));
  //함수를 사용해서 전체를 렌더링 하지 않고 컴포넌트 별로 렌더링 한다.
  populateList(items, itemsList);
}
addItems.addEventListener('submit', addItem);
//event delegation을 통해 각 항목의 완료 이벤트를 처리한다.
itemsList.addEventListener('click', toggleDone);

//페이지로딩시 실행될 함수
