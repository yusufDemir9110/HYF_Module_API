const postsAsyncAwait = [
  { title: "Post One Async-Await", body: "This is post one" },
  { title: "Post Two Async-Await", body: "This is post two" },
];
const asyncAwaitDiv = document.querySelector("#traversyMediaAsyncAwait");
const getPostAsyncAwait = () => {
  setTimeout(() => {
    let output = "";
    postsAsyncAwait.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    asyncAwaitDiv.innerHTML = output;
  }, 1000);
};

const createPostAsyncAwait = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      postsAsyncAwait.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("error!");
      }
    }, 2000);
  });
};

const init = async () => {
  await createPostAsyncAwait({
    title: "Post Three Async-Await",
    body: "This is post three ",
  });

  getPostAsyncAwait();
};
init();
