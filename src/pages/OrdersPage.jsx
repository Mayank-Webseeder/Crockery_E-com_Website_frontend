// src/pages/OrdersPage.jsx
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { StayInspired } from "../components/StayInspired";
import { SectionDivider } from "../components/SectionDivider";

// Mock data for orders
const orders = [
  {
    orderId: "#3456_7890",
    date: "October 15, 2025",
    status: "Delivered",
    total: 124.98,
  },
  {
    orderId: "#2345_6789",
    date: "September 28, 2025",
    status: "Delivered",
    total: 89.99,
  },
  {
    orderId: "#1234_5678",
    date: "August 12, 2025",
    status: "Cancelled",
    total: 159.99,
  },
];

export function OrdersPage() {
  return (
    <>
    <div className="w-full bg-background flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-left">
          <h1 className="text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            My Orders
          </h1>
        </div>

        <div className="bg-white p-8 lg:p-12 rounded-lg shadow-sm border border-gray-200">
          {orders.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">You have not placed any orders yet.</p>
              <Button asChild className="bg-black text-white hover:bg-gray-800">
                <Link to="/products">Start Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Table Header for larger screens */}
              <div className="hidden md:grid grid-cols-4 gap-4 pb-4 border-b font-medium text-muted-foreground">
                <div className="col-span-1">Order</div>
                <div className="col-span-1">Date</div>
                <div className="col-span-1">Status</div>
                <div className="col-span-1 text-right">Total</div>
              </div>
              {/* Order List */}
              {orders.map((order) => (
                <div key={order.orderId} className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center py-4 border-b last:border-b-0">
                  {/* Order ID */}
                  <div className="col-span-2 md:col-span-1">
                    <span className="md:hidden text-muted-foreground text-sm">Order: </span>
                    <span className="font-medium text-blue-600">{order.orderId}</span>
                  </div>
                  {/* Date */}
                  <div className="col-span-1">
                    <span className="md:hidden text-muted-foreground text-sm">Date: </span>
                    <span>{order.date}</span>
                  </div>
                  {/* Status */}
                  <div className="col-span-1">
                     <span className="md:hidden text-muted-foreground text-sm">Status: </span>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  {/* Total and Button */}
                  <div className="col-span-2 md:col-span-1 flex justify-between items-center md:justify-end md:gap-4">
                    <div>
                        <span className="md:hidden text-muted-foreground text-sm">Total: </span>
                        <span>${order.total.toFixed(2)}</span>
                    </div>
                    <Button variant="outline" size="sm" className="h-8">View</Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
    <StayInspired />
      <SectionDivider />
    </>
  );
}