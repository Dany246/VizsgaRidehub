import React from 'react'
import Drivercard2 from './Drivercard2'


const DriversChoosing = ({drivers}) => {
      
  return (
    <div className="flex flex-wrap justify-evenly">
                {drivers && drivers.length > 0 ? drivers.map((driver) => (
                    <Drivercard2 driver={driver} key={driver.id} />
                )) : (
                    <p>No Drivers found.</p>
                )}
            </div>
  )
}

export default DriversChoosing