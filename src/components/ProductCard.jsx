
import { useCart } from '../context/CartContext'
import { StarIcon } from '@heroicons/react/24/solid'

export default function ProductCard({ product }) {
  const { dispatch } = useCart()

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <StarIcon
        key={index}
        className={`h-5 w-5 ${
          index < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain"
      />
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 truncate">
          {product.title}
        </h3>
        <p className="mt-1 text-gray-500 truncate">{product.description}</p>
        <div className="flex items-center mt-2">
          {renderStars(product.rating?.rate || 0)}
          <span className="ml-2 text-sm text-gray-500">
            ({product.rating?.count || 0} reviews)
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ${product.price}
          </span>
          <button
            onClick={addToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
