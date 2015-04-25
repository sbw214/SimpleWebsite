 // Javascript document
 var Screen = {
	 	init: function() {  // init method calling 2 functions
	 		Screen.bindEvents(); 
	 		FlowChart.init();
	 	},

	 	bindEvents: function() {
	 		console.log('its working now'); //checking if web works
	 	}
	 };


	 FlowChart = {
	 	total : '',  // better organzation of the code - this variable for total images

	 	init:function(){
	 		FlowChart.total = $('#flowchart img').length; // set total images length

	 		FlowChart.creatBullets(); // method for create the bullets dinamically
	 		FlowChart.bindEvents(); // method for bullet events
	 		$('.image-1').show(); // show the first image
	 	},

	 	creatBullets: function() {
	 		$('#chartmenu ul').empty(); // empty the list of bullets

	 		// start the loop through the images
	 		$('#flowchart img').each(function(index,el){
	 			myindex = Math.round(index+1); // set index plus  cauze we dont want zero as index
	 			$(el).addClass('image-'+myindex); // add claas with index for each image inside the loop
	 			$('#chartmenu ul').append('<li class="img-'+myindex+'"><a href="#">o</a></li>'); // append the bullets inside the list
	 		});
	 	},

	 	bindEvents: function() {
	 		// bind the click for each bullet
	 		$('#chartmenu a').click(function(evt){
	 			// the click
	 			myimgclass = $(this).parent()[0].className; // find the class and store in this var
	 			myimgindex = myimgclass.split('-').reverse()[0]; // slipt the class to look for the index 


	 			$('#flowchart img').hide(); // hide all images

	 			$('.image-'+myimgindex).show(); // show the desired image

	 			// remove default behavior for the anchor element <a>
	 			evt.stopPropagation();
	 			evt.preventDefault();

	 		});
	 	}
	 };                     








// call init method for screen when document is ready
$(document).ready(function(){
	Screen.init();
});
	 
