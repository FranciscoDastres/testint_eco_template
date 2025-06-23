function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top Header */}
          <div className="flex justify-between items-center py-2 text-sm text-gray-600">
            <div></div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-900">
                Help Center
              </a>
              <a href="#" className="hover:text-gray-900">
                Order Tracking
              </a>
            </div>
          </div>

          {/* Main Header */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-lg">ImpresionArte</div>
                  <div className="text-xs text-gray-500">Impresiones 3D Personalizadas</div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Login
              </a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Register
              </a>
              <button className="p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button className="p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="font-medium">SHOP BY CATEGORIES</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Home
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Fashion
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Electronics
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Bags
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Footwear
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Groceries
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Beauty
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Wellness
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Jewellery
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <span>Free International Delivery</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
