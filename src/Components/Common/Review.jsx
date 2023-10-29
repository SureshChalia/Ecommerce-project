import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Reviews from "../../data/ProductReviews"

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

const Review = () => {
  return (
    <div className='mt-16'>
      <p className='text-lg lg:text-4xl md:text-2xl xl:text-4xl sm:text-sm text-blue-800 font-bold xs:text-lg text-center'>LET CUSTOMERS SPEAK FOR US</p>
      <p className='text-blue-500 text-sm sm:text-base lg:text-lg xl:text-xl mb-2 max-w-xs sm:max-w-md lg:max-w-lg w-[90%] mx-auto text-center'>from 566 reviews</p>
      <div className='flex w-11/12 mx-auto items-center mt-5 mb-16'>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          navigation={false}
          breakpoints={breakpoints}
          autoplay={{ delay: 3000 }}
        >
          {Reviews.map((review) => (
            <SwiperSlide key={review.id} className="">
              <div className="p-4 border rounded-lg shadow-lg bg-gradient-to-t from-cyan-400 to-pink-200">
                <h2 className="text-xl font-semibold mb-2 text-center text-blue-700">{review.productName}</h2>
                <p className="text-white mb-4">{review.reviewText}</p>
                <div className="flex items-center justify-between font-bold">
                  <p className="text-sm text-gray-500">{review.reviewer}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Review