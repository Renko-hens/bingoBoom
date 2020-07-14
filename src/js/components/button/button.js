const button = document.querySelector(`.button`);
const mainImage = document.querySelector(`.picture__image`);
const ratio = mainImage.width / mainImage.height;

const resizeElements = () => {
  const parentWidth = mainImage.parentNode.getBoundingClientRect().width;
  const parentHeight = mainImage.parentNode.getBoundingClientRect().height;
  const valueMin = Math.min(parentWidth, parentHeight);

  mainImage.style.width = `${valueMin * ratio}px`;
  mainImage.style.height = `${valueMin}px`;

  button.style.width = mainImage.clientWidth + `px`;
};

resizeElements();

window.addEventListener(`resize`, () => {
  resizeElements();
});

// animation
button.addEventListener(`mousedown`, (evt) => {
  console.log(mainImage.clientWidth);
  const buttonPressed = evt.target;
  const rect = evt.target.getBoundingClientRect();
  const valueMax = Math.max(buttonPressed.clientWidth, buttonPressed.clientHeight);

  const ripple = document.createElement(`div`);
  ripple.className = "ripple";
  buttonPressed.appendChild(ripple);

  ripple.style.width = ripple.style.height = valueMax + `px`;
  ripple.style.left = evt.clientX - rect.left - (valueMax / 2) + `px`;
  ripple.style.top = evt.clientY - rect.top - (valueMax / 2) + `px`;

  ripple.addEventListener('animationend', () => {
    ripple.remove();
  });
});

