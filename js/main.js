const mavic = document.querySelector('.mavic');
const mavicImg = document.querySelector('.mavic-img');

// like css hover in JS
mavic.addEventListener('mouseover', () => {
  mavicImg.classList.add('mavic-on');
  mavicImg.classList.remove('mavic-off');
  mavic.classList.add('animation-on');
  mavic.classList.remove('animation-off');
});

// remove hover in JS
mavic.addEventListener('mouseout', () => {
  mavicImg.classList.remove('mavic-on');
  mavicImg.classList.add('mavic-off');
  mavic.classList.add('animation-off');
  mavic.classList.remove('animation-on');
});
