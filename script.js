function dateAndTime(){
    let date = new Date();
    let hr, min = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        sec = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds(),
        ampm = (date.getHours() >= 12) ? 'PM' : 'AM';

    if (date.getHours() == 0){
        hr = 12
    } else if(date.getHours()>12){
        hr = date.getHours() - 12;
    } else{
        hr = date.getHours();
    }
    
    let myDay = ['Sunday', 'Monday', 'Tuesday', 'wednesday', 'Thrusday', 'Friday', 'Saterday'];
    let myMonth = ['january', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dateNow = date.getDate();

    let time = hr + ':' + min + ':' + sec;
    let currentTime = myDay[date.getDay()] + ',' + myMonth[date.getMonth()] + ' ' + dateNow;

    document.getElementById('time').innerHTML = time;
    document.getElementById('amPm').innerHTML = ampm;
    document.getElementById('day').innerHTML = currentTime;

}


dateAndTime();

setInterval(function(){
    dateAndTime();
}, 1000);