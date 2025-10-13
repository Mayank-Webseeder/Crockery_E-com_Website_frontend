import { X, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  // Mock cart data
  const cartItems: CartItem[] = [
    {
      id: 1,
      name: "Ceramic Dinner Plate",
      price: 45.00,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=200"
    },
    {
      id: 2,
      name: "Handcrafted Bowl",
      price: 32.00,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=200"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15.00;
  const total = subtotal + shipping;

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-2xl transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-border">
            <h3>Shopping Cart ({cartItems.length})</h3>
            <button 
              onClick={onClose}
              className="hover:text-[#d87f4a] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-muted overflow-hidden flex-shrink-0">
                      <ImageWithFallback 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h4 className="mb-2">{item.name}</h4>
                      <p className="text-muted-foreground mb-3">${item.price.toFixed(2)}</p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-border">
                          <button className="p-2 hover:bg-muted transition-colors">
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 border-x border-border">{item.quantity}</span>
                          <button className="p-2 hover:bg-muted transition-colors">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button className="hover:text-destructive transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer with Totals */}
          <div className="border-t border-border px-6 py-6">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-border">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Button className="w-full bg-black text-white hover:bg-black/90 h-12">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
