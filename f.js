$(document).ready(function(){ 
		
	var color = $('.selected').css('background-color');
	var $canvas =$('canvas');
	var context= $('canvas')[0].getContext('2d');
	var lastEvent;
	var mousedown=false;
	
	$(".controls").on("click","li",function(){
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
		color=$(this).css('background-color');
	});
	
	$('#revealColorSelect').click(function(){
		changeColor();
		$('#colorSelect').toggle();
	});
	
		
	
	function changeColor(){
		var r = $('#red').val();
		var g = $('#green').val();
		var b = $('#blue').val();
		$('#newColor').css("background-color","rgb("+r+","+g+","+b+")");
	}
	
	$("input[type=range]").change(changeColor);

	$('#addNewColor').click(function(){
		var $newColor =$("<li></li>");
		$newColor.css("background-color",$('#newColor').css("background-color"));
		$(".controls ul").append($newColor);
	
	});
	
	$canvas.mousedown(function(e){
		lastEvent= e;
		mousedown=true;
	}).mousemove(function(e){
	
	if(mousedown){
	
	context.beginPath();
	context.moveTo(lastEvent.offsetX,lastEvent.offsetY);
	context.lineTo(e.offsetX,e.offsetY);
	context.strokeStyle=color;
	context.stroke();
	lastEvent=e;}

	}).mouseup(function(){
		mousedown=false;
	}).mouseleave(function(){
		$canvas.mouseup();
	});
	 
	});
