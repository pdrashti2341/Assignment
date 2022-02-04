BEGIN TRANSACTION 

Insert into employee values (10,'viraj',24,'viraj@aimdek.com');
delete from employee where id=10;
rollback  TRANSACTION;

select * from employee;

Insert into employee(id,ename,age,Email) values (12,'piyush',22,'piyush@aimdek.com');
delete from employee where id=12;

Alter table employee
Add e_id int NOT NULL IDENTITY

/*FUNCTIONS*/



SELECT COUNT(*) FROM employee;  
SELECT COUNT(DISTINCT age) FROM employee;
SELECT SUM(age) FROM employee;  
SELECT AVG(age) FROM employee; 
SELECT max(age) FROM employee;  
SELECT min(age) FROM employee;  



SELECT len(ename) FROM employee;
SELECT ROUND(235.415, 8) AS RoundValue;


