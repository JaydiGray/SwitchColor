import 'flatpickr/dist/flatpickr.min.css';
import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';

const inputDate = document.querySelector('input[type="text"]');
const startBtn = document.querySelector('button[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMin = document.querySelector('[data-minutes]');
const dataSec = document.querySelector('[data-seconds]');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      startBtn.addEventListener('click', onClickStartTimer);
    }

    function onClickStartTimer() {
      setInterval(() => {
        const { seconds, minutes, hours, days } = convertMs(
          selectedDates[0] - new Date()
        );

        dataSec.textContent = addLeadingZero(seconds);
        dataMin.textContent = addLeadingZero(minutes);
        dataHours.textContent = addLeadingZero(hours);
        dataDays.textContent = addLeadingZero(days);
      }, 1000);
    }
  },
};

flatpickr(inputDate, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}
