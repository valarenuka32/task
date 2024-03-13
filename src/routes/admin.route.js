const express = require("express");
const { adminValidation } = require("../validation");
const { adminController } = require("../controllers");
const validate = require("../middleware/validate");

const router = express.Router();

// create admin
router.post(
    "/create-admin",
    validate(adminValidation.createAdmin),
    adminController.createAdmin
);

// admin list
router.get(
    "/list",
    adminController.adminList
);

// update
router.put(
    "/update-admin/:adminId",
    adminController.updateRecode
);

// delete
router.delete(
    "/delete-admin/:adminId",
    adminController.deleteRecode
);

module.exports = router;