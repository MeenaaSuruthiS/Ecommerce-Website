
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { ClerkProvider } from '@clerk/clerk-react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import ProductListingPage from './components/ProductListingPage'
import FullCartPage from './components/FullCartPage'
import About from './components/About'
import Categories from './components/Categories'
import Contact from './components/Contact'
import './App.css'

export default function App() {
  return (
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      <CartProvider>
        <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductListingPage />} />
              <Route path="/cart" element={<FullCartPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
    </ClerkProvider>
  )
}
