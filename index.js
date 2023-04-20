const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
    <body>
    <h1>Home</h1> 
    <div>hello world</div>
    </body>
    </html>
    `);
});
app.get("/puppies", (req, res) => {
  res.send(`
    <html>
    <body>
    <h1>Puppies</h1>
    </body>
    </html>
    `);
});

app.get("/users", (req, res) => {
  res.send([
    {
      name: "robert",
    },
    {
      name: "lisa",
    },
  ]);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("server is up");
});
