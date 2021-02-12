const express = require('express');
const hbs = require('hbs');
const exphbs = require('express-handlebars');
const routes = require('./routes/route');
const app = express();
const port = 3000;

app.engine('hbs', exphbs(
    {
        layoutsDir: "views/layouts",
        defaultLayout: 'layout',
        extname: 'hbs'
    }
));

hbs.registerHelper("getTime", () => {

    var myDate = new Date("10.02.2021");
    var hour = myDate.getHours();
    var minute = myDate.getMinutes();
    var second = myDate.getSeconds();
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    return hbs.SafeString("Текущее время: " + hour + ":" + minute + ":" + second);
});

app.set('view engine', 'hbs');
app.set('views', 'views');

hbs.registerPartials(__dirname + "/views/partials");

app.use(routes);

app.listen(port, (err) =>{
    if(err)
        throw err;
    else
        console.log(`Server is running at ${port} port`);
})