import React from 'react'

const DriversChoosing = (drivers) => {
  return (
    <div className="flex flex-wrap justify-evenly">
                {drivers && drivers.length > 0 ? drivers.map((driver) => (
                    <Drivercard driver={driver} key={driver.id} />
                )) : (
                    <p>No Drivers found.</p>
                )}
            </div>
  )
}

export default DriversChoosing