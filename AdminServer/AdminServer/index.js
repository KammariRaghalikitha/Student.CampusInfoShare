const express = require('express') 
const session = require('express-session')
const cors = require('cors')
const { MongoClient } = require('mongodb')

const app = express()

app.use(cors())

app.use(express.json())

app.use(session({
    secret: 'ThisisasecretKey',
    resave: false,
    saveUninitialized: true,
  }));

function isAuthenticated(req, res, next) {
  if (req.session.username) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
}

const mongoUri = "mongodb://127.0.0.1:27017"

//const mongoUri = "mongodb+srv://prasad:prasad@cluster0.hkxylmc.mongodb.net/?retryWrites=true&w=majority" 

const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
    try {
      await client.connect();
      console.log('Connected to MongoDB Atlas');
    } catch (error) {
      console.error('Error connecting to MongoDB Atlas:', error);
    }
  }

connectToMongoDB();

const db = client.db('project-admin');

const collection = db.collection('admins');

async function findAdmin(username, pwd) {
  const filter = { mail: username, password: pwd };
  const cursor = collection.find(filter);
  const result = await cursor.toArray(); 
  if (result.length > 0) {
    return true; 
  } else {
    return false;
  }
}



app.get('/', (req, res)=>{
    res.send('Hi')
})

app.post('/admin-login', async (req, res)=> {
  console.log("Admin login request data: ",req.body)
  let result = await findAdmin(req.body.username, req.body.password);
  console.log(result)
  if(result) {
    req.session.username = req.body.username
    console.log(req.session, req.session.username)
    res.send({msg: "Access Granted"})
  }
  else 
  res.send({msg: "Access Denied"})
})

app.post('/verify-user', isAuthenticated, (req, res) => {
    res.send({msg: "ok"});
  });

app.post('/logout', isAuthenticated, (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
        res.send({msg : "Some error occured"})
      }
      res.send({msg:"Successfully Logged out."}); // Redirect to the login page after logout
    });
});
  

app.listen(3080, ()=> {
    console.log("Admin server is running")
})