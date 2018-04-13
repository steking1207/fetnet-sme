jQuery(".kv-slogan-1").fitText(1, { minFontSize: '20px', maxFontSize: '65px' });
jQuery(".kv-slogan-2").fitText(1.2, { minFontSize: '16px', maxFontSize: '24px' });
jQuery(".text-tab").fitText(1.2, { minFontSize: '16px', maxFontSize: '24px' });

$('.slider-kv').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
});

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
});

$(document).ready(function() {
//    $(".table-data").tableHeadFixer({"head" : true});
//    $(".table-data").tableHeadFixer({"head" : true, "left" : 1});
//    $(".table-data-2").tableHeadFixer({"head" : true, "left" : 2});
//    $(".table-data-left2").tableHeadFixer({"head" : false, "left" : 2});
});

function runSlider() {
    if ($(window).width() > 800 ) {
        $('.slider-product').unslick({});
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

$(window).resize(function() {
    clearTimeout(r);
    r = setTimeout(runSlider, 500);
});

$('a[data-slide]').click(function(e) {
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
