const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); 