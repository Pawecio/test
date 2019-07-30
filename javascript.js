function dropDownFun() {
    document.getElementById("myDropdown").classList.toggle("show");
  };
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

    let city_one = document.querySelector('.city_one');
    let city_two = document.querySelector('.city_two');
    let city_three = document.querySelector('.city_three');
    let btnDropDown = document.querySelector('.dropbtn');
    let date = document.querySelector('.date');

    let days = [ " " , "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let temper = document.getElementById('temperature');
    let precip = document.querySelector('.precipitation');
    let humid = document.querySelector('.humidity');
    let windInfo = document.querySelector('.wind');
    let pollen = document.querySelector('.pollen_count');
    let skyImage = document.querySelector('.type_sky');
    let srcImage = document.getElementById('sky_image');

    let itemToday = document.querySelector('.today');
    let itemFirstDay = document.querySelector('.first_day');
    let itemSecondDay = document.querySelector('.second_day');
    let itemThirdDay = document.querySelector('.third_day');
    //let itemFourthDay = document.querySelector('.fourth_day');

    let imgSrcToday = document.getElementById('img_today');
    let imgSrcFirstDay = document.getElementById('img_first_day');
    let imgSrcSecondDay = document.getElementById('img_second_day');
    let imgSrcThirdDay = document.getElementById('img_third_day');
    //let imgSrcFourthDay = document.getElementById('img_fourth_day');

    let tempToday = document.querySelector('.temp_today');
    let tempFirstDay = document.querySelector('.temp_first_day');
    let tempSecondDay = document.querySelector('.temp_second_day');
    let tempThirdDay = document.querySelector('.temp_third_day');
    //let tempFourthDay = document.querySelector('.temp_fourth_day');

    let pollenToday = document.querySelector('.pollen_today');
    let pollenFirstDay = document.querySelector('.pollen_first_day');
    let pollenSecondDay = document.querySelector('.pollen_second_day');
    let pollenThirdDay = document.querySelector('.pollen_third_day');
    //let pollenFourthDay = document.querySelector('.pollen_fourth_day');

function addZero(i) {
    return (i < 10)? '0'+i : i;
};
function time() {
    let currentDate = new Date();
    let timer = currentDate.getFullYear() + "-" + addZero((currentDate.getMonth()+1)) + "-" + addZero(currentDate.getDate())
    return timer;
};
let numDate = time();

(function() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://dev-weather-api.azurewebsites.net/api/city', false);
    xhr.addEventListener('load', function() {
        if (this.status === 200) {
            const citys = JSON.parse(this.responseText);
            
            btnDropDown.innerHTML = citys[0].name;
            city_one.addEventListener('click', function(){
            btnDropDown.innerHTML = citys[0].name;                 
            });
            city_two.addEventListener('click', function(){
            btnDropDown.innerHTML = citys[1].name;                   
            });
            city_three.addEventListener('click', function(){
            btnDropDown.innerHTML = citys[2].name;
            });
            city_one.innerHTML = citys[0].name;
            city_two.innerHTML = citys[1].name;
            city_three.innerHTML = citys[2].name;

        }else{
            console.log('Connection status ' + this.status);
        }
    });
        xhr.addEventListener('error', function (e) {
           console.log('Connection error');
        });
        xhr.send();
})();
cityId = 1;
numberDay = 0;
uploadDataWeather(numberDay)
    city_one.addEventListener('click', function(){
        if (btnDropDown.innerHTML === "Katowice") {
            cityId = 1;
            uploadDataWeather(numberDay);
        }
    });
    city_two.addEventListener('click', function(){
        if (btnDropDown.innerHTML === "London") {
            cityId = 2;
            uploadDataWeather(numberDay);
        }
    });
    city_three.addEventListener('click', function(){
        if (btnDropDown.innerHTML === "Sosnowiec") {
            cityId = 3;
            uploadDataWeather(numberDay);
        }
    });

