import React from 'react'
import { router } from "@inertiajs/react";

export const OrderButton = () => {
    
  return (
    <div className="p-6 mx-8 mt-2">
    <button type="submit" className="w-full block mx-auto rounded-full bg-stone-900 hover:shadow-lg font-semibold text-white px-6 py-2">
        Order
    </button>
</div>
  )
}
