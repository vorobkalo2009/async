const { default: axios } = require('axios');

const yep = user => {
  return (promisee = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve(`${user} отримує шоколадка`);
      } else {
        reject('отримали оцінку нижче 8');
      }
    }, 2000);
  }));
};

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve('шоколадка');
    } else {
      reject('отримали оцінку нижче 8');
    }
  }, 2000);
})
  .then(item => console.log(item))
  .catch(err => console.log(err))
  .finally(() => console.log('проміси гуд'));

yep('user')
  .then(user => console.log(user))
  .catch(err => console.log(err));

const func = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const resProm = text => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), 1000);
  });
};

const promiseA = resProm('PromiseA');
const promiseB = resProm('promiseB');
const promiseC = resProm('promiseC');
const promiseD = resProm('promiseD');
const promiseE = resProm('promiseE');

Promise.all([promiseA, promiseB, promiseC, promiseD, promiseE])
  .then(response => console.log(response))
  .catch(err => err.status);

Promise.race([promiseB, promiseC, promiseD, promiseE]).then(response =>
  console.log(response)
);

new Promise(resolve => resolve('Все добре')).then(response =>
  console.log(response)
);

new Promise(reject => reject('Все не добре')).then(response =>
  console.log(response)
);
