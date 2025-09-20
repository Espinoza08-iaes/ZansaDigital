import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env if present in backend/
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const DB_HOST = process.env.DB_HOST || '127.0.0.1';
const DB_PORT = process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306;
const DB_USER = process.env.DB_USER || 'root';
const DB_PASS = process.env.DB_PASS || '';
// DB_NAME is optional here because the SQL file creates the database
const DB_NAME = process.env.DB_NAME || '';

async function main() {
  try {
    const sqlPath = path.join(__dirname, '..', 'sql', 'create_table.sql');
    const sql = await fs.readFile(sqlPath, 'utf8');

    console.log('Conectando a MySQL en', `${DB_HOST}:${DB_PORT}`);

    // Connect without selecting a default database so CREATE DATABASE / USE work
    const pool = mysql.createPool({
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASS,
      waitForConnections: true,
      connectionLimit: 5,
      queueLimit: 0,
      multipleStatements: true,
    });

    // Execute whole script (multipleStatements = true)
    const [result] = await pool.query(sql);

    console.log('SQL ejecutado correctamente.');
    await pool.end();
    return 0;
  } catch (err) {
    console.error('Error al ejecutar el SQL:', err && err.message ? err.message : err);
    return 1;
  }
}

// Run
main().then((code) => process.exit(code));