function setDate() {
    let today = new Date();
    let weekDay = today.getDay();
    let month = today.getMonth();
    let day = today.getDate();
function suffixes(day) {
    if (day === 1) {
        return day + "st";
    }else if (day === 2) {
        return day + "nd";
    }else if (day === 3) {
        return day + "rd";
    }else{
        return day + "th";
    }
};
    function setNameDay(day) {
        let nameToday = "Today";
        itemToday.innerHTML = nameToday;
        if (day === 1) {
            itemFirstDay.innerHTML = days[day + 1];
            itemSecondDay.innerHTML = days[day + 2];
            itemThirdDay.innerHTML = days[day + 3];
            //itemFourthDay.innerHTML = days[day + 4];
        }else if (day === 2) {
            itemFirstDay.innerHTML = days[day + 1];
            itemSecondDay.innerHTML = days[day + 2];
            itemThirdDay.innerHTML = days[day + 3];
            //itemFourthDay.innerHTML = days[day + 4];
        }else if (day === 3) {
            itemFirstDay.innerHTML = days[day + 1];
            itemSecondDay.innerHTML = days[day + 2];
            itemThirdDay.innerHTML = days[day + 3];
            //itemFourthDay.innerHTML = days[day + 4];
        }else if (day === 4) {
            itemFirstDay.innerHTML = days[day + 1];
            itemSecondDay.innerHTML = days[day + 2];
            itemThirdDay.innerHTML = days[day + 3];
            //itemFourthDay.innerHTML = days[day - 3];
        }else if (day === 5) {
            itemFirstDay.innerHTML = days[day + 1];
            itemSecondDay.innerHTML = days[day + 2];
            itemThirdDay.innerHTML = days[day - 4];
            //itemFourthDay.innerHTML = days[day - 3];
        }else if (day === 6) {
            itemFirstDay.innerHTML = days[day + 1];
            itemSecondDay.innerHTML = days[day - 5];
            itemThirdDay.innerHTML = days[day - 4];
            //itemFourthDay.innerHTML = days[day - 3];
        }else if (day === 7) {
            itemFirstDay.innerHTML = days[day - 6];
            itemSecondDay.innerHTML = days[day - 5];
            itemThirdDay.innerHTML = days[day - 4];
            //itemFourthDay.innerHTML = days[day - 3];
        }
    };
    setNameDay(weekDay);
    return days[weekDay] + ", "  + months[month] + " " + suffixes(day);
};
date.innerHTML = setDate();

function pathToWeather(cityId, numDate) {
    let path = 'http://dev-weather-api.azurewebsites.net/api/city/' + cityId + '/weather?date=' + numDate;
    return path ;
};
function uploadDataWeather(day) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', pathToWeather(cityId, numDate) , true);

    xhr.addEventListener('load', function() {
        if (this.status === 200) {
            const weather = JSON.parse(this.responseText);

            if (weather[day].type === 'RainAndCloudy') {
                skyImage.innerHTML = 'Cloudy and rainy';
                srcImage.src='Assets/rain_s_cloudy.png';
                imgSrcToday.src ='Assets/rain_s_cloudy.png';
            }else if (weather[day].type === 'RainLight') {
                skyImage.innerHTML = 'Rainy';
                srcImage.src='Assets/rain_light.png';
                imgSrcToday.src ='Assets/rain_light.png';
            }else if (weather[day].type === 'Cloudy') {
                skyImage.innerHTML = 'Cloudy';
                srcImage.src='Assets/cloudy.png';
                imgSrcToday.src ='Assets/cloudy.png';
            }else if (weather[day].type === 'Sunny') {
                skyImage.innerHTML = 'Sunny';
                srcImage.src='Assets/sunny.png';
                imgSrcToday.src ='Assets/sunny.png';
            }else if (weather[day].type === 'PartlyCloudy') {
                skyImage.innerHTML = 'Partly cloudy';
                srcImage.src='Assets/partly_cloudy.png';
                imgSrcToday.src ='Assets/partly_cloudy.png';
            };
            temper.innerHTML = weather[day].temperature;
            precip.innerHTML = weather[day].precipitation + "%";
            humid.innerHTML = weather[day].humidity + "%";
            windInfo.innerHTML = weather[day].windInfo.speed + " mph " + weather[day].windInfo.direction;
            pollen.innerHTML = weather[day].pollenCount;

            function setSky(numDay, whichDay) {
                if (weather[numDay].type === 'RainAndCloudy') {
                    whichDay.src = 'Assets/rain_s_cloudy.png';
                }else if (weather[numDay].type === 'RainLight') {
                    whichDay.src = 'Assets/rain_light.png';
                }else if (weather[numDay].type === 'Cloudy') {
                    whichDay.src = 'Assets/cloudy.png';
                }else if (weather[numDay].type === 'Sunny') {
                    whichDay.src = 'Assets/sunny.png';
                }else if (weather[numDay].type === 'PartlyCloudy') {
                    whichDay.src = 'Assets/partly_cloudy.png';
                }
            };
            setSky(1 , imgSrcFirstDay);
            setSky(2 , imgSrcSecondDay);
            setSky(3 , imgSrcThirdDay);
            //setSky(4 , imgSrcFourthDay);

            tempToday.innerHTML = weather[0].temperature;
            tempFirstDay.innerHTML = weather[1].temperature;
            tempSecondDay.innerHTML = weather[2].temperature;
            tempThirdDay.innerHTML = weather[3].temperature;
            //tempFourthDay.innerHTML = weather[4].temperature;
            pollenToday.innerHTML = weather[0].pollenCount;
            pollenFirstDay.innerHTML = weather[1].pollenCount;
            pollenSecondDay.innerHTML = weather[2].pollenCount;
            pollenThirdDay.innerHTML = weather[3].pollenCount;
            //pollenFourthDay.innerHTML = weather[4].pollenCount;

        }else{
            console.log('Connection status ' + this.status);
        }
    });
        xhr.addEventListener('error', function (e) {
           console.log('Connection error');
        });
        xhr.send();
};



