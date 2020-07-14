const approveCard = document.querySelector(`.approve-card`);
const pictureImage = document.querySelector(`.picture__image`);

pictureImage.addEventListener(`click`, (evt) => {
  if (evt.target === pictureImage) {
    approveCard.classList.toggle(`approve-card--dark-theme`);
  }
});
