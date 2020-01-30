const times = document.getElementsByClassName('time');
setInterval(() => {
  for (let i = 0; i < times.length; i++) {
    let timeString = times[i].textContent;
    let time = timeString.slice(timeString.indexOf(':') + 2);
    times[i].textContent = incrementTime(time);
  }
}, 1000);

// takes time in HH:MM:SS format and increments by 1 second
function incrementTime(time) {
  let hours = parseInt(time.slice(0,2), 10);
  let minutes = parseInt(time.slice(3,5), 10);
  let seconds = parseInt(time.slice(6,8), 10);
  seconds++;
  switch (60) {
    case seconds:
      seconds = 0;
      minutes++;
    case minutes:
      minutes = 0;
      hours++;
  }
  hours = hours.toString();
  minutes = minutes.toString();
  seconds = seconds.toString();
  switch (1) {
    case hours.length:
      hours = '0' + hours;
    case minutes.length:
      minutes = '0' + minutes;
    case seconds.length:
      seconds = '0' + seconds;
  }
  return `Time elapsed: ${hours}:${minutes}:${seconds}`;
}