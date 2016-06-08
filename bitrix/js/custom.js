'use strict';

$(document).ready(function(){
	
	$('.child.submenu').siblings('a').addClass('after');
	
	//main slider
	
//	$('.item.fancy').on('click', function() {
//		var attr_name = $(this).attr('rel');
//		var attr_length = $(this).attr('rel', attr_name).parents('.slides.slides-fancy').find('li').length;
//		$(".item.fancy").fancybox({
//			maxWidth: '800',
//			scrolling: 'no',
//			index: 1,
//			padding: 0,
//			tpl: {
//				wrap: '<div class="fancybox-wrap" tabIndex="1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"><div class="counter"><div class="count_elem"><span class="current-slide"></span><span class="all"></span></div></div></div></div></div></div>',
//			},
//			afterShow: function () {
//				$('.all').text(attr_length);            
//				$('.current-slide').text($.fancybox.current.index + 1);
//
//			},
//			helpers: {
//				overlay: {
//					locked: false
//				}
//			}
//		});
//	});
	
	
	
	
	$('.item.fancy').on('click', function() {
		var attr_name = $(this).attr('rel');
		var attr_length = $(this).attr('rel', attr_name).parents('.slides.slides-fancy').find('li').length;
		$(".item.fancy").fancybox({
			maxWidth: '800',
//			openEffect: 'elastic',
//			closeEffect: 'elastic',
			scrolling: 'no',
			index: 1,
			padding: 0,
			tpl: {
				wrap: '<div class="fancybox-wrap" tabIndex="1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"><div class="counter"><div class="count_elem"><span class="current-slide"></span><span class="all"></span></div></div></div></div></div></div>',
			},
			afterShow: function () {
				$('.all').text(attr_length);            
				$('.current-slide').text($.fancybox.current.index + 1);

			},
			helpers: {
				overlay: {
					locked: false
				}
			}
		});
	});
	
	// scrollto (плавная прокрутка по якорю без плагина)
	
	$('a.scrollto').click(function () {
//		e.preventDefault(); для отображения id в адресную строку
		var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 300);
	});
	
	
$('.like-dislike-block > a').click(function (e) {
	e.preventDefault();
	$(this).toggleClass('added');
});
	
	// faq page 
	
$('.faq.list .item .q').hover(function(){
	$('.faq_section.item').removeClass('hovered');
	$(this).parent('.item').addClass('hovered');
},function(){
	$(this).parent('.item').removeClass('hovered');
});
	
	
	
	$('#tabSet').scrollTabs({
      scroll_distance: 350,
      scroll_duration: 350,
      left_arrow_size: 20,
      right_arrow_size: 20,
      click_callback: function(e){
        var val = $(this).attr('rel');
        if(val){
          window.location.href = val;
        }
      }
    });
	

	
	
	
	
	
	
	
	
});