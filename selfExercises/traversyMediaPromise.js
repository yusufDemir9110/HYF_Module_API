const postsPromise = [
  { title: "Post One Promise", body: "This is post one" },
  { title: "Post Two Promise", body: "This is post two" },
];
const promiseDiv = document.querySelector("#traversyMediaPromise");
const getPostPromise = () => {
  setTimeout(() => {
    let output = "";
    postsPromise.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    promiseDiv.innerHTML = output;
  }, 1000);
};

const createPostPromise = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      postsPromise.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("error!");
      }
    }, 2000);
  });
};

createPostPromise({
  title: "Post Three Promise",
  body: "This is post three",
})
  .then(getPostPromise)
  .catch((error) => {
    console.log(error);
  });

//promise.all
const promise1 = Promise.resolve("Hello world!");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "goodbye");
});
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);
Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});
