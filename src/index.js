import express from 'express';

const app = express();

app.get('/', (require, response) => {
  response.json({message: 'Docker is easy 🐳'});
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`app listening on http://localhost:${port}`));