const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
("months");
const secondsEl = document.getElementById("seconds");

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const countdownFun = () => {
  let countDownDate = new Date("28 oct 2021");
  let currentDate = new Date();

  const totalSeconds = (countDownDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
};

countdownFun();

setInterval(() => {
  countdownFun();
}, 1000);
