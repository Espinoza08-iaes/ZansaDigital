-- Create database and contactos table
CREATE DATABASE IF NOT EXISTS zansadb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE zansadb;

CREATE TABLE IF NOT EXISTS contactos (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200),
  company VARCHAR(200),
  email VARCHAR(200),
  phone VARCHAR(80),
  project_type VARCHAR(150),
  budget VARCHAR(100),
  timeline VARCHAR(100),
  description TEXT,
  comm_prefs VARCHAR(200),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
