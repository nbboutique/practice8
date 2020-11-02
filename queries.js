const Pool = require('pg').Pool
const pool = new Pool({
 host: 'ec2-18-203-7-163.eu-west-1.compute.amazonaws.com',
  database: 'd7hv8obua35eem',
  user:'dxwravjimamgwx',
  password: 'b0ebbcdb9f15a2809e50a92919fd264e20f6de133029e64bb5a7829aac0cdbf1',
  port: 5432,
  ssl:{rejectUnauthorized:false},
})
const getUsers = (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
  pool.query('SELECT * FROM public.table ORDER BY id ASC', (error, results) => {
      
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM public.table WHERE id = $1', [id], (error, results) => {
      
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}







module.exports = {
  getUsers,
  getUserById  
}