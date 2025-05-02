
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useClerk, SignInButton, SignOutButton } from '@clerk/clerk-react'
import { useCart } from '../context/CartContext'
import MiniCart from './MiniCart'

export default function Header() {
  const { state } = useCart()
  const { user, isSignedIn } = useClerk()
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
  const isGuestMode = true // Enable guest mode

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Store
          </Link>
          
          <div className="flex items-center gap-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link to="/categories" className="text-gray-600 hover:text-gray-900">
              Categories
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-gray-900">
              Products
            </Link>
            
            {!isGuestMode && (
              <>
                {isSignedIn ? (
                  <div className="flex items-center gap-4">
                    <span>Hello, {user.firstName}</span>
                    <SignOutButton className="text-red-600 hover:text-red-800" />
                  </div>
                ) : (
                  <SignInButton className="text-blue-600 hover:text-blue-800" />
                )}
              </>
            )}

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
