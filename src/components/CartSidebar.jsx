import { X, Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "./ui/utils";
import { useCart } from "../context/CartContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CartSidebar({ isOpen, onClose }) {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const isEmpty = cartItems.length === 0;
  const shippingMessage = "Free shipping will be applied at checkout!";

const handleBrowseClick = () => {
    if (onNavigate) {
      onNavigate("products");
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={cn(
          // THIS IS THE FIX: Explicitly set max-width for larger screens.
          "fixed right-0 top-0 h-full w-screen max-w-md bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-lg font-semibold">
            Your cart ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isEmpty ? (
          <div className="flex flex-col items-center justify-center flex-grow p-6 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-24 h-24 text-gray-300 mb-4"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 12.09a2 2 0 002 1.91h7.44a2 2 0 002-1.91L23 6H6" />
            </svg>
            <p className="text-muted-foreground mb-4">Your cart is currently empty!</p>
            <p className="text-sm text-gray-500 mb-6">
              Browse our store, find products, and happy shopping!
            </p>
            <Button
              className="bg-black text-white hover:bg-black/90 px-6 py-3"
              onClick={handleBrowseClick}
            >
              Browse products
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-md flex-shrink-0"
                  />
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between">
                      <span className="font-medium text-sm pr-2">{item.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm whitespace-nowrap">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t space-y-3">
              <h4 className="text-md font-semibold">Coupon / Gift Card</h4>
              <div className="flex gap-2">
                <Input placeholder="Enter code" className="flex-1 h-9" />
                <Button className="bg-black text-white hover:bg-black/90 h-9 px-4">Apply</Button>
              </div>
            </div>
            <div className="p-6 border-t bg-gray-50 space-y-4">
              <p className="text-center text-sm text-gray-600 mb-2">{shippingMessage}</p>
              <div className="flex justify-between items-center text-md font-medium">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground text-center"><br />Shipping, taxes, and discounts calculated at checkout.<br /></p>
              <div className="flex flex-col gap-3">
                <Button variant="outline" className="w-full py-3 h-auto border-black">View cart</Button>
                <Button className="w-full bg-[#d87f4a] text-white hover:bg-[#b86a3d] py-3 h-auto">Checkout</Button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

