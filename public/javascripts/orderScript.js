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
  let hours = parseInt(time.slice(0,2));
  let minutes = parseInt(time.slice(3,5));
  let seconds = parseInt(time.slice(6,8));
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    seconds++;
  }
  hours = hours.toString();
  minutes = minutes.toString();
  seconds = seconds.toString();
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return `Time elapsed: ${hours}:${minutes}:${seconds}`;
}