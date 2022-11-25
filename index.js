require("dotenv").config();
const server = require("./src/app.js");
require("dotenv").config();

server.listen(process.env.PORT,()=>{
  console.log('Server listening on port 3000')
})