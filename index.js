
let weather = {
    "apiKey": "eda05757228968d11b4d33249ae0d82c",
    fetchWeather: function () {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Boston&units=metric&appid=eda05757228968d11b4d33249ae0d82c')
        .then ((response) => response.json ())
        .then((data) => console.log(data));
    },
    
};

