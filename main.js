let url = "http://api.openweathermap.org/data/2.5/weather?q=Seoul&APPID=d4fbaaf488eb7e602bb638451e84731e";

$("#weather_info .load_img").show();


$.getJSON(url,function(data){
    let sys = data.sys;
    let city = data.name;
    let weather =  data.weather;
    let main = data.main;

    let wmain = weather[0].main;
    let w_id = weather[0].id;
    let icon = weather[0].icon;
    let country = sys.country;
    let temp = main.temp;
    let temp_min = main.temp_min;
    let temp_max = main.temp_max;

    let icon_url = "http://openweathermap.org/img/w01n" + icon;

    $('#weather_info > .city').html(city + "/" + country);			
    $('#weather_info  .icon').html("<img src='" + icon + ".png'>");
    $('#weather_info .w_id').html(wmain);
    $('#weather_info .temp_min').html(parseInt(temp_min-273.15) + '&deg;' + ' min');
    $('#weather_info .temp_max').html( parseInt(temp_max-273.15) + '&deg;' + ' max');
    $('#weather_info  .temp').html(parseInt(temp-273.15) + '&deg;');

    $("#weather_info .load_img").hide();
});

    // .fail(function(){
    //     alert("loading error");
    // });