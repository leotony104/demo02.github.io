var data = {
	"title" : {
		"home": "title_01.png",
		"health": "title_03.jpg",
		"comment": "title_05.png",
		"service": "title_06.jpg",
		"mem": "title_07.jpg"
	}
},
server = {
	"title" : "/ezfiles/309/1309/img/7353/"
}

// function getId(url) {
//     var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
//     var match = url.match(regExp);

//     if (match && match[2].length == 11) {
//         return match[2];
//     } else {
//         return 'error';
//     }
// }

// var videoId = getId('http://www.youtube.com/watch?v=zbYf5_S7oJo');
// var iframeMarkup = '<iframe width="560" height="315" src="//www.youtube.com/embed/' 
//     + videoId + '" frameborder="0" allowfullscreen></iframe>';

$(function(){
	var page_2 = $('.breadcrumb li').eq(2).children('a').text();

	if($('body').hasClass('page_mobilehome')){
		$('.inner_page_title').css('background-image', 'url('+server.title + data.title.home +')');
	}
	else if($('.module-cgmenu').length){
		$('.main').addClass('product_page');
		$('.inner_page_title').css('background-image', 'url('+server.title + data.title.home +')');
	}
	else if($('.module-memmenu').length){
		$('.mcol').prepend('<div></div>');
		$('.main').addClass('product_page mem_page');

		//logout link
    $('.module-memmenu .list-group.memmenu').append('<li class="list-group-item mecmemcouponlist"><a href="/bin/index.php?Plugin=mobile&Action=mobilelogout">登出</a></li>');
	}
	else if(!$('.inner_page_title').length){
		if(page_2.indexOf('品牌') != -1){
			$('.main').addClass('edit_page about_page');
		}
		else if(page_2.indexOf('Q') != -1){
			$('.main').addClass('edit_page qa_page');
		}
		else{
			$('.main').addClass('edit_page');
		}
	}
	else if(page_2.indexOf('健康') != -1){
		$('.main').addClass('common_page health_page');
		$('.inner_page_title').css('background-image', 'url('+server.title + data.title.health +')');
	}
	else if(page_2.indexOf('評價') != -1){
		$('.main').addClass('common_page comment_page');
		$('.inner_page_title').css('background-image', 'url('+server.title + data.title.comment +')');
		$('.module-ptlist a').removeAttr('href');
	}
	else if(page_2.indexOf('客戶') != -1){
		$('.main').addClass('common_page service_page');
		$('.inner_page_title').css('background-image', 'url('+server.title + data.title.service +')');
	}
	else{
		$('.main').addClass('common_page');
		$('.inner_page_title').css('background-image', 'url('+server.title + data.title.home +')');
	}

	//滑動到頂部
	$(".back_top").click(function(){
		jQuery("html,body").animate({
			scrollTop:0
		},500);
	});

	//header icon controll the menu slide
  $('.header_menu_icon').click(function(event) {
    if($('.header_menu').css('display') == 'none'){
      $('html, body').css('overflow', 'hidden');
      $('.header_menu_icon .icon_btn').addClass('open');
    }
    else{
      $('html, body').removeAttr('style');
      $('.header_menu_icon .icon_btn').removeClass('open');
    }
    $('.header_menu').slideToggle();
  });
})

$(window).resize(function(event) {
  if($(window).width() > 767){
    $('.header_menu ul').removeAttr('style');
    $('.header_menu').removeAttr('style');
    $('.header_menu_icon .icon_btn').removeClass('open');
  }
});