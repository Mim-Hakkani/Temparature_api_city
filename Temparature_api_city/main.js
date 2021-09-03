document.getElementById('temp-submit').addEventListener('click',function(){
    
    const TempInput = document.getElementById('temp-input')
          Tempvalue = TempInput.value 
          TempInput.value =''
          


    

    const api = 'aa28e8bc241a827e07a18195d0591e52'

    const url =`https://api.openweathermap.org/data/2.5/weather?q=${Tempvalue}&appid=${api}&units=metric`
   
  

    fetch(url)
    .then(res=>res.json())
    .then(data =>Weather(data))


})

const Weather =(temprature) =>{
    console.log(temprature);
   const details = document.getElementById('temp-details')
   details.innerHTML =`
            <img src="https://openweathermap.org/img/wn/${temprature.weather[0].icon}@2x.png" alt="">
            <h1>${temprature.name}</h1>
            <h3><span>${temprature.main.temp}</span>&deg;C</h3>
            <h1 class="lead">${temprature.weather[0].main}  ${temprature.weather[0].description}</h1>
   
   `
    
}