const mongoose = require("mongoose");
const Chat = require('./models/chat');  // Adjust path if needed


main()
.then(() => {
    console.log("conection successfull");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
    from: "neha",
    to: "preeti",
    msg: "send me notes for exam",
    created_at: new Date(),
    },
      {
    from: "ruhi",
    to: "sana",
    msg: "hey how are you",
    created_at: new Date(),
    },
      {
    from: "sijal",
    to: "namra",
    msg: "good luck for exam",
    created_at: new Date(),
    },
      {
    from: "areeb",
    to: "shahzad",
    msg: "will you play game?",
    created_at: new Date(),
    },
      {
    from: "zoha",
    to: "hashir",
    msg: "buy me a fresh flower",
    created_at: new Date(),
    },
];

Chat.insertMany(allChats);