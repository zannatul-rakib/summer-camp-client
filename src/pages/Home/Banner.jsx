import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import bannerImage from "../../assets/banner.jpeg"
import bannerImage2 from "../../assets/banner2.jpeg"
import bannerImage3 from "../../assets/banner3.jpeg"

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper h-[600px]"
            >
                <SwiperSlide>
                    <img className='h-full w-full object-cover' src={bannerImage} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerImage2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerImage3} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;