const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done');
      // reject('setTime promise rejected');
    }, duration);
  });

  return promise;
};

const getPosition = () => {
  const promise = new Promise((successFtn, failFtn) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        setTimeout(() => {
          successFtn(success);
        }, 3000);
      },
      (error) => {
        //throw new Error(error.message);
        failFtn(error);
      }
    );
  });

  return promise;
};

async function trackUserHandler() {
  let posData;

  try {
    const responseGetPosition = await getPosition();
    const responseSetTimer = await setTimer(3000);

    console.log(responseSetTimer, responseGetPosition);
  } catch (error) {
    console.log('An error ocurred', error);
  } finally {
    console.log('Finally on try catch');
  }

  setTimeout(() => {
    console.log('Timer executed');
  }, 0);

  console.log('Getting my position...');
}

button.addEventListener('click', trackUserHandler);

/* Promise.race([getPosition(), setTimer(4000)]).then((response) =>
  console.log(response)
); */

Promise.all([getPosition(), setTimer(4000)]).then((response) =>
  console.log(response)
);
