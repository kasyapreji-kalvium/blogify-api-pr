const express = require('express'); //importing express
const app = express(); //creating an instance of express
const postRoutes = require('./routes/post.routes.js'); //importing the post routes


const port = 3000;  //defining the port number


app.get('/', (req, res) => {
  res.send('Hello World!');
}); //defining a route for the root URL


app.use("/post" , postRoutes)//using the post routes for the /post URL

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); //starting the server and listening on the defined port