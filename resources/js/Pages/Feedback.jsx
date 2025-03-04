import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const  Feedback= () =>  {
  const [rating, setRating] = useState(4)

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)

    // other logic
  }
  // Optinal callback functions
  return (
    <div className="">
      <Rating
        onClick={handleRating}
        initialValue={rating}
        
        /* Available Props */
      />
    </div>
  )
}
export default Feedback;