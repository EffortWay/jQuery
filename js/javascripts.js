$('.collepse-main .collepse-item .item-head').click(

	function(){
		var cam = $(this).closest('.collepse-item')

		cam.toggleClass('active')
		cam.siblings().removeClass('active').find('.item-collepse').slideUp()
		if( cam.hasClass('active') ) {
			cam.find('.item-collepse').slideDown()
		}
		else {
			cam.find('.item-collepse').slideUp()
		}
	}

)