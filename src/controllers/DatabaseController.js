const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        try {
            const client = await pool.connect();
            const result = await client.query('SELECT * FROM test_table');
            const results = { 'results': (result) ? result.rows : null};
            response.render('pages/db', results );
            client.release();
          } catch (err) {
            console.error(err);
            response.send("Error " + err);
          }
    }
}