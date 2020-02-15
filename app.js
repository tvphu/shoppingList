//jshint eversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

var items = [];

app.get("/", function(req,res){
  var today = new Date();
  var currenDay = today.getDay();
  var day = "";

  switch(currenDay){
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
        day = "Thursday";
        break;
    case 5:
          day = "Friday";
          break;
    case 6:
            day = "Saturday";
            break;


  }



  res.render("list", {kindOfday: day, newlistitem: items})
});

app.post("/", function(req,res){
  item = req.body.newitem;
  items.push(item);

  res.redirect("/");
})

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
