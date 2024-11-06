const pool = require('../db');

class Log {
  static async create(user_id, resource_id, action, customer_name, customer_mobile, note) {
    const [result] = await pool.query('INSERT INTO logs (user_id, resource_id, action, customer_name, customer_mobile, note) VALUES (?, ?, ?, ?, ?, ?)', 
      [user_id, resource_id, action, customer_name, customer_mobile, note]);
    return result.insertId;
  }

  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM logs');
    return rows;
  }
}

module.exports = Log;
