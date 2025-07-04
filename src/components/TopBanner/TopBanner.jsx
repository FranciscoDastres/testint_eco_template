function TopBanner() {
  return (
    <div className="hidden lg:block bg-white border-y border-gray-200 text-gray-500 text-xs shadow-[0_0_0_1px_black]">
      <div className="w-full max-w-7xl mx-auto px-0 py-2 flex justify-between items-start ">
        <p className="font-sans-serif tracking-wide">
          Por lanzamiento recibe un 20% de descuento
        </p>

        <ul className="flex gap-3">
          <li>
            <a href="#" className="hover:text-gray-700 transition">
              Help Center
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700 transition">
              Order Tracking
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default TopBanner;