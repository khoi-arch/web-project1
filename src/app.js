const express = require('express');
const dotenv = require('dotenv');
require('dotenv').config({ path: './src/config/.env' });
const routes = require('./routes');
const app = express();
const db = require('./config/dbConnection')
dotenv.config();
db.connectDB();
const port = process.env.PORT;
app.use(express.json());
routes(app)

app.get('/',(req,res) => {
    res.send('HELLO')
})
app.listen(port, () =>{
    console.log('server is running on port', port)
})