const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
const logRoutes = require('./routes/logRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/logs', logRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
