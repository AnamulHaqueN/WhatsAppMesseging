const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8080;
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));

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
});

// add new route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

// Create new route
app.post("/chats", (req, res) => {
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at: new Date()
    });
    newChat.save().then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
    res.redirect("/chats");
});

app.listen(port, () => {
    console.log(`App is listening port ${port} !`);
});

// rote route
app.get("/", (req, res) => {
    res.send("app is responding");
});
