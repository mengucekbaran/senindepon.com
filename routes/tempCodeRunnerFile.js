const express = require('express');
const router = express.Router(); 
const User = require('../models/User')
router.get("/uye-ol", (req, res) => {
    res.render("site/uye-ol");
})