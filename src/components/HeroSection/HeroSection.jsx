"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Datos de los slides del hero
  const slides = [
    {
      id: 1,
      title: "Summer Collection 2024",
      subtitle: "Get up to 70% off on trending styles",
      buttonText: "Shop Now",
      bgColor: "bg-gradient-to-r from-blue-500 to-purple-600",
      image: "/placeholder.svg?height=600&width=800&text=Summer+Collection",
    },
    {
      id: 2,
      title: "Electronics Sale",
      subtitle: "Latest gadgets at unbeatable prices",
      buttonText: "Explore Deals",
      bgColor: "bg-gradient-to-r from-green-500 to-teal-600",
      image: "/placeholder.svg?height=600&width=800&text=Electronics+Sale",
    },
    {
      id: 3,
      title: "Fashion Week Special",
      subtitle: "Exclusive designer pieces just for you",
      buttonText: "Discover More",
      bgColor: "bg-gradient-to-r from-pink-500 to-red-600",
      image: "/placeholder.svg?height=600&width=800&text=Fashion+Week",
    },
  ];

  // Auto-play del carrusel cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide((currentSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  // Función para cambiar slide con transición
  const changeSlide = (newIndex) => {
    if (newIndex !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(newIndex);
        setIsTransitioning(false);
      }, 150);
    }
  };

  // Función para ir al slide anterior
  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    changeSlide(newIndex);
  };

  // Función para ir al slide siguiente
  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % slides.length;
    changeSlide(newIndex);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="relative rounded-lg overflow-hidden h-[500px] shadow-lg">
        {/* Container de slides con efecto de deslizamiento */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full flex-shrink-0 h-full">
              <div
                className={`${slide.bgColor} h-full flex items-center justify-between px-20 transition-all duration-500`}
              >
                {/* Contenido del texto */}
                <div className="text-white max-w-3xl">
                  <h1 className="text-6xl font-bold mb-8 transform transition-transform duration-500">
                    {slide.title}
                  </h1>
                  <p className="text-3xl mb-10 opacity-90 transform transition-transform duration-500">
                    {slide.subtitle}
                  </p>
                  <button className="bg-white text-gray-800 px-12 py-5 text-xl rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 transform">
                    {slide.buttonText}
                  </button>
                </div>

                {/* Imagen del slide */}
                <div className="hidden md:block">
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    className="w-[450px] h-[350px] object-cover rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón anterior - FLECHA IZQUIERDA */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center z-10"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Botón siguiente - FLECHA DERECHA */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center z-10"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
