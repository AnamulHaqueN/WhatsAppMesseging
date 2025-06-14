const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8080;
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main().then((res) => {
    console.log("Connection is successful !");
})
.catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// index route
app.get("/chats", async(req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs", {chats});
})

app.listen(port, () => {
    console.log(`App is listening port ${port} !`);
});

// rote route
app.get("/", (req, res) => {
    res.send("app is responding");
});
