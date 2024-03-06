// document.querySelector("#img").innerHTML

// function checkweather(){
//   const result = document.querySelector("#input").value
//   document.querySelector(".main-box").style.display = "block"
//     if (result === ""){
//     console.log("empty")
//     }
//     else{
//         const api_key = "7eaff0d352d0441bbc78bea0e76d92e2"
//         const apiurl=`https://api.weatherbit.io/v2.0/current?city=${result}&key=${api_key}`;
// fetch(apiurl)
// .then(Response=>Response.json())
// .then(data =>{
//     console.log(data)
//     const city = data.data[0].city_name;
//     const temp = data.data[0].app_temp;
//     const sun = data.data[0].sunset;
//     const speed = data.data[0].wind_spd;
    
//     document.querySelector(".p1").innerHTML = temp + "&deg;C" ;
//     document.querySelector(".p2").innerHTML = city;
//     document.querySelector("#sun").innerHTML = sun + "time";
//     document.querySelector("#speed").innerHTML = speed + " km/h"
//     console.log(temp)
//     console.log(sun)
//     console.log(city)
//     console.log(speed)
// })

// .catch(error=>{
//     console.log(error)
// })

// }
// }
const api_key = "7eaff0d352d0441bbc78bea0e76d92e2"
const url=`https://api.weatherbit.io/v2.0/current?city=bengalore&key=${api_key}`;

function checkweather(){
const result = document.querySelector("#input").value
document.querySelector(".main-box").style.display = "block"
if(result ===""){
 console.log("empty")
}
else{
    const api_key = "7eaff0d352d0441bbc78bea0e76d92e2"
    const url=`https://api.weatherbit.io/v2.0/current?city=${result}&key=${api_key}`;
 fetch(url)
 .then(Response=>Response.json())
 .then(data =>{
     console.log(data)

     const city = data.data[0].city_name;
     const temp = data.data[0].temp;
     const sun = data.data[0].sunset;
     const speed = data.data[0].wind_spd;
     console.log(city)
     console.log(temp)
     console.log(sun)
     console.log(speed)

document.querySelector(".p1").innerHTML = temp + "&deg;C";
document.querySelector(".p2").innerHTML= city
document.querySelector("#sun").innerHTML = sun + "time";
document.querySelector("#speed").innerHTML = speed + " km/h";

 })
 .catch(error=>{
        console.log(error)
    })
}
}