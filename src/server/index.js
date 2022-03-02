const express = require("express");

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PRODUCTS = require("../products.json");
let cacheProduct = PRODUCTS;

app.use("/", (req, res, next) => {
  if (req.method === "GET") {
    res.json(cacheProduct);
  } else if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    const newId = cacheProduct[cacheProduct.length - 1].id;
    const newProduct = [...cacheProduct, { ...(data || {}), id: newId + 1 }];
    cacheProduct = newProduct;
    res.json(newProduct);
  } else if (req.method === "DELETE") {
    const id = req.url.split("/")[1];
    const newProduct1 = cacheProduct.filter((it) => it.id !== +id);
    cacheProduct = newProduct1;
    res.json(newProduct1);
  }
  res.json();
});

app.listen(8080, () => {
  console.log(`listening on http://localhost:${8080}`);
});
