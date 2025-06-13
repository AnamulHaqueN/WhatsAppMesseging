const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then((res) => {
    console.log("Connection is successful !");
})
.catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let Chats = [{
    from: "Neha",
    to: "priya",
    msg: "Hi i need your books",
    created_at: new Date()
},

{
    from: "Anu",
    to: "Tasu",
    msg: "Hey tasu",
    created_at: new Date()
},

{
    from: "Tasu",
    to: "Anu",
    msg: "Hlw",
    created_at: new Date()
},

{
    from: "Petter",
    to: "Tonny",
    msg: "Hey petter whatsapp !",
    created_at: new Date()
},
];

Chat.insertMany(Chats);