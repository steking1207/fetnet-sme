jQuery(".kv-slogan-1").fitText(1, { minFontSize: '20px', maxFontSize: '60px' });
jQuery(".kv-slogan-2").fitText(1.2, { minFontSize: '16px', maxFontSize: '24px' });
jQuery(".text-tab").fitText(1.2, { minFontSize: '16px', maxFontSize: '24px' });

window.api = {};

$(function(){
    //jquery.scrollUp
    $.scrollUp({
        scrollImg: true,
    });

    $('.btn-anchor').click(function(){
		$('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-70}, 750);
		return false;
    });

    // if (window.localStorage.getItem('activeItem')) {
    //     setTimeout(function () {
    //         $('a[href="' + window.localStorage.getItem('activeItem') + '"]').tab('show');
    //     }, 300);
    // }

    if (window.location.hash) {
        if (window.location.hash === '#content'){
            return;
        }

        if (window.location.href.indexOf('article-list.html') !== -1) {
          return
        }

        setTimeout(function () {
          $('a[href="' + window.location.hash + '"]').tab('show');
        }, 10);
    }
});

$(document).ready(function() {
//    $(".table-data").tableHeadFixer({"head" : true});
//    $(".table-data").tableHeadFixer({"head" : true, "left" : 1});
//    $(".table-data-2").tableHeadFixer({"head" : true, "left" : 2});
//    $(".table-data-left2").tableHeadFixer({"head" : false, "left" : 2});
});



//////// Sub menu ////////
$('#menu .nav-item').mouseenter(function(e){
    var index = $('#menu .nav-item').index($(e.currentTarget));

    if (index === 2){
        $('[data-type=type01]').addClass('slideDown');
    }else{
        $('[data-type=type01]').removeClass('slideDown');
    }

    if (index === 3) {
        $('[data-type=type02]').addClass('slideDown');
    } else {
        $('[data-type=type02]').removeClass('slideDown');
    }

    if(index === 1 || index === 4 || index === 5){
        $('[data-type=type01]').removeClass('slideDown');
        $('[data-type=type02]').removeClass('slideDown');
    }
});


//////// Slider kv ////////
$('.slider-kv').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true
});

//////// Slider product ////////
function runSlider() {
    if ($(window).width() > 800) {
        $('.slider-product').slick('unslick');
    } else {
        $('.slider-product').slick({
            arrows: false,
            fade: true,
            autoplay: false,
            swipe: false,
        });
    }
}

runSlider();
var r;

$(window).resize(function () {
    clearTimeout(r);
    r = setTimeout(runSlider, 500);
});

$('a[data-slide]').click(function (e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-product').slick('slickGoTo', slideno - 1);
});

// Tab Link
//var hash = document.location.hash;
//var prefix = "tab_";
//if (hash) {
//    $('.nav-tabs a[href=' + hash.replace(prefix, "") + ']').tab('show');
//}
//// Change hash for page-reload
//$('.nav-tabs a').on('shown', function(e) {
//    window.location.hash = e.target.hash.replace("#", "#" + prefix);
//});
