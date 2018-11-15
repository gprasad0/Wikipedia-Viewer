$(document).ready(function(){
$("#value").on("keypress",function(event){
	if(event.which === 13){
		let value = $(this).val();
        console.log(value);
        $(this).val("");
        let url1 = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+value+"&format=json&callback=?";
//&callback=?  =  sending a initial request, the wikipedia does not know the request, so it sends another request and then you send a second request callback 
   $.ajax(url1,{
   	dataType:'json',
   	method:"GET",
   	
   	success:function(response){

   console.log(response);

   $("#content").html("");
      for(let j=0;j<response[1].length;j++){
      	$("#outputUl").append("<li class='outputLi'>"+ response[1][j] + ":"+ response[2][j] + "</li>");
      }
      
 
   

   	},

   	error:function(request,errorType,errorMessage){
   		alert("something wrong with the api");
   	}
   });
      }
});
});