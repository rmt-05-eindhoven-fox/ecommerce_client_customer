const app = require("../app");
const port = process.env.PORT || 3060;

app.listen(port, () => {
  console.log(`E-commerce app is at PORT ${port}`);
});