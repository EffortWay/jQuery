$('.p').hide();
$('.div-header .img-minus').hide();

function clickButton() {
	
	$('.p').slideToggle();
	$('.div-header .img-plus').toggle();
	$('.div-header .img-minus').show();

}



$('.div-header').click(clickButton);