$(document).ready(function(){
	function makeDiv() {
		for (var i = 0; i < 1600; i++) {
			var $div = $('<div class="grid"></div>');
			$('#mainContain').append($div);
			};
		};
	
	makeDiv();

	function sketch() {
		$('.grid').mouseenter(function(){
			$(this).addClass("hover");
		});
	};

	sketch();


	$('button').click(function(){
		$('.grid').remove();
		var newGrid = prompt("New sketch grid size?")
		function makeNewDiv() {
		for (var i = 0; i < (newGrid*newGrid); i++) {
			var $div = $('<div class="grid"></div>');
			$('#mainContain').append($div);
			};
		$('.grid').height(400/newGrid).width(400/newGrid);
		};
	
	makeNewDiv();
	sketch();
	});
});


