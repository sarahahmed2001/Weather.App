datalsit=[];
var dataspec={};
let date = new Date()

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthNames= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let count = "cairo";
async function enterPage(country){

    let data =await fetch (`http://api.weatherapi.com/v1/forecast.json?key=a111e7947c9542d3b6820336232202&q=${country}&days=7`)
    if (data.ok && 400 != data.status) {
   let array= await data.json()
   datalsit=array

   displayPage(array,country)
  }
}
enterPage(count)
function displayPage(array ,country){
  let arr=array.forecast.forecastday
  let day=date.getDay();
  let daysnext= (day==6)? 0 : day+1
let hour=date.getHours()
let temp=""
temp+=` <div class="col-md-4 col-sm-10 for1 body-for  rounded p-0   ">
<div class="head d-flex justify-content-between rounded w-100">
  <h5>${days[date.getDay()]}</h5>
  <h5>${date.getDate()}  ${monthNames[date.getMonth()]}  </h5>
  </div>
<h4 class="pt-4 ps-3 mb-3 fs-5">${array.location.name}</h4>
<span class="fw-bold text-white ps-3 mb-3 degree">${array.current.temp_c } </span>
<span class="pb-4 "> <img src="${array.current.condition.icon}" alt="" class=" w-25 mb-3"></span>
<p class="case  ps-3  fs-5">${array.current.condition.text}</p>
<span class="ps-2"><img src="img/bghhj4.png"   alt=""> 20%</span>
<span><img src="img/bghhj5.png" alt=""> 18km/h</span>
<span cla><img src="img/bghhj6.png" alt=""> East</span>

  </div>
  <div class="col-md-4 col-sm-10 for2 body-for text-center p-0 rounded ">
    <div class="head d-flex justify-content-center rounded w-100 mb-3">
      <h5>${days[daysnext]}</h5>
 </div>
      <img src="${arr[1].day.condition.icon}"  alt=""> 
  <p class="fw-bold  fs-1 ps-3 mb-3 ">${arr[1].day.maxtemp_c}</p>
  <p class="fw-bold  ps-3 mb-3 ">${arr[1].day.mintemp_c}</p>
  <p class="case  ps-2 pb-3">${arr[1].day.condition.text}</p>

  
      </div>
  
  <div class="col-md-4 col-sm-10 for3 body-for text-center p-0  rounded mb-3 ">
    <div class="head d-flex justify-content-center rounded w-100 mb-3">
      <h5>${days[daysnext+1]}</h5>
 </div>
 <img src="${arr[2].day.condition.icon}"  alt=""> 
  <p class="fw-bold  fs-1 ps-3 mb-3 ">${arr[2].day.maxtemp_c}</p>
  <p class="fw-bold  ps-3 mb-3 ">${arr[2].day.mintemp_c}</p>
  <p class="case  ps-2 pb-3">${arr[2].day.condition.text}</p>

  
      </div>`
let text= document.getElementById("myrow")
text.innerHTML=temp;

}

 let searchKey=document.getElementById("input1");
searchKey.addEventListener("keyup",function() {
 
  if(searchKey.value.length>=3){
    getsearch(searchKey.value)
  }
});


async function getsearch(key) {
 
 
  enterPage(key);
  
}
