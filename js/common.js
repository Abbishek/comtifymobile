$(document).on('click', '.tagclose', function (event) {
    event.stopPropagation();
    $(this).parent().remove();
    return false;
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});