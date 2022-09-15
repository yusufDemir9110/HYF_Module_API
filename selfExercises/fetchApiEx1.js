const searchShow = (query) => {
  const url = `https://api.tvmaze.com/shows/2029/${query}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.map((item) => {
        console.log(item.person.birthday);
      });
    });
};

window.onload = () => {
  const searchEl = document.querySelector("#search");
  searchEl.onkeyup = (event) => {
    searchShow(searchEl.value);
  };
};
