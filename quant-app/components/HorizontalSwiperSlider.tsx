import { useCallback, useMemo, useRef } from "react";
import { IconButton, Typography } from "@mui/material";
import {Grid2} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperInstance } from "swiper/types";
import { SwiperRef } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

import "swiper/css";
import "swiper/css/navigation";
import "../style/main.css";
import "../style/swiper.css";

interface HorizontalSwiperSliderProps {
  value: number;
  slidesContent: React.ReactNode[];
  onChange?: (newIndex: number) => void;
  slidesPerView?: number;
  spaceBetweenSlides?: number;
  label?: string;
  width?: string;
}

const HorizontalSwiperSlider: React.FC<HorizontalSwiperSliderProps> = (props) => {
  const {
    value,
    slidesContent,
    onChange,
    slidesPerView,
    spaceBetweenSlides,
    label,
    width,
  } = props;

  const swiperRef = useRef<SwiperRef | null>(null);
  const currentValueRef = useRef<number>(value);

  const uniqueId = useMemo(() => uuidv4(), []);
  const buttonPrevId = `swiper-prev-${uniqueId}`;
  const buttonNextId = `swiper-next-${uniqueId}`;

  const handleSlideChange = useCallback(
    (swiper: SwiperInstance) => {
      const newValue = swiper.activeIndex;
      if (newValue === currentValueRef.current) return;

      currentValueRef.current = newValue;
      swiperRef.current?.swiper.update();

      onChange?.(newValue);
    },
    [onChange]
  );

  const getSwiperButton = (id: string, icon: React.ReactNode) => (
    <IconButton
      id={id}
      sx={(theme) => ({
        color: theme.palette.common.white,
        background: theme.palette.background.default,
        width: "30px",
        height: "30px",
        borderRadius: "5px",
      })}
    >
      {icon}
    </IconButton>
  );

  const swiperMemo = useMemo(() => {
    return (
      <Swiper
        className="swiper-wrapper"
        ref={swiperRef}
        loop={false}
        modules={[Navigation]}
        navigation={{
          prevEl: `#${buttonPrevId}`,
          nextEl: `#${buttonNextId}`,
        }}
        freeMode={false}
        slidesPerView={slidesPerView ?? 1}
        onSlideChange={handleSlideChange}
        centeredSlides={false}
        spaceBetween={spaceBetweenSlides}
        grabCursor={true}
        allowTouchMove={true}
        simulateTouch={true}
        touchRatio={1}
        watchOverflow={true}
        cssMode={false}
        style={{ width: "100%", height: "100%", pointerEvents: "auto" }}
      >
        {slidesContent.map((content, index) => (
          <SwiperSlide
            key={`${index}-${uniqueId}`}
            className="swiper-slide client-success-stories__slide"
            style={{
              flex: "0 0 auto",
              width: "fit-content",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {content}
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }, [
    slidesPerView,
    slidesContent,
    buttonPrevId,
    buttonNextId,
    handleSlideChange,
    spaceBetweenSlides,
    uniqueId,
  ]);

  return (
    <Grid2
      container
      width="100%"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      wrap="nowrap"
      sx={{ userSelect: "none" }}
    >
      {label && <Typography>{label}</Typography>}

      <Grid2
        container
        wrap="nowrap"
        alignItems="center"
        direction="column"
        justifyContent="space-between"
      >
        <Grid2 container width={width}>
          {swiperMemo}
        </Grid2>

        <Grid2 container justifyContent="space-between" width="100%">
          {getSwiperButton(buttonPrevId, <ArrowBackRoundedIcon />)}
          {getSwiperButton(buttonNextId, <ArrowForwardRoundedIcon />)}
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default HorizontalSwiperSlider;
