import React from 'react'
import Spinner from '../Spinner'



//Variables para obtener la fecha actual, para mostrarla en el componente y tambi'en obtener el pronostico futuro
let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
let date = day + '/' + month + '/' + year;

let url = ""
let iconoUrl = ""


const index = ({loadingData, weather, showCard}) => {

  if (loadingData) {
    return <Spinner/>
  }

  if(showCard){
    url = "http://openweathermap.org/img/w/"
    iconoUrl = url + weather.weather[0].icon + ".png"
  }


  return(
    <>
    {
      showCard === true ? (
        <div className="container">
          <div className="card imgCard bg-dark">
            <div className="row g-0 cardCard">
              <div className="col-md-4">
                <img src="https://images.pexels.com/photos/356286/pexels-photo-356286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8 cardBody">
                <div className="card-body">
                  <h1 className="card-title">{weather.name}</h1>
                  <h4 className="card-date">{date}</h4>
                  <h5 className="card-Temperatura">{(weather.main.temp - 273.15).toFixed(1)}ºC</h5>
                  <h6 className= "card-icon"><img className="imgIcon" src={iconoUrl} alt="icono"/>{weather.weather[0].description}</h6>
                  <h5 className="card-Temperatura">Temp Maxima: {(weather.main.temp_max - 273.15).toFixed(1)}ºC</h5>
                  <h5 className="card-Temperatura">Temp.Minima: {(weather.main.temp_min - 273.15).toFixed(1)}ºC</h5>
                  <h5 className="card-Temperatura">Sens. Térmica: {(weather.main.feels_like - 273.15).toFixed(1)}ºC</h5>
                </div>
              </div>
            </div>    
          </div>
        </div>
      ) : (
         <div className="text-center">No hay datos</div>
      )
    }

  </>
  )
}

export default index
