CREATE DATABASE employee_tracker_db;
\c employee_tracker_db;
CREATE TABLE department(
    id SERIAL PRIMARY KEY, 
    name VARCHAR(30) UNIQUE NOT NULL
);
CREATE TABLE role(
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL, 
    salary DECIMAL NOT NULL, 
    department_id INTEGER NOT NULL 
);
CREATE TABLE employee(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER
);