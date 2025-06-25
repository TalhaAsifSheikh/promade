import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  min-height: 96vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  position: relative;
  background: url('/bg.jpg') no-repeat center center;
  background-size: cover;
  
  @media (max-width: 768px) {
    min-height: 70vh;
    padding: 0 8px;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
  padding: 0 20px;
  
`;

const HeroText = styled.h1`
  font-size: 80px;
  font-weight: 500;
  line-height: 1.1;
  font-family: 'Satoshi', sans-serif;
  margin: 0;
  padding: 0;
  color: white;
  margin-top: 16px;
  

  i {
    font-family: 'instrument serif', serif;
    font-style: italic;
    font-weight: 400;
  }

  @media (max-width: 1024px) {
    font-size: 48px;
  }
  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  font-family: 'Satoshi', sans-serif;
  justify-content: center;
  margin-top: 40px;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 14px 28px;
  border-radius: 45px;
  font-family: 'Satoshi', sans-serif;
  font-size: 16px;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
  border: none;

  ${props => props.primary ? `
    background: white;
    color: black;
  ` : `
    background: transparent;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
  `}

  &:hover {
    transform: scale(1.05);
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroText>
          Designing for <i>impact</i>, more<br />
          <i>engagement</i>, more <i>conversion</i>.
        </HeroText>
        <ButtonGroup>
          <Button primary>Book a Call</Button>
          <Button>View our Work</Button>
        </ButtonGroup>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 