const express = require('express');
const app = express();
const port =3000;

projectData ={};

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(express.static('public'))

const cors = require('cors');
const { request, response } = require('express');
app.use(cors());

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





const server = app.listen(port, listening);
function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
};




//////////////////////////////////////

app.get('/getAll', (request, response)=>{
  
response.send(projectData).status(200).end();
})




app.post('/postAll', (request, response)=>{

  projectData={
    temp:request.body.temp,
    date:request.body.date,
    content: request.body.content
  }


  response.send(projectData).status(200).end();
  })
  
