import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Carousel.module.scss";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Carousel({ children }) {
  return (
    <MultiCarousel
      swipeable={true}
      draggable={false}
      showDots={false}
      infinite={true}
      autoPlay={true}
      arrows
      autoPlaySpeed={5000}
      keyBoardControl={true}
      transitionDuration={500}
      containerClass={styles.carouselContainer}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      minimumTouchDrag={80}
      responsive={responsive}
      pauseOnHover
      shouldResetAutoplay
      //   renderDotsOutside
    >
      {children}
    </MultiCarousel>
  );
}
