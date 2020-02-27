const db = require('./server/db/database')
const app = require('./server/index')

const port = 3000; 

db.sync({force: true})
    .then(function(){
        app.listen(port, function () {
            console.log("Knock, knock");
            console.log("Who's there?");
            console.log(`Your server, listening on port ${port}`);
          });
    })
