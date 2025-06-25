function TopBanner() {
  return (
    <div className="hidden lg:block bg-gray-100 border-y border-gray-200 py-2">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
        
        {/* Oferta a la izquierda */}
        <p className="text-black font-medium">
          Por lanzamiento recibe un 20% de descuento
        </p>
        
        {/* Links a la derecha */}
        <ul className="flex gap-6">
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-700 transition font-medium">
              Help Center
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-700 transition font-medium">
              Order Tracking
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TopBanner
