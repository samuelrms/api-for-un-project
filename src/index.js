const express = require("express");
const app = express();
const port = process.env.PORT || 8001;

const { uuid } = require("uuidv4");

app.use(express.json());

// liberando request na API para local e na aplicação web
const cors = require("cors");
const corsOptions = {
  origin: "https://stellar-stardust-46c965.netlify.app/"
  // origin: "https://desafio-final-mod-3.herokuapp.com", 
  // origin: "http://localhost:3000",
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Cards path
const endpoints_cards = require("./cards/index.json");

//Cards get endpoint
app.get("/cards", (req, res) => {
  return res.json(endpoints_cards);
});

// Comments path
const comments = require("./comments/index.json");
const first_comments_card = require("./comments/firstCard/firstCard.json");
const second_comments_card = require("./comments/secondCard/secondCard.json");
const third_comments_card = require("./comments/thirdCard/thirdCard.json");
const fourth_comments_card = require("./comments/fourthCard/fourthCard.json");
const fifth_comments_card = require("./comments/fifthCard/fifthCard.json");
const sixth_comments_card = require("./comments/sixthCard/sixthCard.json");
const seventh_comments_card = require("./comments/seventhCard/seventhCard.json");
const eighth_comments_card = require("./comments/eighthCard/eighthCard.json");
const ninth_comments_card = require("./comments/ninthCard/ninthCard.json");
const tenth_comments_card = require("./comments/tenthCard/tenthCard.json");

app.get("/comments", (req, res) => {
  return res.json(comments);
});
app.get("/comments/card_1", (req, res) => {
  return res.json(first_comments_card);
});
app.get("/comments/card_2", (req, res) => {
  return res.json(second_comments_card);
});
app.get("/comments/card_3", (req, res) => {
  return res.json(third_comments_card);
});
app.get("/comments/card_4", (req, res) => {
  return res.json(fourth_comments_card);
});
app.get("/comments/card_5", (req, res) => {
  return res.json(fifth_comments_card);
});
app.get("/comments/card_6", (req, res) => {
  return res.json(sixth_comments_card);
});
app.get("/comments/card_7", (req, res) => {
  return res.json(seventh_comments_card);
});
app.get("/comments/card_8", (req, res) => {
  return res.json(eighth_comments_card);
});
app.get("/comments/card_9", (req, res) => {
  return res.json(ninth_comments_card);
});
app.get("/comments/card_10", (req, res) => {
  return res.json(tenth_comments_card);
});

//post comments
app.post("/comments/card_1", (req, res) => {
  const { name, comment } = req.body;

  const project = {
    id: uuid(),
    name,
    comment,
  };

  first_comments_card.push(project);

  return res.status(201).json(project);
});

app.post("/comments/card_2", (req, res) => {
  const { name, comment } = req.body;

  const project = {
    id: uuid(),
    name,
    comment,
  };

  second_comments_card.push(project);

  return res.status(201).json(project);
});

app.post("/comments/card_3", (req, res) => {
  const { name, comment } = req.body;

  const project = {
    id: uuid(),
    name,
    comment,
  };

  third_comments_card.push(project);

  return res.status(201).json(project);
});

app.post("/comments/card_4", (req, res) => {
  const { name, comment } = req.body;

  const project = {
    id: uuid(),
    name,
    comment,
  };

  fourth_comments_card.push(project);

  return res.status(201).json(project);
});

app.post("/comments/card_5", (req, res) => {
  const { name, comment } = req.body;

  const project = {
    id: uuid(),
    name,
    comment,
  };

  fifth_comments_card.push(project);

  return res.status(201).json(project);
});

app.post("/comments/card_6", (req, res) => {
  const { name, comment } = req.body;

  const project = {
    id: uuid(),
    name,
    comment,
  };

  sixth_comments_card.push(project);

  return res.status(201).json(project);
});

app.post("/comments/card_7", (req, res) => {
  const { name, comment } = req.body;

  const project = {
    id: uuid(),
    name,
    comment,
  };

  seventh_comments_card.push(project);

  return res.status(201).json(project);
});

app.post("/comments/card_8", (req, res) => {
  const { name, comment } = req.body;

  const project = {
    id: uuid(),
    name,
    comment,
  };

  eighth_comments_card.push(project);

  return res.status(201).json(project);
});

app.post("/comments/card_9", (req, res) => {
  const { name, comment } = req.body;

  const project = {
    id: uuid(),
    name,
    comment,
  };

  ninth_comments_card.push(project);

  return res.status(201).json(project);
});

app.post("/comments/card_10", (req, res) => {
  const { name, comment } = req.body;

  const project = {
    id: uuid(),
    name,
    comment,
  };

  tenth_comments_card.push(project);

  return res.status(201).json(project);
});

// Endpoints path
const endPoints = require("./endpoints.json");

// endPoints get
app.get("/", (req, res) => {
  return res.json(endPoints);
});

app.listen(port, () => {
  console.log("Servidor está rodando na porta " + port);
});
