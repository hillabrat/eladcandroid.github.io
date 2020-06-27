axios.get("https://api.thecatapi.com/v1/images/search").then(
  function (res) {
    const image = document.body.querySelector("img");
    image.src = res.data[0].url;
  },
  (error) => {
    console.log(error);
  }
);
