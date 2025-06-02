-- 🗄️ Create separate databases for each microservice
-- This runs automatically when PostgreSQL container starts

-- Create databases with clean names
CREATE DATABASE auth_db;
CREATE DATABASE catalog_db;
CREATE DATABASE orders_db;
CREATE DATABASE payments_db;
CREATE DATABASE inventory_db;
CREATE DATABASE notifications_db;

-- Create dedicated users for better security
CREATE USER auth_user WITH PASSWORD 'auth_pass123';
CREATE USER catalog_user WITH PASSWORD 'catalog_pass123';
CREATE USER orders_user WITH PASSWORD 'orders_pass123';
CREATE USER payments_user WITH PASSWORD 'payments_pass123';
CREATE USER inventory_user WITH PASSWORD 'inventory_pass123';
CREATE USER notifications_user WITH PASSWORD 'notifications_pass123';

-- Grant permissions (each service can only access its own database)
GRANT ALL PRIVILEGES ON DATABASE auth_db TO auth_user;
GRANT ALL PRIVILEGES ON DATABASE catalog_db TO catalog_user;
GRANT ALL PRIVILEGES ON DATABASE orders_db TO orders_user;
GRANT ALL PRIVILEGES ON DATABASE payments_db TO payments_user;
GRANT ALL PRIVILEGES ON DATABASE inventory_db TO inventory_user;
GRANT ALL PRIVILEGES ON DATABASE notifications_db TO notifications_user;

-- Grant permission to connect to the default postgres database for health checks
GRANT CONNECT ON DATABASE postgres TO auth_user;
GRANT CONNECT ON DATABASE postgres TO catalog_user;
GRANT CONNECT ON DATABASE postgres TO orders_user;
GRANT CONNECT ON DATABASE postgres TO payments_user;
GRANT CONNECT ON DATABASE postgres TO inventory_user;
GRANT CONNECT ON DATABASE postgres TO notifications_user;
