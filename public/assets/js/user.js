// when the userForm is conducted the submit event
$('#userForm').on('submit', function() {
    //use serialize to get the context in the form and reformat the context to String
    var formData = $(this).serialize();
    //console.log(formData) // output: email=a1021604754%40gmail.com&nickName=asd&password=asd&status=0&role=normal

    //send request to server for add a new user
    $.ajax({
        type: 'post',
        url: '/users',
        data: formData,
        success: function() {
            location.reload();
        },
        error: function() {

        }
    })
    return false;
});

// when user select file
$('#avatar').on('change', function() {
    var formData = new FormData();
    formData.append('avatar', this.files[0]);

    $.ajax({
        type: 'post',
        url: '/upload',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            //console.log(response)
            // preview the user photo
            $('#preview').attr('src', response[0].avatar)
                // since we need to give data to server again when user submit so we need the hidden domain 
            $('#hiddenAvatar').val(response[0].avatar)
        }
    })
})

// send  request to server ask for user list data
$.ajax({
    type: 'get',
    url: '/users',
    success: function(response) {
        console.log(response)
        var html = template('userTpl', { data: response });
        $('#userBox').html(html);
    }
});

// add click event onto the edit button
$('#userBox').on('click', '.edit', function() {
    //get the user id who is clicked
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'get',
        url: '/users/' + id,
        success: function(response) {
            //console.log(response)
            var html = template('modifyTpl', response);
            $('#modifyBox').html(html);
        }
    })
});

// add submit event onto the form
$('#modifyBox').on('submit', '#modifyForm', function() {
    var formData = $(this).serialize();
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'put',
        url: '/users/' + id,
        data: formData,
        success: function(response) {
            location.reload()
        }
    })
})