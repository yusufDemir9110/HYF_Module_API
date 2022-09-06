"use strict";

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Good to go!");
  }, 1000);
  //   setTimeout(() => {
  //     reject("uh oh");
  //   }, 500);
});

// myPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res);
//   });

let myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise2");
  }, 1500);
});

Promise.all([myPromise, myPromise2])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
