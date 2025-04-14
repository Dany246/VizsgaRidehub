import Navbar from "@/Components/Navbar";
import React from "react";
const UserOrderCheck = ({ orders, auth }) => {
    return (<>
    <Navbar auth={auth}/>
      <div className="p-4">
        <h2 className="text-xl font-bold text-center mb-4">Orders</h2>
        {Array.isArray(orders) && orders.length > 0 ? (
          <table className="min-w-full  text-white border-2 border-stone-700">
            <thead>
              <tr>

                <th className="border-stone-900 border px-4 py-2">Driver</th>
                <th className="border-stone-900 border px-4 py-2">Car</th>
                <th className="border-stone-900 border px-4 py-2">Price</th>
                <th className="border-stone-900 border px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                
                  <td className="border-stone-900 border  px-4 py-2">{order.driver?.name || 'N/A'}</td>
                  <td className="border-stone-900 border px-4 py-2">{order.car?.cartype || 'N/A'}</td>
                  <td className="border-stone-900 border px-4 py-2">{order.price} FT</td>
                  <td className="border-stone-900  border px-4 py-2">
                    {order.status === 1 ? 'In progress' : order.status === 2 ? 'Finished' : order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No orders found.</p>
        )}
      </div>
      </>
    );
  };

  
export default UserOrderCheck;