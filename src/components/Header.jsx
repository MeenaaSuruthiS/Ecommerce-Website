
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useCart } from '../context/CartContext'
import MiniCart from './MiniCart'

export default function Header() {
  const { state } = useCart()
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Store
          </Link>
          
          <div className="flex items-center gap-6">
            <Link to="/products" className="text-gray-600 hover:text-gray-900">
              Products
            </Link>
            
            <Popover className="relative">
              <Popover.Button className="flex items-center text-gray-600 hover:text-gray-900">
                <ShoppingCartIcon className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="ml-1 text-sm font-medium">{itemCount}</span>
                )}
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2 w-80">
                  <MiniCart />
                </Popover.Panel>
              </Transition>
            </Popover>
          </div>
        </div>
      </nav>
    </header>
  )
}
