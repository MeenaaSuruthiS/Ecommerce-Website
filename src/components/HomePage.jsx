
import FeaturedProducts from './FeaturedProducts'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Welcome to Our Store
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Discover amazing products at great prices
          </p>
          <div className="mt-10">
            <a
              href="/products"
              className="inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <FeaturedProducts />
      </div>
    </div>
  )
}
