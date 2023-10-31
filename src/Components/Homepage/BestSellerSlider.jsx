import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from "../../Assets/BestSellerImages/jersey.webp"
import img2 from "../../Assets/BestSellerImages/Bandan.jpg"
import img3 from "../../Assets/BestSellerImages/arm-sleeves.webp"
import img4 from "../../Assets/BestSellerImages/cooling-towel.webp"
import img5 from "../../Assets/BestSellerImages/jug.webp"
import img6 from "../../Assets/BestSellerImages/sleeper.webp"
import img7 from "../../Assets/BestSellerImages/wrist-band.webp"
import img8 from "../../Assets/BestSellerImages/wristband-2.webp"



const HeaderSlider = () => {
  const slides = [
    {
      id: 1,
      brand: "addidas",
      text: "Addidas Indian cricket fan jersey",
      price: 899.9,
      image: img1,

    },
    {
      id: 2,
      brand: "Nike",
      text: "Nike Bandana",
      price: 890.9,
      image: img2,

    },
    {
      id: 3,
      brand: "Nike",
      text: "Uisex arm sleeves",
      price: 352.9,
      image: img3,

    },
    {
      id: 4,
      brand: "Nike",
      text: "Cooling towel",
      price: 519,
      image: img4,

    },
    {
      id: 5,
      brand: "Nike",
      text: "Insulated Jug",
      price: 999.9,
      image: img5,

    },
    {
      id: 6,
      brand: "Skechers",
      text: "Women-Sleeper",
      price: 632.9,
      image: img6,

    },
    {
      id: 7,
      brand: "addidas",
      text: "Awesome Wrist band",
      price: 999.9,
      image: img7,

    },
    {
      id: 8,
      brand: "Nike",
      text: "Nike-wristbands",
      price: 912.9,
      image: img8,

    },
  ];

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={10}
      slidesPerView={3}
      pagination={{ clickable: true }}
      navigation={false}
      breakpoints={breakpoints}
      // autoplay={{ delay: 3000 }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.id} className="">
          <img src={slide.image} alt={`Slide ${index}`} className="w-72 h-64  object-fill hover:scale-105 transform ease-in-out duration-200 bg-transparent" />
          <div className='mt-2'>
            <p className='text-gray-500'>{slide.brand}</p>
            <Link><p className='text-lg text-blue-800 font-semibold'>{slide.text}</p></Link>
            <p className='text-blue-800 font-semibold'>₹ {slide.price}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeaderSlider;
