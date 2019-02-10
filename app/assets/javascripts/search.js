$(function () {
  var member_list = $("#user-search-result");
  function appendMember(user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                </div>`;
    member_list.append(html);
}

  $(document).click("user-search-add chat-group-user__btn chat-group-user__btn--add", function () {
    $(this).remove();
    debugger;
  });

  $("#user-search-field").on("keyup", function () {
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: {
        keyword: input
      },
      dataType: 'json'
    })
      .done(function (users){
        member_list.empty();
        if (users.length !== 0) {
          users.forEach(function (user) {
            appendMember(user);
          });
        }
      })
      .fail(function () {
        alert('error');
      })

  });
});
