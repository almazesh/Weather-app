import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header"
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER } from '../../Graphql/Query';
import { useState } from "react";
const Main = () =>{
    const [city , setCity] = useState('')
    const [getWeather , { loading , data ,  error} ] = useLazyQuery(GET_WEATHER , {
        variables: { name: city }
    })

    if(error) return <h1>Error found</h1>



    return(
        <>
           <div>
               <Header onSearch={setCity} onclicks={getWeather}/>
               <Card data={data} />
           </div>
        </>
    )
}

export default Main;