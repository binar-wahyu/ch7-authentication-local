const { User } = require("../models");
const passport = require("../lib/passport");

module.exports = {
  register: async (req, res, next) => {
    // Kita panggil static method register yang sudah kita buat tadi
    try {
      await User.register(req.body);
      res.redirect("/login");
    } catch (err) {
      next(err);
    }
  },

  login: passport.authenticate("local", {
    successRedirect: "/whoami",
    failureRedirect: "/login",
    failureFlash: true, // Untuk mengaktifkan express flash
  }),

  whoami: (req, res) => {
    /* req.user adalah instance dari User Model, hasil autentikasi dari passport. */
    res.render("profile", req.user.dataValues);
  },
};
