'use strict'
window.onload=function(){
	var designWidth=750;
	function fontSize (){
		var CW = document.documentElement.clientWidth;
		var size = CW/designWidth*100+"px";
		document.querySelector("html").style.fontSize=size;
	}
	fontSize();
	window.onresize=fontSize;
	
}