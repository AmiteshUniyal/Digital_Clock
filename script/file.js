function Time() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var noon = "AM";
    if (hours == 0) {
      hours = 12;
    } else if (hours == 12) {
      noon = "PM";
    } else if (hours > 12) {
      hours -= 12;
      noon = "PM";
    }
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    var time = hours + ":" + minutes + ":" + seconds + " " + noon;
    document.getElementById("display").innerText = time;
    setTimeout(Time, 1000);
}
Time();