const express = require('express');
const bodyParser = require('body-parser');
const { Employee, Asset } = require('./models');
const path = require('path');

const app = express();

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
  const employees = await Employee.findAll();
  const assets = await Asset.findAll();
  res.render('index', { employees, assets });
});


app.get('/addEmployee', (req, res) => {
  res.render('addEmployee');
});

app.post('/addEmployee', async (req, res) => {
  const { name, email, isActive } = req.body;
  try {
    await Employee.create({ name, email, isActive });
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error adding employee');
  }
});


app.get('/addAsset', (req, res) => {
  res.render('addAsset');
});

app.post('/addAsset', async (req, res) => {
  const { serialNumber, make, model, type } = req.body;
  try {
    await Asset.create({ serialNumber, make, model, type });
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error adding asset');
  }
});


app.listen(PORT=3000, () => {
  console.log(`Server running on port ${PORT}`);
});
