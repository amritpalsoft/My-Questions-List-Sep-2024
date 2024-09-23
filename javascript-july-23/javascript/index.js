import fetch from "node-fetch";

const getData = () => {
  fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2023-12-29&sortBy=publishedAt",
    {
      method: "GET",
      headers: {
        contentType: "application/json",
        apiKey: "8c91d913fc2c46baa48068ca4244dca0",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

getData();
