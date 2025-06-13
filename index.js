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

let chat1 = new Chat({
    from: "Neha",
    to: "priya",
    msg: "Hi i need your books",
    created_at: new Date()
});

chat1.save().then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})

app.listen(port, () => {
    console.log(`App is listening port ${port} !`);
});

app.get("/", (req, res) => {
    res.send("app is responding");
});