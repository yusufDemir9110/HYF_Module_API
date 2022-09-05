const p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a === 2) {
    resolve("success");
  } else {
    reject("failed");
  }
});

p.then((message) => {
  console.log("this is then " + message);
}).catch((message) => {
  console.log("this is catch " + message);
});

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000); // We wait 1 second and then resolve with value 1
})
  .then(function (result) {
    console.log(result); // Result: 1
    return result * 2;
  })
  .then(function (result) {
    alert(result); // Result: 2
    return result * 2;
  })
  .catch((error) => {
    console.log(error);
  });
