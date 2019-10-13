const icon = document.querySelector("#icon");

icon.addEventListener("click", scrollFunction);

function scrollFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onload = function () {
  window.scrollTo(0, 0);
};

$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $('#icon').show();
  }
  else {
    $('#icon').hide();
  }
});


