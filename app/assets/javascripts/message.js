$(function () {
  function buildHTML(message) {
        var html = `<div class='chatMain__body--list--message'>
                  <div class='chatMain__body--list--message--name'>
                  ${message.user_name}
                  </div>
                  <div class='chatMain__body--list--message--time'>
                  ${message.created_at}</div>
                  <div class='chatMain__body--list--message--text'>
                  <p>${message.content}</p>
                  </div>
                  </div>`
    return html;
  }
  $('.chatMain__footer--newMessage').submit(function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    var href = window.location.href;
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function (message) {
      var html = buildHTML(message);
      $('.chatMain__body--list').append(html)
      $('#messageBody').val('')
    })
      .fail(function () {
        alert('error');
      })
  });
});
