import {gql} from '@apollo/client'

export const GET_WEATHER = gql`
    query getCityByName($name:String!){
        getCityByName(name:$name){
            name
            country
            weather{
                summary{
                    title
                    description
                    icon
                }
                temperature{
                    actual
                    feelsLike
                    max
                    min
                }
                wind{
                    speed
                    deg
                }
                
                clouds{
                    all
                    visibility
                    humidity
                }
                timestamp
            }
        }
    }

`