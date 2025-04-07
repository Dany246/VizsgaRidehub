import React, { useState } from 'react'
import Drivercard2 from './Drivercard2'


const DriversChoosing = ({ drivers, setData }) => {
  const [selectedDriverId, setSelectedDriverId] = useState(null);

  const handleSelect = (driverId) => {
    setData((prev) => ({ ...prev, driver: driverId }));
    setSelectedDriverId(driverId);
  };

  return (
    <div className="flex flex-wrap justify-evenly">
      {drivers && drivers.length > 0 ? drivers.map((driver) => (
        <Drivercard2 driver={driver} key={driver.id} setData={setData} selectedDriverId={selectedDriverId} handleSelect={handleSelect} />
      )) : (
        <p>No Drivers found.</p>
      )}
    </div>
  )
}

export default DriversChoosing