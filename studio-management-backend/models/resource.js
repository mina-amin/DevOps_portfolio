const pool = require('../db');

class Resource {
  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM resources');
    return rows;
  }

  static async create(name, category) {
    const [result] = await pool.query('INSERT INTO resources (name, category) VALUES (?, ?)', [name, category]);
    return result.insertId;
  }

  static async updateAvailability(resourceId, available) {
    await pool.query('UPDATE resources SET available = ? WHERE id = ?', [available, resourceId]);
  }
}

module.exports = Resource;
