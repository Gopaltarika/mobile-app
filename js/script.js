$(window).on("load resize scroll",function(e){
if ( $(window).width() > 600 ) {
	$(".app").hide();
}
else {
	$(".app").show();
}
});