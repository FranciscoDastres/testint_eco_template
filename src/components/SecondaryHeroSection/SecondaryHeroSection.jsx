// SecondaryHeroSection.jsx
export default function SecondaryHeroSection() {
  const banners = [
    {
      image: 'https://i.ibb.co/0X1bW6x/banner-1.png',
      title: 'Smart Watches',
      subtitle: 'Starting at $99.99',
      link: '#',
      bg: 'bg-gradient-to-r from-purple-400 to-pink-400',
    },
    {
      image: 'https://i.ibb.co/RzK1kR9/banner-2.png',
      title: 'latest Headphones',
      subtitle: 'Up to 50% off',
      link: '#',
      bg: 'bg-gradient-to-r from-green-300 to-blue-500',
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      {banners.map((b, i) => (
        <div
          key={i}
          className={`${b.bg} rounded-xl overflow-hidden flex items-center p-6 shadow-lg`}
        >
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white">{b.title}</h3>
            <p className="mt-1 text-white/90">{b.subtitle}</p>
            <a
              href={b.link}
              className="inline-block mt-4 px-4 py-2 bg-white text-gray-800 font-medium rounded hover:opacity-90 transition"
            >
              Shop Now
            </a>
          </div>
          <div className="flex-shrink-0">
            <img
              src={b.image}
              alt={b.title}
              className="w-32 h-32 object-contain"
            />
          </div>
        </div>
      ))}
    </section>
  )
}
