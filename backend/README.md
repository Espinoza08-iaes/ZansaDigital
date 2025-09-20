Backend helper scripts

This folder contains a small helper script to run the SQL DDL without requiring the mysql CLI in your PATH.

Run the create-table SQL using Node (reads backend/.env if present):

1. Create a local backend/.env with your DB credentials (do NOT commit):

DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASS=tu_password
DB_NAME=zansadb

2. From repository root run:

cd backend
node scripts/run_create_table.js

If you prefer the MySQL client, use one of these PowerShell-friendly alternatives:

Read and pipe the SQL file into the mysql client:
Get-Content .\sql\create_table.sql | mysql -u root -p -h 127.0.0.1 -P 3306

# Or use cmd.exe to allow < redirection
cmd /c "mysql -u root -p -h 127.0.0.1 -P 3306 < .\sql\create_table.sql"

# Or open the mysql client and run:
mysql -u root -p -h 127.0.0.1 -P 3306
-- then at the mysql prompt: SOURCE path\\to\\create_table.sql;
