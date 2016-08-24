// navigate to edit page on click of thread
$(document).on('click', '.fa-plus-circle', function () {
    $('#plus-drop').show();
});

function Description(ThreadId) {
    window.location.href = 'Description.html';
}

$(document).on('click', '.fa-search', function () {
    $('#selectpicker').hide();
    $('#searchbox').show();
});

//$(document).on('click', ':not(.fa-search)', function () {
//    $('#selectpicker').show();
//    $('#searchbox').hide();
//});