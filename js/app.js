// Init foundation
$(document).foundation();

// bad hack
$(".pricing-table:first").css('border-left', 'solid 1px #DDDDDD')

// Smooth scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 150
        }, 1000);
        return false;
      }
    }
  });
});

// Define negative margin of the channel loop
var negativeMargin = $("#tagsChannel").height();
$("#loopContainer").css('margin-top', - negativeMargin);

// Fixed element's
$("#nav").scrollToFixed({
    zIndex: 995,
});

// Fixed the region combos
$("#region").scrollToFixed({
    marginTop: 80,
    zIndex: 990,
    limit: function() {
        var limit = $("#optionsHd").offset().top - $(this).outerHeight(true) - 80
        return limit;
    }
});

// Fixed the tabs
$("#fixedNavChannel").scrollToFixed({
    zIndex: 980,
    marginTop: $('#nav').outerHeight(true) + 60,
    limit: function() {
        var limit = $("#optionsHd").offset().top - $(this).outerHeight(true) - 450
        return limit;
    }
});

$("#fixedTagChannel").scrollToFixed({
    zIndex: 20,
    marginTop: $('#nav').outerHeight(true) + 160,
    limit: function() {
        var limit = $("#optionsHd").offset().top - $(this).outerHeight(true) - 200
        return limit;
    }
});

// Add or delete element of the channelGrid
var tabsTrigger = $("#tabsChannel .tabs");
var tagsTrigger = $("#tagsChannel .tags");
function scroll() {$('html,body').animate({scrollTop: $("#channelGrid").offset().top - 160},'slow');} ;

// Init base clase
$(".loopOfChannel li").addClass("active");

// Show tabs
tabsTrigger.on('click', function() {
    // Ask for the id of the element
    var tabsId = $(this).attr('id');
    // Show al the items in the loops
    $(".loopOfChannel li").show().addClass("active");
    tagsTrigger.removeClass("active");
    // Managing classes of the tabs
    if($(this).hasClass("active")) {
        tabsTrigger.removeClass("active");
        $("#tagsChannel li").removeClass("disable");
    } else {
        tabsTrigger.removeClass("active");
        $(this).addClass("active");
        // Show and hide elements on demand
        if(tabsId == 'pack') {
            // console.log("hola " + tabsId);
            // tagsTrigger.removeClass("disable");
            // Remove no active channel
            $(".loopOfChannel li:not(.pack)").hide().removeClass("active");
            // Remove active channel
            $(".loopOfChannel .pack").addClass("active");
            // Scroll animation
            scroll();
            // Enable disable tags
            $("#tagsChannel li").removeClass("disable");
            $("#tags-8").addClass("disable");
        } else if(tabsId == 'premiun') {
            tagsTrigger.removeClass("disable");
            // $("#tagsChannel li:not(.tags-3)").addClass("disable");
            $(".loopOfChannel li:not(.premiun)").hide().removeClass("active");
            $(".loopOfChannel .premiun").addClass("active");
            // Scroll animation
            scroll();
            // Enable disable tags
            $("#tagsChannel li").removeClass("disable");
            $("#tagsChannel li:not(#tags-8, #tags-3, #tags-5)").addClass("disable");
        } else if(tabsId == 'air') {
            // tagsTrigger.addClass("disable");
            $(".loopOfChannel li:not(.air)").hide().removeClass("active");
            $(".loopOfChannel .air").addClass("active");
            // Scroll animation
            scroll();
            // Enable disable tags
            $("#tagsChannel li").addClass("disable");
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
    $(".loopOfChannel li.active").show();
    // Managing classes of the tabs
    if($(this).hasClass("active")) {
        tagsTrigger.removeClass("active");
    } else {
        tagsTrigger.removeClass("active");
        $(this).addClass("active");
        // Show and hide elements on demand
        if(tagsId == 'tags-1') {
            $(".loopOfChannel li:not(.tags-1)").hide();
            scroll();
        } else if(tagsId == 'tags-2') {
            $(".loopOfChannel li:not(.tags-2)").hide();
            scroll();
        } else if(tagsId == 'tags-3') {
            $(".loopOfChannel li:not(.tags-3)").hide();
            scroll();
        } else if(tagsId == 'tags-4') {
            $(".loopOfChannel li:not(.tags-4)").hide();
            scroll();
        } else if(tagsId == 'tags-5') {
            $(".loopOfChannel li:not(.tags-5)").hide();
            scroll();
        } else if(tagsId == 'tags-6') {
            $(".loopOfChannel li:not(.tags-6)").hide();
            scroll();
        } else if(tagsId == 'tags-7') {
            $(".loopOfChannel li:not(.tags-7)").hide();
            scroll();
        } else if(tagsId == 'tags-8') {
            $(".loopOfChannel li:not(.tags-8)").hide();
            scroll();
        }
    };
    // return to base
    event.preventDefault();
})

// Trigger to launch modal's
function noVtr() {
    $("#noVtr").modal({
        closeClass: 'close-modal',
        overlayClose: true
    });
};

function noFact() {
    $("#noFact").modal({
        closeClass: 'close-modal',
        overlayClose: true
    });
};

function noChannel() {
    $("#noChannel").modal({
        closeClass: 'close-modal',
        overlayClose: true
    });
};

// Show or disable channels of the grid
function basic() {
    $(".loopOfChannel .new").addClass("disable")
};

function full() {
    $(".loopOfChannel .new").removeClass("disable")
};

// Modal for disable grid
$("#channelGrid.disable").on('click', function() {
    $("#noRegion").modal({
        closeClass: 'close-modal',
        overlayClose: true
    });
    event.preventDefault();
});

// Modal's on click()
$(".modal-list li .noVtr").on('click', function() {
    $("#noVtr").modal({
        closeClass: 'close-modal',
        overlayClose: true
    });
    event.preventDefault();
});

$(".modal-list li .noFact").on('click', function() {
    $("#noFact").modal({
        closeClass: 'close-modal',
        overlayClose: true
    });
    event.preventDefault();
});

$(".modal-list li .noChannel").on('click', function() {
    $("#noChannel").modal({
        closeClass: 'close-modal',
        overlayClose: true
    });
    event.preventDefault();
});


