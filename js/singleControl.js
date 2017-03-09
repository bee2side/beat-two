$(document).ready(function(){
	// top image load
	var imgName = $(".alignright").attr('src');
	$(".single_topImage").css("background-image", "url("+imgName+")" );
	// context image margin
	$(".single_article_content p img").parent().addClass('img_p');
});