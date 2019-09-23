$(function() {
  var mixer = mixitup(".products__inner-container");

  $(".products__slider-inner").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: false
  });

  $(".rateYo").rateYo({
    starWidth: "12px",
    rating: 5,
    readOnly: true
  });
});
