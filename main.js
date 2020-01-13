
 $(document).ready(function() { 
 var item = ''
 $('.item').hover(function(){
 item = $(this).find('.name').text() //get the value
 $(this).find('.name').text('Click me')
 //$(this).find('.display').css("opacity", "0")


 }
	 , function() { 
	            $(this).find('.name').text(item)
               // $(this).find('.display').css("opacity", "1")
				

				
            }); 
 });
function navigate() {
  var x = document.getElementById("navbar"); //get the id of the element
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}