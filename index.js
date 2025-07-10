const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");


app.set("views",path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));//to parse our data

main()
.then(() => {
    console.log("conection successfull");
})
.catch((err) => 
    console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
// Index Route
app.get("/chats", async (req, res) => {
  let chats =  await Chat.find(); //its an asynchronous func bezoc it bring data from db
  console.log(chats);
  res.render("index.ejs",{chats});
});

//new route
app.get("/chats/new", (req,res) =>{
  res.render("new.ejs");
});

//create route (parse this)
app.post("/chats", (req, res) =>{
  let {from ,to, msg} =req.body;
  let newChat = new Chat({
  from: from,
  to: to,
  msg: msg,
  created_at: new Date()
  });
// console.log(newChat);
newChat
.save()
.then((res) => {
   console.log("chat was saved");
  })
   .catch((err)=>{
    console.log(err);
   });

// res.send("working"); 
res.redirect("/chats");
});


//root path
app.get("/", (req, res) =>{
    res.send("root is working");
});

app.listen(8080, () =>{
    console.log("server is listening on port 8080");
});