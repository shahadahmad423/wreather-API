const apiKey = '&appid=7360b26b508f011373fb3c782590840c&units=imperial';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
document.getElementById('generate').addEventListener('click', generate);

function generate(){  
  const Zip_code=  document.getElementById('zip').value;
 
  console.log( Zip_code )
    const madeurl =`${baseURL}${Zip_code}${apiKey}`;

    console.log(madeurl);
    retrieveData(madeurl);

  }
/* Function to POST data */
  const postData = async ( url = '', data = {})=>{
  console.log(data)
  const response = await fetch(url, {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  // mode: 'cors', // no-cors, cors, *same-origin
  // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: JSON.stringify(data), // body data type must match "Content-Type" header       
  });
  
  try {
    const newData = await response.json();
    // console.log(newData);
    return newData
  }catch(error) {
  console.log("error", error);
  // appropriately handle the error
  }
  }


  const retrieveData = async (url) =>{
    const request = await fetch(url);
    try {
    // Transform into JSON
    const projectData = await request.json()
    console.log(projectData)
    console.log(projectData.main.temp)

    ////////temp
    vew_temp=document.getElementById('temp')
    temp = projectData.main.temp 
    vew_temp.innerHTML=temp+" Degree";

    ////////date
    const date1 = new Date().toDateString();
    let date = document.getElementById('date')
    date.innerHTML= date1;

    //////feelings
    const feeling = document.getElementById('feelings').value;
    console.log(feeling )
    let content = document.getElementById("content")
    content.innerHTML=feeling;
    return projectData;

 
    // Write updated data to DOM elements

    }
    catch(error) {
      console.log("error", error);
      let not = document.getElementById("Not_found")
      not.innerHTML="Not Found"
      // appropriately handle the error
    }
   }





   