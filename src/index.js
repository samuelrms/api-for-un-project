const express = require("express");
const app = express();
const port = process.env.PORT || 8001;

const { uuid } = require("uuidv4");

app.use(express.json());

// Cards path
const endpoints_cards = require("./cards/index.json");
const first_card = require("./cards/firstCard/firstCard.json");
const second_card = require("./cards/secondCard/secondCard.json");
const third_card = require("./cards/thirdCard/thirdCard.json");
const fourth_card = require("./cards/fourthCard/fourthCard.json");
const fifth_card = require("./cards/fifthCard/fifthCard.json");
const sixth_card = require("./cards/sixthCard/sixthCard.json");
const seventh_card = require("./cards/seventhCard/seventhCard.json");
const eighth_card = require("./cards/eighthCard/eighthCard.json");
const ninth_card = require("./cards/ninthCard/ninthCard.json");
const tenth_card = require("./cards/tenthCard/tenthCard.json");

//Cards get endpoint
app.get("/cards", (req, res) => {
  return res.json(endpoints_cards);
});
app.get("/cards/card_1", (req, res) => {
  return res.json(first_card);
});
app.get("/cards/card_2", (req, res) => {
  return res.json(second_card);
});
app.get("/cards/card_3", (req, res) => {
  return res.json(third_card);
});
app.get("/cards/card_4", (req, res) => {
  return res.json(fourth_card);
});
app.get("/cards/card_5", (req, res) => {
  return res.json(fifth_card);
});
app.get("/cards/card_6", (req, res) => {
  return res.json(sixth_card);
});
app.get("/cards/card_7", (req, res) => {
  return res.json(seventh_card);
});
app.get("/cards/card_8", (req, res) => {
  return res.json(eighth_card);
});
app.get("/cards/card_9", (req, res) => {
  return res.json(ninth_card);
});
app.get("/cards/card_10", (req, res) => {
  return res.json(tenth_card);
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

// Comments get endpoint
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

  fourth_card.push(project);

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
