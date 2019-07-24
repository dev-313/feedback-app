const express = require('express');
const app = express();

app.get('/',(req,res) => {
  res.send({ message:"Hello" });
});

PORT = Process.env.PORT || 5000;

app.listen(PORT);
