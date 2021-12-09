import axios from "axios";
//import data from './data.json';

export default async function (req, res) {
  if (req.method === "GET") {
    const dataRes = await fetch(`${process.env.API_URL}/resources`);
    const data = await dataRes.json();

    return res.send(data);
  }

  if (req.method === "POST" || req.method === "PATCH") {

    const { id, title, description, link, timeToFinish, priority } = req.body;
    let url = `${process.env.API_URL}/resources`;
    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send("Data are missing!");
    }

    if (req.method === "PATCH") {
      url += `/${id}`;
    }

    // const url = req.method === "POST"
    //   ? "http://localhost:3001/api/resources"
    //   : "http://localhost:3001/api/resources/" + id;

    console.log("req is going to ", url);
    //console.log("and request method is ", req.method.toLowerCase());
    //console.log("req body ", req.body);

    try {
      const axiosRes = await axios[req.method.toLowerCase()](url, req.body);
      //const axiosRes = await axios["post"](url, req.body);
      //const axiosRes = await axios.post(url, req.body);

      return res.send(axiosRes.data);
    } catch {
      console.log("catch");
      return res.status(422).send("Data cannot be stored!");
    }

    //return res.send("Data has been received!");
  }
}