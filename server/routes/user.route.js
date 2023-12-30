const express = require("express");
const { updateData, getData } = require("../services/user.service");

const router = express.Router();

router.route("/").get(getData);

router.route("/").post(updateData);

module.exports = router;
