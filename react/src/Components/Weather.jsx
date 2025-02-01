import React from 'react'

 const Weather = () => {
    let temp=56;
 if(temp<50){
    return <h1>It's cold outside</h1>;
}else if(temp > 50 && temp < 50){
    return <h1>it's nice outside</h1>
} else if(temp>50){
    return <h1>its hot outside!</h1>
}
}
export default Weather;
