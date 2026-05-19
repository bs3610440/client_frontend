import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight,
  CreditCard,
  Truck,
  Shield,
  Gift,
  X
} from 'lucide-react';
import { useCart } from './CartContext.jsx';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  const subtotal = getTotalPrice();
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal - discount + shipping;

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'SAVE10' && !promoApplied) {
      setDiscount(subtotal * 0.1);
      setPromoApplied(true);
    } else if (promoCode.toUpperCase() === 'WELCOME15' && !promoApplied) {
      setDiscount(subtotal * 0.15);
      setPromoApplied(true);
    } else {
      alert('Invalid promo code');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-pink-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Your Cart is Empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/">
              <button className="bg-gradient-to-r from-pink-600 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
          <p className="text-gray-500 mt-1">{cartItems.length} items in your cart</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Cart Items Section */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-100 text-sm font-semibold text-gray-600">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-center">Total</div>
              </div>

              {/* Cart Items */}
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col md:grid md:grid-cols-12 gap-4 p-4 border-b border-gray-100 hover:bg-pink-50/30 transition"
                >
                  {/* Product Info */}
                  <div className="flex gap-4 md:col-span-6">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.category}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 text-xs hover:text-red-700 mt-2 flex items-center gap-1"
                      >
                        <Trash2 className="w-3 h-3" /> Remove
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="md:col-span-2 flex items-center justify-between md:justify-center">
                    <span className="md:hidden text-gray-600 text-sm">Price:</span>
                    <span className="font-semibold text-gray-800">{item.price}</span>
                  </div>

                  {/* Quantity */}
                  <div className="md:col-span-2 flex items-center justify-between md:justify-center gap-2">
                    <span className="md:hidden text-gray-600 text-sm">Qty:</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-pink-100 transition"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-pink-100 transition"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="md:col-span-2 flex items-center justify-between md:justify-center">
                    <span className="md:hidden text-gray-600 text-sm">Total:</span>
                    <span className="font-bold text-pink-600">
                      ₹{parseInt(item.price.replace('₹', '')) * item.quantity}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Clear Cart Button */}
              <div className="p-4 border-t border-gray-100">
                <button
                  onClick={clearCart}
                  className="text-red-500 text-sm hover:text-red-700 flex items-center gap-1"
                >
                  <Trash2 className="w-4 h-4" /> Clear Cart
                </button>
              </div>
            </div>

            {/* Continue Shopping */}
            <div className="mt-6">
              <Link to="/">
                <button className="text-pink-600 hover:text-pink-700 font-medium flex items-center gap-2">
                  ← Continue Shopping
                </button>
              </Link>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="lg:w-96">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
              
              {/* Items Count */}
              <div className="flex justify-between py-2 text-gray-600">
                <span>Subtotal ({cartItems.length} items)</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              
              {/* Shipping */}
              <div className="flex justify-between py-2 text-gray-600">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
              </div>
              
              {/* Discount */}
              {discount > 0 && (
                <div className="flex justify-between py-2 text-green-600">
                  <span>Discount</span>
                  <span>-₹{discount.toLocaleString()}</span>
                </div>
              )}

              {/* Divider */}
              <div className="border-t border-gray-200 my-3"></div>
              
              {/* Total */}
              <div className="flex justify-between py-2 text-lg font-bold text-gray-800">
                <span>Total</span>
                <span className="text-pink-600">₹{total.toLocaleString()}</span>
              </div>

              {/* Promo Code */}
              <div className="mt-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Promo code"
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 text-sm"
                  />
                  <button
                    onClick={applyPromoCode}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-pink-100 transition text-sm font-medium"
                  >
                    Apply
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2">Try: SAVE10 (10% off) or WELCOME15 (15% off)</p>
              </div>

              {/* Checkout Button */}
              <Link to="/checkout">
                <button className="w-full mt-6 bg-gradient-to-r from-pink-600 to-orange-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition flex items-center justify-center gap-2">
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </button>
              </Link>

              {/* Features */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <Shield className="w-3 h-3" /> Secure Payment
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <Truck className="w-3 h-3" /> Free Shipping on orders above ₹999
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Gift className="w-3 h-3" /> Free Gift on orders above ₹1999
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}