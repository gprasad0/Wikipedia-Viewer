if (navigator.geolocation){
     navigator.geolocation.getCurrentPosition(function(position) {

           let lat = position.coords.latitude;
           let long = position.coords.longitude; 


$(document).ready(function(){

           let url ='http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=ab5762383de7f3971fc6dd9d42c9967a';

        //    $.getJSON(url,function(data){
        
         // let city = data.name;
         // let kelvin = data.main.temp;
         // let country = data.sys.country;
         // let temp = Math.round(kelvin-273.15);
         // let climate = data.weather[0].description;

        //    document.getElementById("city").innerHTML =city + "," + country;
        //    document.getElementById("temp").innerHTML = temp +"&deg;C";
        //    document.getElementById("climate").innerHTML = climate;
           
        //          

           $.ajax(url,{
            dataType:"json",
            method:"GET",

            success:function(data){
                 let city = data.name;
                 let kelvin = data.main.temp;
                 let country = data.sys.country;
                 let temp = Math.round(kelvin-273.15);
                 let climate = data.weather[0].description;

                 document.getElementById("city").innerHTML =city + "," + country;
                 document.getElementById("temp").innerHTML = temp +"&deg;C";
                 document.getElementById("climate").innerHTML = climate;
            }
           });
      });

  });

}

else{
    console.log("Not able to load the weather information");
  }
