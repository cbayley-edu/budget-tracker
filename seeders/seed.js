const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const budgetSeed = [
  {
    date: new Date(new Date().setDate(new Date().getDate() - 1)),
    name : "Opening Balance",
    value : 10000,
  }
];

db.Budget.deleteMany({})
  .then(() => db.Budget.collection.insertMany(budgetSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
