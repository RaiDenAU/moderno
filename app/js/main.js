$(function () {
    $(".menu__btn").on("click", function () {
        $(".menu__list").slideToggle();
    });

    $(".products__slider-inner").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false
    }

    );

    $(".suka").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: '$'
    }

    );

    $(".rateYo").rateYo({
        starWidth: "12px",
        rating: 5,
        readOnly: true
    }

    );

    $(".icon-th-list").on("click", function () {
        $(".products__item").addClass("list");
        $(".icon-th-list").addClass('active');
        $(".icon-th-large").removeClass("active");
    }

    );

    $(".icon-th-large").on("click", function () {
        $(".products__item").removeClass("list");
        $(".icon-th-large").addClass('active');
        $(".icon-th-list").removeClass("active");
    });

    $(".profile__btn").on("click", function () {
        $(".header__box").toggleClass("slide");
    });

    $('.product-det__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.product-det__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product-det__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    var mixer = mixitup(".products__inner-container");

}

);