$(document).ready(function(){
	$(".more_btn").click(function(){
		$(this).toggleClass("on");
		$(".more_menu").toggleClass("on")
		$(".topTitle").toggleClass("off")
	})
});