const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("express-flash");
const passport = require("./lib/passport");
const router = require("./router");
const { PORT = 8000 } = process.env;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: "Buat ini jadi rahasia",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");

app.use(router);

app.listen(PORT, () => {
  console.log(`Server nyala di port ${PORT}`);
});
