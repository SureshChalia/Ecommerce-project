import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img2 from "../../Assets/racket.avif"
import img3 from "../../Assets/jersey-image.avif"
import img4 from "../../Assets/bat.avif"
import img5 from "../../Assets/gloves.avif"
import img6 from "../../Assets/shoes-2.avif"
import img7 from "../../Assets/shoes.avif"



const HeaderSlider = () => {
  const slides = [
    {
      id: 1,
      text: "#PLAYSAFE",
      image: img2,

    },
    {
      id: 2,
      text: "#GOWITHTREND",
      image: img3,

    },
    {
      id: 3,
      text: "#FRESHARRIVAL",
      image: img4,

    },
    {
      id: 4,
      text: "#FRESHCOLLECTION",
      image: img5,

    },
    {
      id: 5,
      text: "#NEWSHOES",
      image: img6,

    },
    {
      id: 6,
      text: "#HAPPYFEET",
      image: img7,

    },
  ];

  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1, // Show only 1 slide when screen width is 320px or smaller
    },
    768: {
      slidesPerView: 2, // Show 2 slides when screen width is 768px or larger
    },
    1024: {
      slidesPerView: 3, // Show 3 slides when screen width is 1024px or larger
    },
  };

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={10}
      slidesPerView={3}
      pagination={{ clickable: true }}
      navigation={false}
      autoplay={{ delay: 3000 }}
      breakpoints={breakpoints}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.id} className="relative h-[30rem]">
          <img src={slide.image} alt={`Slide ${index}`} className="w-full h-full object-fill" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className='text-4xl text-white font-bold xs:text-lg'>{slide.text}</p>
            <button className='border rounded-full p-2 px-8 mt-2 text-blue-700 hover:text-white font-bold bg-white hover:bg-blue-700'>Explore Now</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeaderSlider;
