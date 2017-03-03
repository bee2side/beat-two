$(document).ready(function(){
	var articleNum = $("#index_content .home_article").length,
	columnNum = 1;
	//check container width
	function conWidthCheck(){
		var conWidth = $('#container').css('width').replace('px', '');
		if (conWidth < 960) {
			columnNum = 1;
		} else if (conWidth <= 1180) {
			columnNum = 3;
		} else {
			columnNum = 4;
		}

		//console.log(columnNum);
	};
	conWidthCheck();
	$(window).resize(function() {
		conWidthCheck();
		heightValue();
	});
	// mark article name
	function articleName(){
		for (var i = 0; i < articleNum; i++) {
			$("#index_content .home_article").eq(i).addClass("article_"+i);
		}
	}
	articleName();
	// article name
	var topArray = [],
	leftArray = [0, 320, 640, 960]
	function heightValue(){
		for (var i = 0; i < articleNum; i++) {
			if (i<columnNum) {
				$(".article_"+i).css("top", "0");
				$(".article_"+i).css("left", leftArray[i]+"px");
				topArray[i] = Number($(".article_"+i).css("height").replace("px", ""));
			} else {
				var small = Math.min.apply(null, topArray),
				smallPos = topArray.indexOf(small);
				$(".article_"+i).css("top", small+"px");
				$(".article_"+i).css("left", leftArray[smallPos]+"px");
				topArray[smallPos] = small + Number($(".article_"+i).css("height").replace("px", ""));
			}
		}
		var big = Math.max.apply(null, topArray);
		$("#index_content").css("height", big);
	}
	heightValue();
	/*function contentHeight(){
		var big = Math.max.apply(null, topArray);
		if (columnNum > 1 ) {
			$("#index_content").css("height", big);
		} else {
			$("#index_content").css("height", big);
		}
	}*/
});