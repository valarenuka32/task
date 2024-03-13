const express = require("express");
const { userController } = require("../controllers");
const { uservalidation } = require("../validation");
const validate = require("../middleware/validate");
const autheticate=require("../middleware/auth");

const router = express.Router();

// user register
router.post(
    "/register",
    validate(uservalidation.register),
    userController.register
);

// user login
router.post(
    "/login",
    autheticate,
    userController.login
);

//user list
router.get(
    "/user-list",
    userController.userList
);

// user detile update
router.put(
    "/user-update/:userId",
    userController.updateRecode
);

// user detile delete
router.delete(
    "/user-delete/:userId",
    userController.deleteRecode
);

module.exports = router;