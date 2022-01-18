$('.collepse-main .collepse-item .item-head').click(

	function(){
		var cam = $(this).closest('.collepse-item')

		cam.toggleClass('active')
		cam.siblings().removeClass('active').find('.item-collepse').slideUp().siblings('.item-head').find('.fa-plus').show().siblings('.fa-minus').hide();

		if( cam.hasClass('active') ) {

			cam.find('.item-collepse').slideDown()
			cam.find('.fa-minus').show().siblings('.fa-plus').hide();

		}
		else {

			cam.find('.item-collepse').slideUp().siblings('.item-head').find('.fa-plus').show().siblings('.fa-minus').hide();
		}
	}

)