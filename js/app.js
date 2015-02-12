// Init foundation
$(document).foundation();

// Fixed element's
$("#nav").scrollToFixed({
    zIndex: 9999,
});

// Fixed the region combos
$("#region").scrollToFixed({
    marginTop: 80,
    zIndex: 9900,
    limit: function() {
        var limit = $("#hdInfo").offset().top - $(this).outerHeight(true) - 80
        return limit;
    }
});

// Fixed the tabs
$("#fixedNavChannel").scrollToFixed({
    marginTop: $('#nav').outerHeight(true) + 60,
    limit: function() {
        var limit = $("#hdInfo").offset().top - $(this).outerHeight(true) - 80
        return limit;
    }
});

