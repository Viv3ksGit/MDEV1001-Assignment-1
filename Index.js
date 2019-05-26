const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(":memory:");

db.serialize(function(){
    // Classroom table creation
    db.run("CREATE TABLE Classroom (Building TEXT, Room_number NUMBER, Capacity NUMBER)");
    
    db.run("INSERT INTO Classroom VALUES('Packard',101,500)");
    db.run("INSERT INTO Classroom VALUES('Painter',514,10)");
    db.run("INSERT INTO Classroom VALUES('Taylor',3128,70)");
    db.run("INSERT INTO Classroom VALUES('Watson',100,30)");
    db.run("INSERT INTO Classroom VALUES('Watson',120,50)");

    //db.each("SELECT FROM Classroom", function(err,row){
        //console.log(row);
   // });
        
        // Department table creation
        db.run("CREATE TABLE Department (Dept_name TEXT, Building TEXT, Budget NUMBER)");

        db.run("INSERT INTO Department VALUES('Biology','Watson',9000)");
        db.run("INSERT INTO Department VALUES('Comp. Sci.','Taylor',100000)");
        db.run("INSERT INTO Department VALUES('Elec. Eng.','Taylor',85000)");
        db.run("INSERT INTO Department VALUES('Finance','Painter',120000)");
        db.run("INSERT INTO Department VALUES('History','Painter',50000)");
        db.run("INSERT INTO Department VALUES('Music','Packard',80000)");
        db.run("INSERT INTO Department VALUES('Physcis','Watson',70000)");

        db.each("SELECT * FROM Department", function(err,row){
            console.log(row);

        });

    });
