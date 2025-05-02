
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function MiniCart() {
  const { state, dispatch } = useCart()

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id })
  }

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="bg-white shadow-lg rounded-lg ring-1 ring-black ring-opacity-5">
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Shopping Cart</h3>
        {state.items.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900 truncate">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      ${item.price} × {item.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>
              <Link
                to="/cart"
                className="mt-6 block w-full bg-blue-600 text-white text-center px-4 py-2 rounded hover:bg-blue-700"
              >
                View Cart
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
