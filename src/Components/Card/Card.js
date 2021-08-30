import './Card.scss'
import {FaTemperatureLow, FaTemperatureHigh  ,FaCloudSun  , FaCloudRain} from 'react-icons/fa'
import {IoMdSunny , IoIosTime} from 'react-icons/io'
import moment, { Moment } from 'moment'
const Card = ({data}) =>{

    console.log(data)

    return(
        <div className='cardRoot'>
           {
               data ? (
                    <div className='card'>
                        <div>
                            <h1>{data.getCityByName.name} / {data.getCityByName.country} </h1>
                        </div>
                        <div>   
                                {
                                    data.getCityByName.weather.temperature.actual > 290 ? (
                                        <h2><FaTemperatureHigh  className='iconsHot'/> {data.getCityByName.weather.temperature.actual} </h2>
                                    ) : (
                                        <h2><FaTemperatureLow  className='iconsNorm'/> {data.getCityByName.weather.temperature.actual} </h2>
                                    )
                                }
                        </div>
                        <div>
                                {
                                    data.getCityByName.weather.summary.description.includes('clouds') ? (
                                        <h2><FaCloudSun  className='iconsCloud'/> {data.getCityByName.weather.summary.description}</h2>
                                    ) : data.getCityByName.weather.summary.description.includes('clear') ? (
                                        <h2><IoMdSunny  className='iconsSun'/> {data.getCityByName.weather.summary.description}</h2>
                                    ) : data.getCityByName.weather.summary.description.includes('rain') ? (
                                        <h2>
                                           <FaCloudRain className='iconsRain'/> {data.getCityByName.weather.summary.description} 
                                        </h2>
                                    ) : (
                                        console.log('i')
                                    )
                                }
                                <h2>
                                    <IoIosTime className='iconsTime'/>   { moment().format('LT') }  
                                </h2>
                        </div>
                    </div>
               ) : (
                   <p>Empty</p>
               )
           }
        </div>
    )
}

export default Card;        