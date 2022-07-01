//Routing İşlemleri(Yönlendirme İşlemleri)(app.js Gereksiz Yere Şişmesin Diye)

const express = require('express');
const router = express.Router(); 


router.get("/", (req, res) => {
    console.log(req.session);
    res.render("site/index");
})
router.get("/biz-kimiz", (req, res) => {
    res.render("site/biz-kimiz");
})
router.get("/sss", (req, res) => {
    res.render("site/sss");
})
// router.get("/iletisim", (req, res) => {
//     res.render("site/iletisim");
// })
router.get("/kurumsal-depo", (req, res) => {
    res.render("site/kurumsal-depo");
})
router.get("/xl-depo", (req, res) => {
    res.render("site/xl-depo");
})
router.get("/buyuk-depo", (req, res) => {
    res.render("site/buyuk-depo");
})
router.get("/standart-depo", (req, res) => {
    res.render("site/standart-depo");
})
router.get("/blog", (req, res) => {
    res.render("site/blog");
})
// router.get("/admin", (req, res) => {
//     res.render("admin/index");
// })


module.exports = router;