//when the reset password from conduct submittion 
$('#modifyForm').on('submit', function() {
    var formData = $(this).serialize();

    //use restful api - to implement feature
    $.ajax({
        url: '/users/password',
        type: 'put',
        data: formData,
        success: function() {
            location.href = "/admin/login.html"
        }
    })

    return false;
})