module.exports = (req, res, next) => {
  // Bila request berasal dari user yang terautentikasi,
  // maka kita akan lanjut menjalankan handler berikutnya
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) return next();
  // Bila tidak, kita akan redirect ke halaman login
  res.redirect("/login");
};
