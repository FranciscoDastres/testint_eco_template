"use client"

function CategoryCards() {
  const categories = [
    {
      id: 1,
      name: "Fashion",
      icon: "👔",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 2,
      name: "Electronics",
      icon: "📱",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      id: 3,
      name: "Bags",
      icon: "👜",
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      id: 4,
      name: "Footwear",
      icon: "👟",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 5,
      name: "Groceries",
      icon: "🛒",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: 6,
      name: "Beauty",
      icon: "💄",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      id: 7,
      name: "Wellness",
      icon: "🧘‍♀️",
      bgColor: "bg-teal-100",
      iconColor: "text-teal-600",
    },
    {
      id: 8,
      name: "Jewellery",
      icon: "💎",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
  ]

  const handleCategoryClick = (categoryName) => {
    console.log(`Clicked on ${categoryName}`)
    // Aquí después agregaremos la navegación
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.name)}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center cursor-pointer hover:shadow-md hover:scale-105 transition-all duration-300"
          >
            <div className={`${category.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
              <span className="text-3xl">{category.icon}</span>
            </div>
            <h3 className="text-sm font-medium text-gray-900">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategoryCards
