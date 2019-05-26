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

    db.each("SELECT * FROM Classroom", function(err,row){
        console.log(row);

    });
});