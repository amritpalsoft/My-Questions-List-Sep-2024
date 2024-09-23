import fetch from "node-fetch";

console.log("start");

// using fetch api 2 .then
const callApi = () => {
  console.log("mid");
  fetch("https://jsnplaceholder.typicode.com/todos/1")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("error", err);
    })
    .finally(() => {
      console.log("api final");
    });
  console.log("2nd mid");
};

//using fetch async await
const callApiAsync = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const response = await data.json();
  console.log(response);
};

// callApi();

callApiAsync();

console.log("final");
