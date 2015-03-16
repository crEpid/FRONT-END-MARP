;(function(){

	
			$('#ToggleMenu, .menu-close').on('click', function(){
				$('#ToggleMenu').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#MenuWatch').toggleClass('menu-open');
			});


})(jQuery)