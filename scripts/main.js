$(document).ready(function(){
	function makeDiv() {
		for (var i = 0; i < 1600; i++) {
			var $div = $('<div class="grid"></div>');
			$('#mainContain').append($div);
			};
		};
	
	makeDiv();

	$('.grid').hover(
		function(){
			$(this).addClass("hover");
		},
		function(){
			$(this).removeClass("hover");
		});
});


