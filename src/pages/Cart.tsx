import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
        <Link to="/" className="text-blue-600 hover:text-blue-700">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Shopping Cart</h2>
      <div className="bg-white rounded-lg shadow-sm p-6">
        {items.map(item => (
          <div
            key={item.product.id}
            className="flex items-center py-4 border-b last:border-b-0"
          >
            <img
              src={item.product.imageUrl}
              alt={item.product.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.product.name}
              </h3>
              <p className="text-gray-600">${item.product.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
                className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                className="p-1 rounded hover:bg-gray-100"
              >
                <Plus className="h-4 w-4" />
              </button>
              <button
                onClick={() => removeFromCart(item.product.id)}
                className="p-1 rounded hover:bg-gray-100 text-red-600"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
        <div className="mt-6 flex justify-between items-center">
          <div className="text-lg font-bold text-gray-900">
            Total: ${total.toFixed(2)}
          </div>
          <Link
            to="/checkout"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}