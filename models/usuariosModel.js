var pool = require('./bd');
var md5 = require('md5');

async function getUser(user, password) {
    try {
        console.log('datos de conexion: '+process.env.MySQL_HOST+' - '+process.env.MySQL_USER+' - '+process.env.MySQL_PASSWORD+' - '+process.env.MySQL_DB_NAME)
        var query = 'select * from usuarios where usuario = ? and password = ? limit 1';
        var rows = await pool.query(query, [user, md5(password)]);
        return rows[0];
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getUser}