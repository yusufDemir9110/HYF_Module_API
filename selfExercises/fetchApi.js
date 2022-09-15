fetch("https://api.tvmaze.com/shows/2029/cast")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
