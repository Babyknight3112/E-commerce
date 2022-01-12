
	$(document).ready(function() {


		$('.ndm-khoi').slideUp();
	
		//click vào thẻ h5
		$('.m-khoi h5').click(function(event) {
	
			console.log('clicked');
			$(this).next().next().slideToggle();
			});
	
	});
	


	