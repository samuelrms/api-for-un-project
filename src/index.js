const express = require("express");
const app = express();
const port = process.env.PORT || 8001;

const { uuid } = require("uuidv4");

app.use(express.json());

const comments = require("./comments/comments.json");

const endpoints_cards = require("../src/cards/index.json");
const first_card = require("../src/cards/firstCard/firstCard.json");
const second_card = require("../src/cards/secondCard/secondCard.json");
const third_card = require("../src/cards/thirdCard/thirdCard.json");
const fourth_card = require("../src/cards/fourthCard/fourthCard.json");
const fifth_card = require("../src/cards/fifthCard/fifthCard.json");
const sixth_card = require("../src/cards/sixthCard/sixthCard.json");
const seventh_card = require("../src/cards/seventhCard/seventhCard.json");
const eighth_card = require("../src/cards/eighthCard/eighthCard.json");
const ninth_card = require("../src/cards/ninthCard/ninthCard.json");
const tenth_card = require("../src/cards/tenthCard/tenthCard.json");

app.get("/comments", (req, res) => {
  return res.json(comments);
});

//Cards
app.get("/cards", (req, res) => {
  return res.json(endpoints_cards);
});
app.get("/cards/first_card", (req, res) => {
  return res.json(first_card);
});
app.get("/cards/second_card", (req, res) => {
  return res.json(second_card);
});
app.get("/cards/third_card", (req, res) => {
  return res.json(third_card);
});
app.get("/cards/fourth_card", (req, res) => {
  return res.json(fourth_card);
});
app.get("/cards/fifth_card", (req, res) => {
  return res.json(fifth_card);
});
app.get("/cards/sixth_card", (req, res) => {
  return res.json(sixth_card);
});
app.get("/cards/seventh_card", (req, res) => {
  return res.json(seventh_card);
});
app.get("/cards/eighth_card", (req, res) => {
  return res.json(eighth_card);
});
app.get("/cards/ninth_card", (req, res) => {
  return res.json(ninth_card);
});
app.get("/cards/tenth_card", (req, res) => {
  return res.json(tenth_card);
});

//post comments
app.post("/comments", (req, res) => {
  const { name, comment } = req.body;

  const project = {
    id: uuid(),
    name,
    comment,
  };

  comments.push(project);

  return res.status(201).json(project);
});

app.listen(port, () => {
  console.log("Servidor está rodando na porta " + port);
});
