import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

const products = [
  {
    title: "Men Opaque Casual Shirt",
    price: "₹1,450.00",
    oldPrice: "₹1,650.00",
    image: "/shirt1.png",
    discount: "10%",
  },
  {
    title: "Men Comfort Cuban Collar",
    price: "₹1,850.00",
    oldPrice: "₹2,200.00",
    image: "/shirt2.png",
    discount: "14%",
  },
  {
    title: "Men Pure Cotton Striped",
    price: "₹1,999.00",
    oldPrice: "₹2,250.00",
    image: "/shirt3.png",
    discount: "12%",
  },
  {
    title: "Embroidered Satin Saree",
    price: "₹4,785.00",
    oldPrice: "₹5,500.00",
    image: "/shirt4.png",
    discount: "13%",
  },
  {
    title: "Embroidered Shirt",
    price: "₹1,955.00",
    oldPrice: "₹1,999.00",
    image: "/shirt5.png",
    discount: "12%",
  },
  {
    title: "Extra Shirt",
    price: "₹2,250.00",
    oldPrice: "₹2,500.00",
    image: "/shirt6.png",
    discount: "10%",
  },
]

function PopularProducts() {
  const carouselRef = useRef()

  const scroll = (direction) => {
    const container = carouselRef.current
    const scrollAmount = 320
    direction === "left"
      ? (container.scrollLeft -= scrollAmount)
      : (container.scrollLeft += scrollAmount)
  }

  return (
    <section className="relative px-6 py-8">
      <h2 className="text-2xl font-bold mb-4">Popular Products</h2>

      {/* Flecha Izquierda */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:scale-105"
      >
        <ChevronLeft />
      </button>

      {/* Carrusel de productos */}
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="min-w-[250px] bg-white rounded-lg shadow p-4 flex-shrink-0 relative"
          >
            <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
              {product.discount}
            </span>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain mb-2"
            />
            <h3 className="font-semibold text-sm truncate">{product.title}</h3>
            <div className="flex items-center gap-2">
              <span className="text-red-600 font-bold">{product.price}</span>
              <span className="line-through text-gray-400 text-sm">
                {product.oldPrice}
              </span>
            </div>
            <button className="mt-3 w-full border border-red-500 text-red-500 px-4 py-1 rounded hover:bg-red-500 hover:text-white transition flex items-center justify-center gap-2">
              🛒 Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Flecha Derecha */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:scale-105"
      >
        <ChevronRight />
      </button>
    </section>
  )
}

export default PopularProducts
