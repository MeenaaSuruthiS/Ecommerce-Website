
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function FullCartPage() {
  const { state, dispatch } = useCart()

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: id })
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
    }
  }

  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (state.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Link to="/products" className="text-blue-600 hover:text-blue-800">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      <div className="space-y-4">
        {state.items.map(item => (
          <div key={item.id} className="flex items-center gap-4 p-4 bg-white rounded shadow">
            <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
            <div className="flex-grow">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-gray-500">${item.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-right">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  )
}
