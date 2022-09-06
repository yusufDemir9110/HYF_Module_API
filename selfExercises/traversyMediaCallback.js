const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];
const callbackDiv = document.querySelector("#traversyMediaCallback");
const getPost = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    callbackDiv.innerHTML = output;
  }, 1000);
};

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
};

createPost({ title: "Post Three", body: "This is post three" }, getPost);
