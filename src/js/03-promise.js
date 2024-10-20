import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    return Promise.resolve({ position, delay });
  } else {
    // Reject
    return Promise.reject({ position, delay });
  }
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const step = +formEl.querySelector('input[name="step"]').value;
  const amount = +formEl.querySelector('input[name="amount"]').value;
  let delay = +formEl.querySelector('input[name="delay"]').value;

  let counter = 0;
  let totalDelay = delay;

  setTimeout(() => {
    let intervalId = null;

    intervalId = setInterval(() => {
      counter += 1;
      if (counter === amount + 1) {
        clearInterval(intervalId);
        counter = 0;
        return;
      }

      createPromise(counter, step)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${totalDelay}ms`
          );
          totalDelay += step;
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${totalDelay}ms`
          );
          totalDelay += step;
        });
    }, step);
  }, delay);
}
