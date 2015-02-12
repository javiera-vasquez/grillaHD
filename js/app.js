// Init foundation
$(document).foundation();

// Define negative margin of the channel loop
var negativeMargin = $("#tagsChannel").height() + 25;
$("#loopContainer").css('margin-top', - negativeMargin);

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

// Add or delete element of the channelGrid
// Show tabs
var pack = $("#pack");
var premiun = $("#premiun");
var air = $("#air");
var tabsTrigger = $("#tabsChannel .tabs");

tabsTrigger.on('click', function() {
    // Ask for the id of the element
    var tabsId = $(this).attr('id');
    // Show al the items in the loops
    $(".loopOfChannel li").show();
    // Managing classes of the tabs
    if($(this).hasClass("active")) {
        console.log("estoy activo");
        tabsTrigger.removeClass("active");
    } else {
        tabsTrigger.removeClass("active");
        $(this).addClass("active");
        // Show and hide elements on demand
        if(tabsId == 'pack') {
            console.log("hola " + tabsId);
            $(".loopOfChannel .premiun, .loopOfChannel .air").hide();
        } else if(tabsId == 'premiun') {
            console.log("hola " + tabsId);
            $(".loopOfChannel .pack, .loopOfChannel .air").hide();
        } else if(tabsId == 'air') {
            console.log("hola " + tabsId);
            $("#tagsChannel").hide();
            $(".loopOfChannel .premiun, .loopOfChannel .pack").hide();
        };
    };
    // return to base
    event.preventDefault();
})

// Show tags
