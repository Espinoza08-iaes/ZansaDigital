import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const pool = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'zansadb',
  waitForConnections: true,
  connectionLimit: 5,
  multipleStatements: false,
});

async function run() {
  try {
    const sql = `INSERT INTO contactos (name, company, email, phone, project_type, budget, timeline, description, comm_prefs) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const params = [
      'ScriptTest',
      'Automated',
      'script@test.local',
      '000-000-000',
      'Test Project',
      '0',
      'now',
      'Insert desde script de pruebas',
      'email',
    ];

    const [result] = await pool.execute(sql, params);
    console.log('InsertId:', result.insertId);
    await pool.end();
  } catch (err) {
    console.error('Error insert_test_contact:', err && err.message ? err.message : err);
    process.exitCode = 1;
  }
}

run();
