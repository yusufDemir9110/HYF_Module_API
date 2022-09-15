const pokeListUl = document.querySelector(".poke");
let pokes = "";
fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results);
    data.results.map((item) => {
      pokes += `<li>${item.name}</li>`;
      pokeListUl.innerHTML = pokes;
    });
  });
