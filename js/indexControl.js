$(window).load(function(){
	// check container width
	var columnNum = 2;
	function conWidCheck(){
		var conWidth = $('#container').css('width').replace('px', '');
		if (conWidth < 960) {
			columnNum = 2;
		} else if (conWidth <= 1180) {
			columnNum = 3;
		} else {
			columnNum = 4;
		}
		articleName();
	}
	conWidCheck();
	$(window).resize(function(){
		conWidCheck();
	});
	// mark article name
	function articleName(){
		for (var i = 0; i < $("#index_content .home_article").length; i++) {
			$("#index_content .home_article").eq(i).addClass("article_"+i);
		}
		if (columnNum > 2){
			posValue();
		} else {
			winWidth()
		}
	}
	// article position on a labtop
	function posValue(){
		var topArray = [],
		leftArray = [0, 320, 640, 960];
		for (var i = 0; i < $("#index_content .home_article").length; i++) {
			if (i < columnNum) {
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
		$("#index_content").css("height", big+"px");
	}
	// window width cal
	function winWidth(){
		var halfWin = ($(window).width()/2)-8;
		posInit(halfWin)
	}
	// article position on a mobile
	function posInit(halfWin){
		var topArray = [],
		leftArray = [0, halfWin];
		for (var i = 0; i < $("#index_content .home_article").length; i++) {
			if (i < columnNum) {
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
		$("#index_content").css("height", big+"px");
	}
});