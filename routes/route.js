const {Router} = require('express');
const router = Router();

router.get('/', (req,res) =>{
    res.render('index.hbs', {
        title : "Главная страница",
    });
});

router.get('/contact', (req, res ) =>{
    res.render('contact.hbs', {
        title : "Контакты",
        isEmailVisible : true,
        email : ["mixaylo1995@gmail.com", "mixaylo2002@gmail.com"],
        phone : "+38 (067) 438 49 69"
    });
});

module.exports = router;