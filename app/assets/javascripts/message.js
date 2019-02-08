$(function () {
  $('.chatMain__footer--newMessage').submit(function (e) {
    e.preventDefault();
    var formData = new FormData(this);
  })
})
