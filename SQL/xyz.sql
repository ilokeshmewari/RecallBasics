-- Basic SQL Operations for Internship Task

-- Creating a Database
CREATE DATABASE myDB;
USE myDB;

-- Creating a Table
CREATE TABLE Employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    age INT,
    department VARCHAR(50),
    salary DECIMAL(10,2)
);

-- Inserting Data
INSERT INTO Employees (name, age, department, salary) VALUES
('Lokesh Singh', 25, 'IT', 50000.00),
('Vishal', 30, 'HR', 45000.00),
('Harsh', 28, 'Finance', 55000.00);

-- Selecting Data
SELECT * FROM Employees;
SELECT name, salary FROM Employees WHERE department = 'IT';

-- Updating Data
UPDATE Employees SET salary = 60000.00 WHERE name = 'Lokesh Singh';

-- Deleting Data
DELETE FROM Employees WHERE id = 3;

-- Creating an Index
CREATE INDEX idx_department ON Employees (department);

-- Joining Tables
CREATE TABLE Departments (
    dept_id INT PRIMARY KEY AUTO_INCREMENT,
    dept_name VARCHAR(50) NOT NULL
);

INSERT INTO Departments (dept_name) VALUES ('IT'), ('HR'), ('Finance');

SELECT Employees.name, Employees.salary, Departments.dept_name
FROM Employees
JOIN Departments ON Employees.department = Departments.dept_name;

-- Aggregate Functions
SELECT department, AVG(salary) AS avg_salary FROM Employees GROUP BY department;

-- Getting Highest Salary
SELECT name, salary FROM Employees ORDER BY salary DESC LIMIT 1;

-- Getting Second Highest Salary
SELECT name, salary FROM Employees ORDER BY salary DESC LIMIT 1 OFFSET 1;

-- Dropping a Table
DROP TABLE Employees;