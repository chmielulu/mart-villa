import React from "react";
import styled from "styled-components";
import SectionHeader from "../../atoms/SectionHeader/SectionHeader";
import Review from "../../atoms/Review/Review";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { REVIEWS } from "./data";
import { cssEaseOutExpo } from "../../../theme/easings";

SwiperCore.use([Pagination, Autoplay]);

const StyledWrapper = styled.section`
  margin: 120px auto 0;
  overflow: hidden;
  padding-bottom: 100px;
`;

const StyledContainer = styled.div`
  width: 90%;
  max-width: 1170px;
  margin: 0 auto;
`;

const StyledSectionHeader = styled(SectionHeader)`
  max-width: 618px;
  margin: 0 auto 40px;
`;

const StyledInnerWrapper = styled.div`
  .swiper {
    position: relative;
  }

  .swiper-wrapper {
    display: flex;
  }

  .swiper-slide {
    opacity: 0;
    transition: opacity 1s ${cssEaseOutExpo};
  }

  .swiper-slide-visible {
    opacity: 1;
    transform: scale(1);
  }

  @media (max-width: 1024px) {
    max-width: 770px;
    margin: auto;
  }
`;

const SwiperPagination = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;

  .swiper-pagination-bullet {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${({ theme }) => theme.washRegular};
    transition: backgroundf 1s ${cssEaseOutExpo};
    margin-left: 30px;
    display: block;
    position: relative;
    cursor: pointer;

    :first-of-type {
      margin: 0;
    }

    ::before {
      width: 17px;
      height: 17px;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.primary};
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 1s ${cssEaseOutExpo};
      content: "";
    }

    &-active {
      background: ${({ theme }) => theme.primary};
      cursor: default;

      ::before {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
`;

const Reviews = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledSectionHeader
          title="What they're saying about
  our work feedback"
          subtitle="Testimontials"
          center
        />

        <StyledInnerWrapper>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides
            speed={1000}
            grabCursor
            watchSlidesProgress={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            updateOnWindowResize
            pagination={{
              el: "#swiper-pagination",
              clickable: true,
            }}
            breakpoints={{
              431: {
                slidesPerView: "auto",
              },
              861: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                centeredSlides: false,
              },
              1261: {
                slidesPerGroup: 3,
                slidesPerView: 3,
                centeredSlides: false,
              },
            }}
          >
            {[...REVIEWS(), ...REVIEWS(), ...REVIEWS()].map(
              ({ content, name, position, avatar }, index) => (
                <SwiperSlide key={index}>
                  <Review
                    name={name}
                    position={position}
                    content={content}
                    avatar={avatar}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </StyledInnerWrapper>

        <SwiperPagination id="swiper-pagination" />
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Reviews;
