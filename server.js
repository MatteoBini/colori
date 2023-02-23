const express = require("express");
const path = require(`path`);

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  res.render("index.ejs");
});



app.use(express.static(path.join(__dirname, 'public')))

/* set up 404 page (not found) */
/* WARNING: This route has to be the last one!! */
//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  res.render("404.ejs");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
