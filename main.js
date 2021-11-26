function showTime(){
var date = new Date();
var hr = date.getHours(); //0-23
var min = date.getMinutes(); //0-59
var sec = date.getSeconds(); //0-59
var session = "AM";

if(hr == 0){
    hr = 12;
}

if(hr > 12){
    hr = hr - 12;
    session = "PM";
}

hr = (hr < 10) ? "0" + hr : hr ;
min = (min < 10) ? "0" + min : min ;
sec = (sec < 10) ? "0" + sec : sec ;


var time = hr + ":" + min + ":" + sec + " " + session;
// document.getElementById("timer").innerText = time;
// document.getElementById("timer").textContent = time;
document.getElementById("timer").innerHTML = time;
setTimeout(showTime,1000);

}

showTime();