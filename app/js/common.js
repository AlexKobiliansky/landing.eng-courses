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


    $(".user-phone").mask("+7 (999) 999-99-99",{autoclear: false});

    $.validate({
        form : '.contact-form',
    });

    $('.teachers-slider').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText: ['',''],
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 15000,
        autoplaySpeed: 700,
        navSpeed: 700,
        autoHeight: true,
        responsive : {
            0: {
                items: 1,
            },
            991: {
                items: 2
            }
        }
    });

    $(".main-mnu a").mPageScroll2id();

    $(function() {
        $("a[href='#popup-form']").magnificPopup({
            type: "inline",
            fixedContentPos: !1,
            fixedBgPos: !0,
            overflowY: "auto",
            closeBtnInside: !0,
            preloader: !1,
            midClick: !0,
            removalDelay: 300,
            mainClass: "my-mfp-zoom-in"
        })

    });

    ymaps.ready(function(){
        var mapId = $('#map'),
            attitude = mapId.data("att"),
            longtitude = mapId.data("long"),
            zoom = mapId.data("zoom"),
            map = new ymaps.Map("map", {
                center: [attitude, longtitude],
                controls: [],
                zoom: zoom
            }),

            myGeoObject = new ymaps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: [attitude, longtitude]
                },
            }, {
                preset: 'islands#redIcon',
            });

        map.geoObjects
            .add(myGeoObject)
    });

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        t = th.find(".btn").text();
        th.find(".btn").prop("disabled", "disabled").addClass("disabled").text("Заявка отправлена!");

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            setTimeout(function() {
                // Done Functions
                th.find(".btn").removeAttr('disabled').removeClass("disabled").text(t);
                th.trigger("reset");
                $.magnificPopup.close();
            }, 2000);
        });
        return false;
    });


    $(".preloader").fadeOut(500)

});
