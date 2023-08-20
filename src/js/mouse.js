const refs = {
  cursor: document.querySelector('#cursor'),
};

document.addEventListener('mousemove', onMouseMove);

function onMouseMove(e) {
  const x = e.clientX;
  const y = e.clientY;

  refs.cursor.style.left = x + 'px';
  refs.cursor.style.top = y + 'px';
}
