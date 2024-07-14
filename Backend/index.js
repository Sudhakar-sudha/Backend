
// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB Atlas
// const dbUrl="mongodb+srv://sudhakar:sudhakar@cluster0.odnra1b.mongodb.net/";
// mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log('MongoDB database connection established successfully');
// });

// // Schema and Model
// const itemSchema = new mongoose.Schema({
//   value: String,
// });

// const Item = mongoose.model('Item', itemSchema);

// // Routes
// app.post('/add', async (req, res) => {
//   const newItem = new Item({
//     value: req.body.value, 
//   });

//   try {
//     await newItem.save();
//     res.status(201).send('Item added successfully');
//   } catch (error) {
//     res.status(400).send('Error adding item');
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });




// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
const dbUrl="mongodb+srv://sudhakar:sudhakar@cluster0.odnra1b.mongodb.net/";
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Schema and Model
const itemSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const Item = mongoose.model('Login', itemSchema);

// Routes
app.post('/add', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  const newItem = new Item({ username, password });

  try {
    await newItem.save();
    res.status(201).send('Item added successfully');
  } catch (error) {
    console.error('Error adding Item:', error);
    res.status(400).send('Error adding item');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
