export default function OrdersTable() {
  const orders = [
    { id: "#ORD001", customer: "John Doe", total: "Rs. 4,999", status: "Delivered" },
    { id: "#ORD002", customer: "Jane Smith", total: "Rs. 2,499", status: "Pending" },
    { id: "#ORD003", customer: "Alex Brown", total: "Rs. 8,199", status: "Cancelled" },
  ];

  return (
    <div className="bg-white rounded-xl shadow border p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="pb-2">Order ID</th>
              <th className="pb-2">Customer</th>
              <th className="pb-2">Total</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b last:border-0">
                <td className="py-3">{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.total}</td>
                <td>
                  <span className="px-3 py-1 rounded-full text-sm bg-gray-100">
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
