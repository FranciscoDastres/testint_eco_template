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
      bgColor: "",
      image: "/placeholder.svg?height=600&width=800&text=Summer+Collection",
    },
    {
      id: 2,
      title: "Electronics Sale & Tecnology",
      subtitle: "Latest gadgets at unbeatable prices",
      buttonText: "Explore Deals",
      bgColor: "",
      image: "/placeholder.svg?height=600&width=800&text=Electronics+Sale",
    },
    {
      id: 3,
      title: "Fashion Week Special Winter",
      subtitle: "Exclusive designer pieces just for you",
      buttonText: "Discover More",
      bgColor: "",
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
    <div className="herosection-wrapper  py-6 px-2">
    <section className="w-full px-0 py-0">
      <div className="relative w-[95%] mx-auto h-[600px] md:h-[850px] lg:h-[950px] overflow-hidden  shadow-lg">
        {/* Container de slides con efecto de deslizamiento */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 h-full">
              <div
                className={`${slide.bgColor} h-full flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-6 md:py-0 transition-all duration-500`}
              >
                {/* Contenido del texto */}
                <div className="text-gray-800 max-w-3xl px-4 flex-1 flex flex-col justify-center">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 transition-transform duration-500">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-3xl lg:text-4xl mb-6 md:mb-10 opacity-70 transition-transform duration-500">
                    {slide.subtitle}
                  </p>
                  <button className="bg-gray-800 text-white px-8 py-3 md:px-12 md:py-5 lg:px-16 lg:py-6 text-lg md:text-xl lg:text-2xl rounded-lg font-semibold hover:bg-gray-700 hover:scale-105 transition-all duration-300 w-fit">
                    {slide.buttonText}
                  </button>
                </div>

                {/* Imagen del slide */}
                <div className="hidden md:block pr-4 flex-1 flex justify-center items-center">
                  <img
                    src={slide.image || "/placeholder.svg"}

                    className="w-[350px] md:w-[450px] lg:w-[550px] h-[300px] md:h-[350px] lg:h-[450px] object-cover rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flechas */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center z-10"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center z-10"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </section>
     </div>
  );
}

export default HeroSection;