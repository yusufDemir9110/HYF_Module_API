const outputDiv = document.querySelector("#output");
const getUsersDiv = document.querySelector("#getUsers");
const getText = () => {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      outputDiv.innerHTML = data;
    })
    .catch((err) => console.log(err));
};

const getPokes = () => {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2>Pokes</h2>";

      data.results.map((item) => {
        output += `
            <ul>
                <li>${item.name}</li>
            </ul>
        `;
      });
      outputDiv.innerHTML = output;
    });
};
document.querySelector("#getText").addEventListener("click", getText);
document.querySelector("#getPokes").addEventListener("click", getPokes);
