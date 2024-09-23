import fetch from "node-fetch";

const apiCall1 = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const response = await data.json();
  return {
    response1: response,
  };
};

const apiCall2 = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  const response = await data.json();
  return {
    response2: response,
  };
};

const apiCall3 = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/3");
  const response = await data.json();
  return {
    response3: response,
  };
};

Promise.all([apiCall1(), apiCall2(), apiCall3()])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("error", err);
  });
