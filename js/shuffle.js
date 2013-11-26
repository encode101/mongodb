// JavaScript Document

jQuery(function($){
	//	Cache container
	var $container = $('#container');
	
	//	Initialize isotope	
	$container.isotope({ filter: '*' });
	
	//	Filter items when filter link is clicked
	
	$('#mainMenu a').click(function(){
		var selector = $(this).attr('data-filter');
		$container.isotope({ filter: selector });	  
		$('#mainMenu').find("li").removeClass('active');	//	Toggle active class to pills
		$(this).parent().addClass("active");
		return false;
	});
	
});