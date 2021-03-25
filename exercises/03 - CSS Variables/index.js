'use strict';

const inputs = document.querySelectorAll('.controls input');

function handleUpdate(e) {
  const suffix = this.dataset.sizing || ''; // 단위
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
//마우스가 움직이는 동안에도 이벤트를 발생시킨다
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
