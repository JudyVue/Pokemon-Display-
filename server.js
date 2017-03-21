'use strict';


require('dotenv').load();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static('./'));

app.listen(PORT, () => {
  console.log('Server up on port ', PORT);
});
