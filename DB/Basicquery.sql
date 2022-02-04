Create Database DB;

create table employee(id int primary key, ename varchar(20),age int);

ALTER TABLE employee
ADD Email varchar(255);

insert into employee values(1,'drashti',21,'drashti@aimdek.com');
insert into employee values(2,'tirth',12,'tirth@aimdek.com');
insert into employee values(3,'alpesh',46,'alpesh@aimdek.com');
insert into employee values(4,'bhamini',44,'bhamini@aimdek.com');
insert into employee values(5,'yash',20,'yash@gmail.com');

select * from employee;

select * from employee where age=21;

select * from employee order by age;

select * from employee order by ename desc;

SELECT * FROM employee
WHERE Email LIKE '%aimdek.com';


SELECT COUNT(age), ename
FROM employee
GROUP BY ename;

select * from employee where age=21 or age=12;