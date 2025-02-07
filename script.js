$(function () {
  const noBtn = $(".btn.no");
  handleNoButton(noBtn);
});

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomMove(noBtn) {
  const x = randomRange(80, $(window).width() - 80);
  const y = randomRange(80, $(window).height() - 80);

  noBtn.offset({ left: x, top: y });
}

function handleNoButton(noBtn) {
  noBtn
    .on("mouseenter", function () {
      randomMove(noBtn);
    })
    .on("click", function () {
      randomMove(noBtn);
    });
}
