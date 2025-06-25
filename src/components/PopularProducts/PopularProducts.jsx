"use client"

import { useState } from "react"

function PopularProducts() {
  const [activeCategory, setActiveCategory] = useState("FASHION")

  const categories = ["FASHION", "ELECTRONICS", "BAGS", "FOOTWEAR", "GROCERIES", "BEAUTY", "WELLNESS", "JEWELLERY"]

  const products = [
    {
      id: 1,
      brand: "CLAFOUTIS",
      name: "Men Opaque Casual Shirt...",
      image: "/images/products/fashion/shirt-1.jpg",
      originalPrice: "₹1,650.00",
      salePrice: "₹1,450.00",
      discount: "10%",
      rating: 5,
      category: "FASHION",
    },
    {
      id: 2,
      brand: "Campus Sutra",
      name: "Men Comfort Cuban Collar ...",
      image: "/images/products/fashion/shirt-2.jpg",
      originalPrice: "₹2,200.00",
      salePrice: "₹1,850.00",
      discount: "14%",
      rating: 5,
      category: "FASHION",
    },
    {
      id: 3,
      brand: "Allen Solly",
      name: "Men Pure Cotton Striped C...",
      image: "/images/products/fashion/shirt-3.jpg",
      originalPrice: "₹2,250.00",
      salePrice: "₹1,999.00",
      discount: "12%",
      rating: 4,
      category: "FASHION",
    },
    {
      id: 4,
      brand: "all about you",
      name: "Embroidered Satin Saree...",
      image: "/images/products/fashion/shirt-4.jpg",
      originalPrice: "₹5,500.00",
      salePrice: "₹4,785.00",
      discount: "13%",
      rating: 5,
      category: "FASHION",
    },
    {
      id: 5,
      brand: "kasee",
      name: "Embellished Embroidered S...",
      image: "/images/products/fashion/shirt-5.jpg",
      originalPrice: "₹1,999.00",
      salePrice: "₹1,955.00",
      discount: "12%",
      rating: 5,
      category: "FASHION",
    },
    {
      id: 6,
      brand: "Koskii",
      name: "Floral Beads and Stones P...",
      image: "/images/products/fashion/shirt-6.jpg",
      originalPrice: "₹2,450.00",
      salePrice: "₹1,850.00",
      discount: "8%",
      rating: 4,
      category: "FASHION",
    },
    {
      id: 7,
      brand: "Tikhi Imli",
      name: "Embellished Sequinned",
      image: "/images/products/fashion/shirt-7.jpg",
      originalPrice: "₹2,650.00",
      salePrice: "₹1,850.00",
      discount: "10%",
      rating: 5,
      category: "FASHION",
    },
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-sm ${index < rating ? "text-yellow-400" : "text-gray-300"}`}>
        ★
      </span>
    ))
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Products</h2>
        <p className="text-gray-600">Do not miss the current offers until the end of March.</p>
      </div>

      {/* Category Tabs */}
      <div className="mb-8">
        <div className="flex space-x-8 border-b border-gray-200">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`pb-4 px-2 text-sm font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {/* Discount Badge */}
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount}
                </div>
                {/* Wishlist & Compare Icons */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2">
                  <button className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">{product.brand}</div>
                <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center mb-3">{renderStars(product.rating)}</div>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-lg font-bold text-red-500">{product.salePrice}</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-white border-2 border-red-500 text-red-500 py-2 px-4 rounded-lg font-medium hover:bg-red-500 hover:text-white transition-colors duration-300">
                  🛒 ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrow */}
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default PopularProducts
