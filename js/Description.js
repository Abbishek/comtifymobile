$(document).on('click', '#moveToIndex', function () {
    $('#divDescription').hide('slow');
    window.location.href = 'index.html';
});

$(document).on('click', '#btnSubmit', function () {
    var val = $('#tag_box').val();
              $('#tag_box').val('');

    if (val !== null & val !== undefined && val !== "") {
        var comment = '<div class="container thread"><span>' + val + '</span></div>';
        $(comment).insertBefore($(this).parent())
        // $(this).parent().prepend(comment);
    }
});

$(document).on('click', '.fa-list-ul', function () {
    $('#list-drop').show();
});


$(document).on('click', '.thread div', function () {
    $('#divIndex').hide('slow');
    $('#divDescription').show('slow');
});
