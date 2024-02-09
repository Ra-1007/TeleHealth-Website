const express = require("express");
const app = express();


app.use(cors());

app.use("/public", express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  app.listen(PORT, () => {
    console.log("Server is running on PORT:", PORT);
  });
  