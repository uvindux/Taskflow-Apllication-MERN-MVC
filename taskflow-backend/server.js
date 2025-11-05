const app = require('./app.js');

const PORT = 3000;
const HOST = '127.0.0.1';
const mongoose = require('mongoose');
app.use(cors());
app.use( express.json() );

const url ='mongodb+srv://Manohara:<db_password>@cluster0.99hzwty.mongodb.net/?appName=Cluster0';
const connect =async()=>{
  try{
    await mongoose.connect(url);
    console.log("Connected to the database successfully");

  }
  catch{
    console.log("Error connecting to the database");

  }
}

connect();
const server = app.listen(PORT, HOST, () => {
  console.log(`Server is running without an issue in ${HOST}:${server.address().port}`);
});
