const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  //link가 페이지 어디에 위치하고 있는지 알기
  const linkCoords = this.getBoundingClientRect(); //this 이벤트가 실행되는 a 태그
  console.log(linkCoords);

  //스크롤 이동시 top, left가 문서의 top,left가 아닌 브라우저의 top left이기때문에 스크롤만큼 더해준다.
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px,${coords.top}px)`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
