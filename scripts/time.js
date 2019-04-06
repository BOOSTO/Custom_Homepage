function setTime(){

  var today = new Date();

  document.getElementById("time").innerHTML = ((today.getHours() < 10)?"0":"") + today.getHours() + ":" + ((today.getMinutes() < 10)?"0":"") + today.getMinutes();
  document.getElementById("date").innerHTML = today.toDateString();

}

setTime();

setInterval(setTime, 1000);
