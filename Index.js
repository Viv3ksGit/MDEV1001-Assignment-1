const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(":memory:");

db.serialize(function(){
    // Classroom table creation - question 1
    db.run("CREATE TABLE Classroom (Building TEXT, Room_number NUMBER, Capacity NUMBER)");
    
    db.run("INSERT INTO Classroom VALUES('Packard',101,500)");
    db.run("INSERT INTO Classroom VALUES('Painter',514,10)");
    db.run("INSERT INTO Classroom VALUES('Taylor',3128,70)");
    db.run("INSERT INTO Classroom VALUES('Watson',100,30)");
    db.run("INSERT INTO Classroom VALUES('Watson',120,50)");


    // Question 2 
   // db.each("SELECT Building, Room_number FROM Classroom WHERE Capacity > 50", function(err,row){
        //console.log(row);
//});
        
        // Department table creation - question 1
        db.run("CREATE TABLE Department (Dept_name TEXT, Building TEXT, Budget NUMBER)");

        db.run("INSERT INTO Department VALUES('Biology','Watson',90000)");
        db.run("INSERT INTO Department VALUES('Comp. Sci.','Taylor',100000)");
        db.run("INSERT INTO Department VALUES('Elec. Eng.','Taylor',85000)");
        db.run("INSERT INTO Department VALUES('Finance','Painter',120000)");
        db.run("INSERT INTO Department VALUES('History','Painter',50000)");
        db.run("INSERT INTO Department VALUES('Music','Packard',80000)");
        db.run("INSERT INTO Department VALUES('Physcis','Watson',70000)")

        //question 3
         //db.each("SELECT Dept_name FROM Department WHERE Budget > 85000", function(err,row){
         //console.log(row);
        //});
       
        //question 4
        db.each("SELECT d.Dept_name, SUM(c.Capacity) as 'Total Capacity' FROM Classroom AS c, Department AS d WHERE d.Building = c. Building GROUP BY d.dept_name", function(err,row){

  
        console.log(row);
    });

    });
