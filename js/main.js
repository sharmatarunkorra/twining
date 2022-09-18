$('.widgetslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    dots:true,
});
$(".hamburger-menu").click(function(){
  $(this).toggleClass('active');
  $('.siteheader nav').toggleClass('active');
  $('body').toggleClass('overflowhide');
});
$(".siteheader nav ul li").click(function(){
  $('.submenu').slideToggle();
});