const express = require("express");
const userRouter = require("./user.route");
const adminRouter = require("./admin.route");

const router = express.Router();

router.use("/user", userRouter);
router.use("/admin", adminRouter);

module.exports = router;