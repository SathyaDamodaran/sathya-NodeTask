var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../model/userprofile.js");
var db = require("../db.js");

/* GET SINGLE  USERPROFILE BY ID */
router.get("/:id", function(req, res, next) {
  db.dbCon();
  try {
    User.findOne({ id: req.params.id }, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } catch (error) {
    res.json({ message: "id not found" });
  }
});

/* SAVE PRODUCT */
router.post("/addUser", function(req, res, next) {
  db.dbCon();
  try {
    User.create(req.body, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } catch (error) {
    res.json({ message: "Unable to add User" });
  }
});

module.exports = router;
