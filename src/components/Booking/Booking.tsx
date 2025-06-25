import React from 'react';
import styled from 'styled-components';
import { InlineWidget } from 'react-calendly';

const BookingSection = styled.section`
  padding: 120px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000000;
  margin: 0 auto;
  max-width: 600px;

  @media (max-width: 600px) {
    padding: 60px 8px;
    max-width: 100vw;
  }
`;

const Title = styled.h2`
  
  font-family: 'instrument serif', serif;
  font-size: 56px;
  font-weight: 500;
  font-style: italic;
  color: white;
  margin: 0 0 4px 0;
  text-align: center;
`;

const Description = styled.p`
  font-family: 'Satoshi', sans-serif;
  font-size: 20px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  max-width: 600px;
  margin: 0 0 64px 0;
`;

const BookingMenu = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 500px;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 32px;
  font-weight: 500;
  margin: 0 auto;

  @media (max-width: 900px) {
    max-width: 100vw;
    height: 500px;
  }
  @media (max-width: 600px) {
    max-width: 100vw;
    height: 420px;
    font-size: 18px;
    padding: 0;
    margin-left: 0;
    margin-right: 0;
  }
`;

const Booking = () => {
  return (
    <BookingSection>
      <Title>Book a Call</Title>
      <Description>
        Have a project you would like to discuss? Schedule a meeting at any preferred day and time.
      </Description>
      <BookingMenu>
        <InlineWidget
          url="https://calendly.com/talhasifsheikh"
          styles={{ minWidth: '100%', height: '100%', border: 'none' }}
          pageSettings={{ backgroundColor: 'ffffff', hideEventTypeDetails: false, hideLandingPageDetails: false }}
        />
      </BookingMenu>
    </BookingSection>
  );
};

export default Booking; 