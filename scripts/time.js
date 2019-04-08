function setTime(){

  var today = new Date();

  document.getElementById("hours").innerHTML = ((today.getHours() < 10)?"0":"") + today.getHours();
  document.getElementById("mins").innerHTML = ((today.getMinutes() < 10)?"0":"") + today.getMinutes();
  document.getElementById("date").innerHTML = today.toDateString();

}

// function setColon(colon){
//   // if (colon.set == true){
//   //   document.getElementById("time").innerHTML = ":";
//   //   colon.set = false;
//   // }
//   // else{
//   //   document.getElementById("time").innerHTML = " ";
//   //   colon.set = true;
//   // }
//   // document.getElementById("time").innerHTML = ":";
// }

// var colon = colonFlag;

setTime();

setInterval(setTime, 1000);
// setInterval(setColon(colon), 500);
