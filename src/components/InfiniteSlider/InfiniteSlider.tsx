import React, { useMemo } from 'react';
import styled, { keyframes } from 'styled-components';

// Import all slider images
import avine from '../../assets/Sliderimages/avine.png';
import cryptopay from '../../assets/Sliderimages/cryptopay.png';
import fitness from '../../assets/Sliderimages/fitness.png';
import logisoft from '../../assets/Sliderimages/logisoft.png';
import maven from '../../assets/Sliderimages/maven.png';
import nexum from '../../assets/Sliderimages/nexum.png';
import packageTracking from '../../assets/Sliderimages/package tracking.png';
import shots from '../../assets/Sliderimages/728shots_so.png';
import sweetjuice from '../../assets/Sliderimages/sweetjuice.png';
import travel from '../../assets/Sliderimages/travel app.png';
import utopia from '../../assets/Sliderimages/utopia.png';

const slideLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const slideRight = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  overflow: visible;
`;

const SliderTrack = styled.div<{ direction: 'left' | 'right' }>`
  display: flex;
  width: max-content;
  animation: ${props => props.direction === 'left' ? slideLeft : slideRight} 40s linear infinite;
  gap: 2px;
  padding: 0 0;
  will-change: transform;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  

`;

const SliderWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 10px 0;
  background: #000000;
  max-width: 100%;
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: 0;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 120px;
    z-index: 3;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 0) 100%);
  }

  &::after {
    right: 0;
    background: linear-gradient(270deg, #000 0%, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 0) 100%);
  }
`;

const SliderContent = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;
`;

const ImageContainer = styled.div`
  width: 400px;
  min-width: auto;
  height: 280px;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
  margin: 0 12px;
  
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  image-rendering: -webkit-optimize-contrast;
  transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
  transition: transform 0.3s ease;
`;

const InfiniteSlider = () => {
  // All available images
  const allImages = [
    shots, cryptopay, fitness, logisoft, maven, nexum,
    packageTracking, sweetjuice, travel, utopia, avine
  ];

  // Randomly shuffle and split images into two rows
  const { row1Images, row2Images } = useMemo(() => {
    const shuffled = [...allImages].sort(() => Math.random() - 0.5);
    const midpoint = Math.ceil(shuffled.length / 2);
    
    return {
      row1Images: shuffled.slice(0, midpoint),
      row2Images: shuffled.slice(midpoint)
    };
  }, []);

  // Function to duplicate array to create seamless loop
  const duplicateArray = (arr: string[]) => [...arr, ...arr];

  return (
    <SliderContainer>
      <SliderWrapper>
        <SliderContent>
          <SliderTrack direction="left">
            {duplicateArray(row1Images).map((image, index) => (
              <ImageContainer key={index}>
                <SliderImage src={image} alt={`Project ${index + 1}`} loading="eager" />
              </ImageContainer>
            ))}
          </SliderTrack>
        </SliderContent>
      </SliderWrapper>

      <SliderWrapper>
        <SliderContent>
          <SliderTrack direction="right">
            {duplicateArray(row2Images).map((image, index) => (
              <ImageContainer key={index}>
                <SliderImage src={image} alt={`Project ${index + 1}`} loading="eager" />
              </ImageContainer>
            ))}
          </SliderTrack>
        </SliderContent>
      </SliderWrapper>
    </SliderContainer>
  );
};

export default InfiniteSlider; 