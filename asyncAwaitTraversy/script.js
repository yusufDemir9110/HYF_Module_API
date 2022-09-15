const outputDiv = document.querySelector("#output");
const getUsersDiv = document.querySelector("#getUsers");
const getText = async () => {
  const res = await fetch("sample.txt");
  const data = await res.text();
  outputDiv.innerHTML = data;
};

const getPokes = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  let output = "<h2>Pokes</h2>";

  data.results.map((item) => {
    output += `
            <ul>
                <li>${item.name}</li>
            </ul>
        `;

    outputDiv.innerHTML = output;
  });
};
document.querySelector("#getText").addEventListener("click", getText);
document.querySelector("#getPokes").addEventListener("click", getPokes);
