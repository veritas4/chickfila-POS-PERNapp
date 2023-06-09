//query menu item name, price, dietary restrictions, and photo columns (to be used in customer view and menu view)

const pool = require('./DB');
/**
     * Gets all of the menu items
     * @param {request} 
     * @param {response}
     * @returns results
     */
const getCustomerMenu = (request, response) => {
    pool.query('SELECT * FROM menu_item', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  };


module.exports = getCustomerMenu;