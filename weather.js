const apikey="You may enter your api key here";
const main=document.getElementById('main');
const form=document.getElementById('form');
const search=document.getElementById('search');

const url=(city)=>
`https:api,openweathermap.org/data/2.5/weather?
q=${city}&appid=${apikey}`;
async function getWeatherByLocation(city){
    const resp=await fetch(url(city),{
        origin:"cors"
    });
    const respData=await resp.json();
    addWeatherToPage(respData);
}
function addWeatherToPage(data){
    const temp=ktoc(data.main.temp);
    const weather=document.createElement('div')
    weather.classList.add('weather');
    weather.innerHTML=`
    <h2> <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@22x.png" />
    ${temp}°C
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@22x.png" /> </h2>"
    <small>${data.weather[0].main}</small>`;
    //Cleanup
    main.innerHTML="";
    main.appendChild(weather);
};
function ktoc(k)
{
    return Math.floor(K-273.15);
}
form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    const city=search.ariaValueMax;
    if(city)
    {
        getWeatherByLocation(city)

    }
});
