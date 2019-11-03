import React from 'react';
import PropTypes from 'prop-types';
import OriginalCarousel, { Dots as OriginalDots } from '@brainhubeu/react-carousel';
import { Left, Right, CarouselContainer } from './elements';

const Carousel = ({ ...props }) => {
  const { arrowLeft, arrowRight, arrows } = props;

  return (
    <CarouselContainer>
      <OriginalCarousel
        {...props}
        arrowLeft={arrows && arrowLeft}
        arrowRight={arrows && arrowRight}
        addArrowClickHandler
      />
    </CarouselContainer>
  );
};

const Dots = ({ ...props }) => (
  <CarouselContainer>
    <OriginalDots {...props} />
  </CarouselContainer>
);

Carousel.defaultProps = {
  arrowLeft: <Left />,
  arrowRight: <Right />,
  arrows: false
};

Carousel.propTypes = {
  arrowLeft: PropTypes.any,
  arrowRight: PropTypes.any,
  arrows: PropTypes.bool
};

export { Dots };

export default Carousel;
