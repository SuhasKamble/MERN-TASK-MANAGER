const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://suhas:suhas@cluster0.cj8de.mongodb.net/Task-Manager?retryWrites=true&w=majority")
.then(()=>console.log("Database is connected..."))
.catch((e)=>console.log("Database is not connected..."));