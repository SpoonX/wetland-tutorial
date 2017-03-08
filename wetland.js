const path = require('path');

module.exports = {
  entityPath: path.resolve(process.cwd(), 'app', 'entity'),
  /* Template to configure your MySQL (or any other) client. Don't forget to install your client.
   stores    : {
     defaultStore: {
       client    : 'mysql',
       connection: {
         host    : '127.0.0.1',
         user    : 'spoonx',
         database: 'wetland_tutorial'
       }
     }
   }
   */
};
