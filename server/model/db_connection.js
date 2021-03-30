if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}
const { Pool } = require('pg');

const PG_URI = `${process.env.DATABASE_URL}`
// const PG_URI = `postgres://xbjuksrk:G7GxObZy5SQhCcLzwuMKeaxvdjpBwf2R@queenie.db.elephantsql.com:5432/xbjuksrk`
const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
