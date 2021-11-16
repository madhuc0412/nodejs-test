const express = require('express');
const bodyParser = require('body-parser');
const calculatorService = require('./calculator');



const app = express();

const router = express.Router();

app.use(express.json());       // application/json
app.use(express.urlencoded({
  extended: true
}));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


// app.get('/', (req, res) => res.send('App is working'));

app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});


app.post('/submit', (req, res) => {        
 

  const data = req.body;
  const num1 = data.number1;
  const num2 = data.number2;

  const result = calculatorService.Addition(num1,num2);


  console.log(req.body);
  res.json(result);

});

const PortNo = 3000
const HostURL = '127.0.0.1'


app.listen(PortNo, HostURL, () => {
  console.log(`App listening at http://${HostURL}:${PortNo}`)
})