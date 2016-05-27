'use strict';

$(document).ready(function(){
	
	$('.child.submenu').siblings('a').addClass('after');
	
	
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
	
	
});