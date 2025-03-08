import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import foto1 from "../../assets/img/foto1.jpg";
import foto2 from "../../assets/img/foto2.jpg";
import foto3 from "../../assets/img/foto3.jpg";
import foto4 from "../../assets/img/foto4.webp";
import foto5 from "../../assets/img/foto5.webp";
import foto6 from "../../assets/img/foto6.jpg";
import foto7 from "../../assets/img/foto7.jpg";
import foto8 from "../../assets/img/foto8.jpg";

export const Carrossel: React.FC = () => {
  return (
    <section className={styles.sectionCarrosel}>
      <div className={styles.images}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
          loop={true}
        >
          <SwiperSlide>
            <img src={foto1} alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={foto2} alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={foto3} alt="Slide 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={foto4} alt="Slide 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={foto5} alt="Slide 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={foto6} alt="Slide 6" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={foto7} alt="Slide 7" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={foto8} alt="Slide 8" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
