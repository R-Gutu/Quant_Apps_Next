import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Quantica from "@/src/assets/icons/Quantica.svg";
import QuanticaFill from "@/src/assets/icons/Quantica-fill.svg";


export default function QuanticaSlider() {
    return(
        <div className="quantica-slider">
        <Swiper
          centeredSlides={false}
          slidesPerView={2.5}
          spaceBetween={93}
          loop={true}
          freeMode={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
          allowTouchMove={false}
          breakpoints={{ 1100: { slidesPerView: 4 } }}
          modules={[Autoplay]}
        >
          <SwiperSlide className="quantica-slider__slide">
            <Image src={Quantica} alt="" />
          </SwiperSlide>

          <SwiperSlide className="quantica-slider__slide">
            <Image src={QuanticaFill} alt="" />
          </SwiperSlide>

          <SwiperSlide className="quantica-slider__slide">
            <Image src={Quantica} alt="" />
          </SwiperSlide>

          <SwiperSlide className="quantica-slider__slide">
            <Image src={QuanticaFill} alt="" />
          </SwiperSlide>

          <SwiperSlide className="quantica-slider__slide">
            <Image src={Quantica} alt="" />
          </SwiperSlide>

          <SwiperSlide className="quantica-slider__slide">
            <Image src={QuanticaFill} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    )
}