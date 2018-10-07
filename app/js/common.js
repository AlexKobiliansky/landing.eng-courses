$(document).ready(function() {

    var $toggleMenu = $(".toggle-mnu");

    $toggleMenu.click(function() {
        $(this).toggleClass("on");
        // $(".mobile-mnu").slideToggle();
        // return false;
    });

    /**
     * customize mobile menu
     */
    var $mmenu = $("#mobile-mnu").mmenu({
        "extensions": [
            "fx-menu-fade",
            "fx-panels-slide-100",
            "fx-listitems-slide"
        ],
        "pageScroll" : true,
        navbar: {
            add: false,
        },
    }, {
        // configuration
        offCanvas: {
            pageSelector: "#page-content"
        },

    });

    var API = $mmenu.data("mmenu");

    API.bind( "close:start", function() {
        setTimeout(function() {
            $toggleMenu.removeClass( "on" );
        }, 300);
    });
    /**
     * end customize mobile menu
     */


    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {

        });
        return false;
    });

});
