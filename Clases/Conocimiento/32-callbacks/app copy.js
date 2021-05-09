const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('Done');
      reject('setTime promise rejected');
    }, duration);
  });

  return promise;
};

const getPosition = () => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      }
    );
  });

  return promise;
};

function trackUserHandler() {
  let posData;

  getPosition()
    .then((positionData) => {
      posData = positionData;
      return setTimer(3000);
    })
    .then((data) => {
      console.log(data, posData);
    })
    .catch((error) => {
      console.log('An error ocurred', error);
      return 'promise rejected';
    })
    .finally(() => console.log('End promise chained'));

  /*   const promisePosition = getPosition().then((positionData) => {
    posData = positionData;
    return setTimer(3000)
  });

  promisePosition.then(data => {
    console.log(data, posData)
  }) */

  /*   navigator.geolocation.getCurrentPosition(
    (positionData) => {
      setTimer(3000).then((response) => console.log(response, positionData));
    },
    (error) => {
      console.log(error);
    }
  ); */

  setTimeout(() => {
    console.log('Timer executed');
  }, 0);

  console.log('Getting my position...');
}

button.addEventListener('click', trackUserHandler);

/* let counter = 0;

for (let ind = 0; ind < 10000000000; ind++) {
  counter += 1;
}

console.log(counter); */
