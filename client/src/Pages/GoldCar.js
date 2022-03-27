import React from 'react'
import { useSelector } from 'react-redux'
import { CardCar } from './CardCar'

const GoldCar = () => {

    const car = useSelector(state=>state.carReducer.car)


  return (
    <div>

        <div style={{display:'flex' ,justifyContent:'space-around',flexWrap:'wrap'}}>
            {car.filter(el=>el.goldCar).map(el=><CardCar car={el}/>)}

        </div>
        
    </div>
  )
}

export default GoldCar