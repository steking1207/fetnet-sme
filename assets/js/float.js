// JavaScript Document

//右側廣告
$(function(){
	$(window).scroll(function(){
		var NOW = $(window).scrollTop(); //抓取目前捲軸的所在座標
		$("#ad_box").stop(true,false).animate({top:NOW+220},1500,"easeOutBack");
		$("#ad_box_m").stop(true,false).animate({top:NOW+220},1500,"easeOutBack");
	});

	$(".close_ad").click(function(){
		$("#ad_box").hide();
	})
	$(".close_ad_m").click(function(){
		$("#ad_box_m").hide();
	})
})
