// toggle for map
$(document).delegate('.toggle-checkbox', 'click', function () {
    $(this).parent().toggleClass('open');
});

// toggle for map
$(document).delegate('.share-toggle', 'click', function () {
    $(this).parent().toggleClass('open');
    return false;
});
