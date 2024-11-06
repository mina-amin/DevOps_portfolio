const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findByUsername(username);
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ userId: user.id, role: user.role }, 'secretKey', { expiresIn: '1h' });
  res.json({ token });
};

module.exports = { login };
