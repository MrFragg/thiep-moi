$(function () {
  handleNoButton();
  handleYesButton();
  handleEnvelope();
});

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomMove(noBtn) {
  const x = randomRange(80, $(window).width() - 80);
  const y = randomRange(80, $(window).height() - 80);

  noBtn.offset({ left: x, top: y });
}

function handleNoButton() {
  const noBtn = $(".btn.no");

  noBtn
    .on("mouseenter", function () {
      randomMove(noBtn);
    })
    .on("click", function () {
      randomMove(noBtn);
    });
}

function handleYesButton() {
  $(".btn.yes").on("click", function () {
    $(".group-btn").removeClass("active");
    $(".form").addClass("active");
    $(".main-title").text("Vui lòng cung cấp thông tin")
  });
}

function handleEnvelope() {
  let isOpen = false;
  const popup = $("#popup");
  const formName = $("input#form-name");
  const username = $(".username");

  $(".close-btn").on("click", function () {
    if (isOpen) {
      popup.removeClass("active");
      isOpen = false;
    }
  });

  $(".form-submit").on("click", function () {
    if (!isOpen && String(formName.val()).length > 0) {
      popup.addClass("active");
      username.text((formName.val()));
      isOpen = true;
    }
  });
}
