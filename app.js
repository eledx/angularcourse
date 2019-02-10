const express = require('express');
const path = require('path');;

const app = express();

app.use(express.static('./dist/starwars'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/starwars/index.html'));
});

const port = process.env.PORT || '3001';
app.listen(port, () => console.log('Server running'));
