var express = require("express");
var router = express.Router();
const { verifyUserController } = require("../controller/indexController");
const { validateTokenMiddleware } = require("../middleware/AuthMiddleware");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api/verify/me", validateTokenMiddleware, verifyUserController);

module.exports = router;