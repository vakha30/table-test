const Pool = require('pg').Pool

const pool = new Pool({
    user: 'my_user',
    host: 'localhost',
    database: 'table_test_db',
    password: 'root',
    port: 5432
})

module.exports = pool