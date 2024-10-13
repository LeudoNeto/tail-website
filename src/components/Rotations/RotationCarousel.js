import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import RotationProjectsCards from './RotationProjectsCards';

const RotationCarousel = ({ rotationProjects }) => {
  return (
    <Swiper
      direction="horizontal"
      modules={[Navigation]}
      navigation
      centerInsufficientSlides={true}
      breakpoints={{
        1366: {
          slidesPerView: 4, // Mostra 4 slides ao mesmo tempo
          spaceBetween: 40,
        },
        // Ajustes para telas grandes (largura >= 1024px)
        1024: {
          slidesPerView: 3, // Mostra 3 slides ao mesmo tempo
          spaceBetween: 30,
        },
        // Ajustes para tablets (largura >= 768px)
        768: {
          slidesPerView: 2, // Mostra 2 slides ao mesmo tempo
          spaceBetween: 20,
        },
        // Ajustes para smartphones (largura < 768px)
        0: {
          slidesPerView: 1, // Mostra 1 slide por vez
          spaceBetween: 10,
        },
      }}
    >
      {rotationProjects.map((project) => (
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }} >
          <div style={{ maxWidth: "256px", padding: "16px" }}>
            <RotationProjectsCards project={project} key={project.name} />
          </div>
        </SwiperSlide>
      ))}
      
    </Swiper>
  );
};

export default RotationCarousel;