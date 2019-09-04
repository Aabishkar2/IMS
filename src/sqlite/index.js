const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/chinook.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the chinook database.');
});

function getAllData() {
    db.serialize(() => {
        db.each(`SELECT * from tests`, (err, row) => {
          if (err) {
            console.error(err.message);
          }
          console.log(row.id + "\t" + row.name);
        });
    });
}

function closeConnection() {
    db.close((err) => {
        if (err) {
          console.error(err.message);
        }
        console.log('Close the database connection.');
      });
}

export {getAllData, closeConnection}; // a list of exported variables