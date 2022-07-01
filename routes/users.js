const express = require('express');
const router = express.Router(); 
const User = require('../models/User')
router.get("/uye-ol", (req, res) => {
    res.render("site/uye-ol");
})
router.post("/uye-ol", (req, res) => {
    User.create(req.body,(error,user) => {
        //Giriş Başarılı mesajı
        req.session.sessionFlash = {
            type: 'flashMessage flashMessage-success',
            message:'Kullanıcı başarılı bir şekilde oluşturuldu'
        }
        res.redirect("/users/giris")
    })
})
router.get("/giris", (req, res) => {
    res.render("site/giris");
})
router.post("/giris",(req,res)=>{
    const {email,password} = req.body
    User.findOne({ email},(error,user)=>{
        if(user){
            if(user.password ==password){
                //USER SESSION
                req.session.userId = user._id//kullanıcının veritabandaki id sini sessionda userId olarak kaydediyor
                res.redirect("/")
            }
            else{
                res.redirect("/users/giris")
            }
        }
        else{
            res.redirect("/users/uye-ol")
        }
    })

})

router.get("/cikis", (req, res) => {
    req.session.destroy(()=>{
       res.redirect("/"); 
    })
    
})

module.exports = router;