$(document).ready(function(){
	$(".red, .green, .blue").mouseenter(function(){
        $(".red, .green, .blue").css({"margin-left": "0"});
    });
	$(".red, .green, .blue").mouseleave(function(){
        $(".red, .green, .blue").css({"margin-left": "-3%"});
    });
    $(".green").click(function(){
        $("body").css({"background-color": "#5bff6c"});
    });
	$(".blue").click(function(){
        $("body").css({"background-color": "#38f5fe"});
    });
	$(".red").click(function(){
        $("body").css({"background-color": "#fc2087"});
    });
});
