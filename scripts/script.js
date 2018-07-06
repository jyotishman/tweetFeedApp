var Module = (function() {
  function bindFunctions() {
    $('.nav-tabs > li > a').click(function(event) {
      event.preventDefault(); //stop browser to take action for clicked anchor

      //get displaying tab content jQuery selector
      var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');

      //find actived navigation and remove 'active' css
      var actived_nav = $('.nav-tabs > li.active');
      actived_nav.removeClass('active');

      //add 'active' css into clicked navigation
      $(this).parents('li').addClass('active');

      //hide displaying tab content
      $(active_tab_selector).removeClass('active');
      $(active_tab_selector).addClass('hide');

      //show target tab content
      var target_tab_selector = $(this).attr('href');
      $(target_tab_selector).removeClass('hide');
      $(target_tab_selector).addClass('active');
    });
  }

  function fetchTwitterFeeds() {
    var data = [
      {
       "name": "Rehan",
       "location": "Pune",
       "tweet": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.",       
       "img": "assets/img/user-img1.jpg",
       "duration": '2s',
       "username": '@rehan'
      },
      {
        "name": "Sameer",
        "location": "Pune",
        "tweet": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.",       
        "img": "assets/img/user-img1.jpg",
        "duration": '10m', 
        "username": '@Sameer'
      },
      {
        "name": "Jyotishman",
        "location": "Assam",
        "tweet": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore",
        "img": "assets/img/user-img1.jpg",
        "duration": '10m', 
        "username": '@jyotish'
      }
    ]
    var htmlText = '';

    for ( var key in data ) {
      htmlText += '<div class="tweet-wrapper">';
      htmlText += '<div class="img-wraper">';
      htmlText += '<img src="'+ data[key].img +'">';
      htmlText += '</div><div class="tweet-details-wrap">';
      htmlText += '<h1 class="p-name">' + data[key].name + '<span>'+ data[key].username +'</span><span>'+  data[key].duration +'</span></h1>';
      htmlText += '<p class="tweet-desc">' + data[key].tweet + '</p>';
      htmlText += '<ul class="list-inline tweet-action-btn-wrap">';
      htmlText += '<li><i class="fa fa-reply"></i></li>';
      htmlText += '<li><i class="fa fa-star"></i></li>';
      htmlText += '<li><i class="fa fa-refresh"></i>20</li>';
      htmlText += '<li><i class="fa fa-ellipsis-h"></i></li>';
      htmlText += '</ul>';
      htmlText += '</div>';
      htmlText += '</div>';
    }

    $('#tab1').append(htmlText); 
  }

  function init() {
    bindFunctions();
    fetchTwitterFeeds();
  }

  return {
    init: init
  };
}());

$(document).ready(function() {
  Module.init();
});