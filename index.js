function printDate(){
  console.log(new Date().toLocaleTimeString());
}

setInterval(printDate,1000);