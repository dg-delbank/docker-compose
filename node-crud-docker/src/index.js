const express = require('express');
const { connectDB } = require('./db');
const Item = require('./models');

const app = express();
app.use(express.json());

app.get('/items', async (req, res) => {
  const items = await Item.findAll();
  res.json(items);
});

app.post('/items', async (req, res) => {
  const newItem = await Item.create(req.body);
  res.json(newItem);
});

app.put('/items/:id', async (req, res) => {
  const item = await Item.findByPk(req.params.id);
  if (item) {
    await item.update(req.body);
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
});

app.delete('/items/:id', async (req, res) => {
  const item = await Item.findByPk(req.params.id);
  if (item) {
    await item.destroy();
    res.send('Item deleted');
  } else {
    res.status(404).send('Item not found');
  }
});

const startServer = async () => {
  await connectDB();
  await sequelize.sync(); // Cria as tabelas se elas não existirem
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
};

startServer();
