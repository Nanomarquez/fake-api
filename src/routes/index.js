const { Router } = require("express");
const payProducts = require('./payProducts')
const router = Router();

router.post('/pay',payProducts)

router.use("/", (req, res) => {
  res.send("Fake");
});

module.exports = router;