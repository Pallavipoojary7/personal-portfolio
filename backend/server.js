const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Portfolio backend is running!");
});

app.post("/contact", (req, res) => {
    const { Name, Email, Message } = req.body;

    console.log("New Contact Message:");
    console.log("Name:", Name);
    console.log("Email:", Email);
    console.log("Message:", Message);

    res.json({ success: true, message: "Message received successfully!" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});