const express = require('express');
const router = express.Router(); 
const User = require('../../models/User')
const Contact = require('../../models/Contact')

router.get("/", (req, res) => {
    res.render("admin/index");
})
router.get("/uyeler", (req, res) => {
    
    User.find({}).then((users) => {
        res.render("admin/uyeler",{
            users: users.map(user => user.toObject())
        });
    })
    
})
router.get("/contact", (req, res) => {
    
    Contact.find({}).then((contacts) => {
        res.render("admin/contact",{
            contacts: contacts.map(contact => contact.toObject())
        });
    })
    
})
router.delete("/uyeler/:id", (req, res) => {
    
    User.remove({_id : req.params.id}).then(()=> {
         res.redirect("/admin/uyeler")
    })
    
})
router.delete("/contact/:id", (req, res) => {
    
    Contact.remove({_id : req.params.id}).then(()=> {
         res.redirect("/admin/contact")
    })
    
})



module.exports = router