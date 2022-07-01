const express = require('express');
const router = express.Router(); 
const Contact = require('../models/Contact')
router.get("/iletisim", (req, res) => {
    res.render("site/iletisim");
})
router.post("/iletisim", (req, res) => {
    console.log(req.body);
    Contact.create(req.body)
       
        res.redirect("/")

})

module.exports = router;