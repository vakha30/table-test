const db = require('./db')

const getTable = (body) => {
    return new Promise(function(resolve, reject) {
        db.query(`SELECT * FROM table_test ORDER BY count DESC`, (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

const sortTable = (body) => {
    const { type, order, filterType, filterText, filterCondition, offsetPage } = body
    
    return new Promise(function(resolve, reject) {
        let sql = ''
        if (filterType && filterCondition && filterText) {
            sql = `SELECT * FROM table_test WHERE ${filterType} ${filterCondition} '${filterText}' ORDER BY ${type} ${order} LIMIT 5 OFFSET ${offsetPage}`
        } else {
            sql = `SELECT * FROM table_test ORDER BY ${type} ${order} LIMIT 5 OFFSET ${offsetPage}`
        }
        db.query(sql, (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

module.exports = {
    getTable,
    sortTable
}