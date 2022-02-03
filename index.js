require("./mongo");
require("dotenv").config();
const express = require("express");
require("express-async-errors");
const userRouters = require("./routers/router.user");
const app = express();
const morgan = require("morgan");
const middleware = require("./utils/middleware");
const PORT = process.env.PORT || 3000;
//////
const path=require('path')
const ejs=require('ejs')
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({
  extended: true
}));

app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use("/users", userRouters);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

app.listen(PORT, () => {
  console.log(`YOUR SERVER IS WORKING AT PORT ${PORT}`);
});


// const li=[1,2,3,4,5]
// let a=0
// while(a<li.length){
//   console.log(a);
//   a++;
// }