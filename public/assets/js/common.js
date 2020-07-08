$('#logout').on('click', function() {
    var isConfirm = confirm('are you sure to Quit?');
    if (isConfirm) {
        $.ajax({
            type: 'post',
            url: '/logout',
            success: function() {
                location.href = 'login.html';
            },
            error: function() {
                alert("wrong!");
            }
        })
    }
});