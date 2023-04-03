const pool = require("./DB");

const getRestockReport = (request, response) => {
    pool.query('SELECT * FROM inventory_item', (error, results) => {
        if (error) {
          throw error;
        }
        let rows = results.rows;
        let res = [];
        //console.log(rows);
        for (let i = 0; i < rows.length; i++) {
            res.push({
                itemname: rows[i].itemname,
                currentquantity: rows[i].currentquantity,
                minquantity: rows[i].maxquantity * 0.25
            })
        }
        response.status(200).json(res);
    });

}

module.exports = getRestockReport;
