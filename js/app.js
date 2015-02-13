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
var tabsTrigger = $("#tabsChannel .tabs");
var tagsTrigger = $("#tagsChannel .tags");

// Show tabs
tabsTrigger.on('click', function() {
    // Ask for the id of the element
    var tabsId = $(this).attr('id');
    // Show al the items in the loops
    $(".loopOfChannel li").show();
    tagsTrigger.removeClass("active");
    // Managing classes of the tabs
    if($(this).hasClass("active")) {
        console.log("estoy activo");
        tabsTrigger.removeClass("active");
    } else {
        tabsTrigger.removeClass("active");
        $(this).addClass("active");
        // Show and hide elements on demand
        if(tabsId == 'pack') {
            // console.log("hola " + tabsId);
            // tagsTrigger.removeClass("disable");
            $(".loopOfChannel li:not(.pack)").hide();
            $('html,body').animate({scrollTop: $("#channelGrid").offset().top - 180},'slow');
        } else if(tabsId == 'premiun') {
            tagsTrigger.removeClass("disable");
            // $("#tagsChannel li:not(.tags-3)").addClass("disable");
            $(".loopOfChannel li:not(.premiun)").hide();
            $('html,body').animate({scrollTop: $("#channelGrid").offset().top - 180},'slow');
        } else if(tabsId == 'air') {
            // tagsTrigger.addClass("disable");
            $(".loopOfChannel li:not(.air)").hide();
            $('html,body').animate({scrollTop: $("#channelGrid").offset().top - 180},'slow');
        };
    };
    // return to base
    event.preventDefault();
})

// Show tags
tagsTrigger.on('click', function() {
    // Ask for the id of the element
    var tagsId = $(this).attr('id');
    // Show al the items in the loops
    $(".loopOfChannel li").show();
    // Managing classes of the tabs
    if($(this).hasClass("active")) {
        console.log("estoy activo");
        tagsTrigger.removeClass("active");
    } else {
        tagsTrigger.removeClass("active");
        $(this).addClass("active");
        // Show and hide elements on demand
        if(tagsId == 'tags-1') {
            $(".loopOfChannel li:not(.tags-1)").hide();
        } else if(tagsId == 'tags-2') {
            $(".loopOfChannel li:not(.tags-2)").hide();
        } else if(tagsId == 'tags-3') {
            $(".loopOfChannel li:not(.tags-3)").hide();
        } else if(tagsId == 'tags-4') {
            $(".loopOfChannel li:not(.tags-4)").hide();
        } else if(tagsId == 'tags-5') {
            $(".loopOfChannel li:not(.tags-5)").hide();
        } else if(tagsId == 'tags-6') {
            $(".loopOfChannel li:not(.tags-6)").hide();
        } else if(tagsId == 'tags-7') {
            $(".loopOfChannel li:not(.tags-7)").hide();
        } else if(tagsId == 'tags-8') {
            $(".loopOfChannel li:not(.tags-8)").hide();
        }
    };
    // return to base
    event.preventDefault();
})


