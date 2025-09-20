import { pool } from '../db/mysqlPool.js';

export async function saveContact(req, res) {
  const data = req.body || {};
  try {
    const sql = `INSERT INTO contactos
      (name, company, email, phone, project_type, budget, timeline, description, comm_prefs)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const params = [
      data.name || null,
      data.company || null,
      data.email || null,
      data.phone || null,
      data.project_type || null,
      data.budget || null,
      data.timeline || null,
      data.description || null,
      Array.isArray(data.comm_prefs) ? data.comm_prefs.join(',') : data.comm_prefs || null
    ];
    const [result] = await pool.execute(sql, params);
    res.status(200).json({ message: 'Datos guardados correctamente', id: result.insertId });
  } catch (error) {
    console.error('DB Error:', error);
    res.status(500).json({ error: error.message });
  }
}
