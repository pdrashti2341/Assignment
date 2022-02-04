/* update */
UPDATE employee
SET age=21
WHERE id=5;

/*Delete */
DELETE FROM employee WHERE id=5;
 
 /*Extra table for drop*/
Create table staf(
s_id int PRIMARY KEY,
s_name varchar(20),
age int,
salary int);

INSERT INTO staf VALUES (1,'darshti',21,60000);
INSERT INTO staf VALUES (2,'tirth',12,40000);
INSERT INTO staf VALUES (3,'alpesh',46,90000);
INSERT INTO staf VALUES (4,'bhamini',44,50000);
INSERT INTO staf VALUES (5,'yash',21,90000);
INSERT INTO staf VALUES (6,'krupal',23,100000);

Drop table staf;


/*Table 1 is created*/
select * from staff;


/*Tbale 2 is created*/
Create table org(
o_id int PRIMARY KEY,
o_name varchar(20),
s_id int,
s_name varchar(20));

INSERT INTO org VALUES (1,'abc',1,'drashti');
INSERT INTO org VALUES (2,'def',2,'tirth');
INSERT INTO org VALUES (3,'ghi',3,'alpesh');
INSERT INTO org VALUES (4,'jkl',4,'bhamini');
INSERT INTO org VALUES (5,'mno',5,'yash');
INSERT INTO org VALUES (10,'xyz',20,'riken');

select * from org;
/*################################################## Task 1 ###########################################################*/


/* Join */

SELECT staff.s_name , org.o_name FROM staff INNER JOIN org ON staff.s_id = org.s_id;

SELECT staff.s_name , org.o_name FROM staff LEFT JOIN org ON staff.s_id = org.o_id; 

SELECT staff.s_name , org.o_name FROM staff RIGHT JOIN org ON staff.s_id = org.o_id;

SELECT * FROM staff FULL OUTER JOIN org ON staff.s_id=org.o_id;

/* table 3 */

Create table dep(
d_id int,
o_id int,
d_name varchar(20),
o_name varchar(20));

INSERT INTO dep VALUES (1,1,'computer','abc');
INSERT INTO dep VALUES (2,2,'it','def');
INSERT INTO dep VALUES (3,3,'ec','ghi');
INSERT INTO dep VALUES (4,4,'civil','jkl');
INSERT INTO dep VALUES (5,5,'auto','mno');
INSERT INTO dep VALUES (6,9,'electical','pqr');

select * from dep;

/* three table join */

SELECT staff.s_id,staff.s_name, org.o_name, dep.d_name FROM ((staff INNER JOIN org ON staff.s_id = org.o_id)
INNER JOIN dep ON org.o_id = dep.d_id);



/*##################################################  TASK 2 ###########################################################*/

/*Procedure: use for re-usability for the code which is use again and again*/

/*Procedure 1*/

CREATE PROCEDURE s1
AS
SELECT * FROM org  
GO;

EXEC s1;

/*Procedure 2*/

CREATE PROCEDURE s2(
@dept_id int )
AS
BEGIN
SELECT * FROM dep WHERE d_id = @dept_id
END;

EXEC s2 @dept_id = 2;

/*Procedure with output*/

ALTER PROCEDURE s2(
@d int,
@count int OUTPUT)
AS
BEGIN
SELECT @count= COUNT(*) FROM dep WHERE d_id = @d
END;

DECLARE @count int
EXEC s2 @d = 2 , @count = @count OUTPUT;

select @count AS 'total';


/*############################### VIEW ##############################*/

Create view v1 as
select * from staff  where age > 30;

select * from v1;

/*################################################# TASK 3 ###########################################################*/

/*
  VIEW : used to create virtual table with required columns and not accepting parameters

  procedure: It's for re-usability.we can save procedure.we can pass parameters on procedures.



*/


/*######################################### Error Handling ###############################################################*/