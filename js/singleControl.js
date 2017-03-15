$(document).ready(function(){
	// top image load
	var imgName = $('.alignright').attr('src');
	$('.single_topImage').css('background-image', 'url('+imgName+')' );
	// context image margin
	$('.single_article_content p img').parent().addClass('img_p');
	// window scroll
	$(window).scroll(function(){
		conWidCheck()
	})
	$(window).resize(function(){
		conWidCheck();
	});
	function conWidCheck(){
		var conWidth = $('#single_container').css('width').replace('px', ''),
		scTop = $(window).scrollTop();
		if (conWidth >= 940) {
			if (scTop < 112) {
				$('#single_header').css('position', 'relative')
				$('#single_content').css('padding-top', '0')
				$('.single_topMenu').css('margin-top', '0')
				$('.single_topImage').css('top', '0')
			} else {
				$('#single_header').css('position', 'fixed')
				$('#single_content').css('padding-top', '112px')
				$('.single_topImage').css('top', '-112px')
				$('.single_topMenu').css('margin-top', '-112px')
			}
		}
	};
});