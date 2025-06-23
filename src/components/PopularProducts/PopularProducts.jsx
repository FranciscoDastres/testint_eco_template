import ProductCard from "../ProductCard/ProductCard"

function PopularProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Popular Products</h2>
        <p className="text-gray-600">Do not miss the current offers until the end of March.</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <ProductCard key={item} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts
