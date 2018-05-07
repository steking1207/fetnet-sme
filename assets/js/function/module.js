$("#module-nav-mobile").load("module/nav-mobile.html");
$("#module-footer").load("module/footer.html");
$("#module-event-info").empty()
$("#module-event-info").load("module/event-info.html", function(){
  $("#module-event-info-office365").empty()
  if (window.location.pathname.split('/').pop() === "event-cloud-1.html"){
    $("#module-event-info-office365").load("module/event-info-office365.html", function(){
      $('#solution a').on('click', function () {
        var mapObject = {
          '優惠搶先報': 'type01', //event-cloud-1.html
          '好用才敢大聲': 'type02', //article-list.html
        };
        var currentMenuText = $.trim($('#menu .nav-link.active').eq(0).text());
        var currentSubmenuType = mapObject[currentMenuText];
        var activeItem = $('#module-menu-sub .submenu[data-type="' + currentSubmenuType + '"] .nav-item a.active').attr('href');

        // window.localStorage.setItem('activeItem', activeItem);
      });
    });
  }
});
$(".module-video-thumb").load("module/video-thumb.html");
$("#module-video-large").load("module/video-large.html");

//////// Sub menu ////////
$("#module-menu-sub").load("module/module-menu-sub.html", function () {
  $('#module-menu-sub .submenu .nav-item').on('click', function(){
    $('#module-menu-sub .submenu .nav-item a').removeClass('active')
    console.log('click the sub');
    // window.localStorage.removeItem('activeItem');
    var mapObject = {
      '了解輕鬆配': 0,
      '嚴選輕鬆配': 1,
      '優惠搶先報': 2, //event-cloud-1.html
      '好用才敢大聲': 3, //article-list.html
      '直營門市體驗': 4
    };
    var mapPathObject = {
      'type01': 'event-cloud-1.html',
      'type02': 'article-list.html'
    };
    var activeItem = $(this).children().attr('href');
    var currentMenuText = $.trim($('#menu .nav-link.active').eq(0).text());
    var currentMenuIndex = mapObject[currentMenuText];

    var targetType = $(this).parents('.submenu').data('type');

    // console.log('activeItem is', activeItem);
    // console.log('currentMenuIndex is', currentMenuIndex);
    // console.log('currentMenuText is', currentMenuText);
    // console.log('targetType is', targetType);

    if (currentMenuIndex === 0 || currentMenuIndex === 1 || currentMenuIndex === 4){
      window.location.href = mapPathObject[targetType] + activeItem;
    }

    if (currentMenuIndex === 2 && targetType === 'type01') {
      if (window.location.href.indexOf('event-cloud-1.html') === -1) {
        window.location.href = "event-cloud-1.html" + activeItem
      }
      return;
    } else if (currentMenuIndex === 2 && targetType === 'type02') {
      window.location.href = mapPathObject[targetType] + activeItem;
    }

    if (currentMenuIndex === 3 && targetType === 'type02') {
      return;
    } else if(currentMenuIndex === 3 && targetType === 'type01'){
      window.location.href = mapPathObject[targetType] + activeItem;
    }

  });
  $('#module-menu-sub .submenu').mouseleave(function () {
    $(this).removeClass('slideDown');
  });
});


//////// KV banner ////////
$('#kv .kv-but a').on('click', function () {
  var mapObject = {
    '優惠搶先報': 'type01', //event-cloud-1.html
    '好用才敢大聲': 'type02' //article-list.html
  };
  var currentMenuText = $.trim($('#menu .nav-link.active').eq(0).text());
  var currentSubmenuType = mapObject[currentMenuText];
  var activeItem = $('#module-menu-sub .submenu[data-type="' + currentSubmenuType + '"] .nav-item a.active').attr('href');

  // window.localStorage.setItem('activeItem', activeItem);
});
