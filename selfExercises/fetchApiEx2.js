const listDiv = document.querySelector(".list");
const listUl = document.createElement("ul");
listDiv.appendChild(listUl);
const errorDiv = document.querySelector("#error");
errorDiv.getElementsByClassName.color = "red";
const searchShow = (query) => {
  const url = `https://api.tvmaze.com/shows/2029/${query}`;
  let list = "";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.map((item) => {
        list += `<li>${item.person.birthday}</li>`;
        listUl.innerHTML = list;
        errorDiv.innerHTML = "";
      });
    })
    .catch((error) => {
      errorDiv.innerHTML = error;
    });
};
let searchTimeToken = 0;
window.onload = () => {
  const searchEl = document.querySelector("#search");

  searchEl.onkeyup = (event) => {
    clearTimeout(searchTimeToken);
    if (searchEl.value.trim().length === 0) {
      return;
    }
    searchTimeToken = setTimeout(() => {
      searchShow(searchEl.value.trim());
    }, 500);
  };
};
