//
$('#addCategory').on('submit', function() {
    var formData = $(this).serialize();

    $.ajax({
        type: 'post',
        url: '/categories',
        data: formData,
        success: function() {
            location.reload();
        }
    })

    return false;
})