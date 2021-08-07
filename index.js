const mongoose = require('mongoose');

const express = require('express')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 3002
// const port = 3002;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
mongoose.connect("mongodb+srv://newAdmin:123@cluster0.l0tnk.mongodb.net/reactbudgettracker?retryWrites=true&w=majority", 
	{useNewUrlParser: true, useUnifiedTopology: true}
	);
// mongoose.connect("mongodb+srv://newAdmin:123@cluster0.l0tnk.mongodb.net/productDatabase?retryWrites=true&w=majority", 
// 	{useNewUrlParser: true, useUnifiedTopology: true}
// 	);

let db = mongoose.connection; 

// connect to database

app.use('/api/users', require('./routes/users'))
app.use('/api/categories', require('./routes/categories'))
app.use('/api/entries', require('./routes/entries'))

app.listen(port , () =>{
    console.log(`Server running on port ${port}`)
})