(function($){
	$.fn.tabMenu = function(ratio){
		var cls = this.attr("class");
		$("."+cls).hide();
		this.show();
	};
	$.fn.rwdType = function(){
		//this.size = $(this).width();
		return this.each(function(i){
			var w = parseInt($(this).width()/2);
			var h = parseInt($(this).height()/2);
			var f = parseInt(parseFloat($(this).css("font-size"))/2); 
			$(this).stop().animate({
				"width":w+"px", "height":h+"px", "font-size":f+"px"
			},500);
		});
	}
})($);