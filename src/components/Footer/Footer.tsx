import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: relative;
  background-color: #000;
  color: white;
  text-align: center;
  overflow: hidden;
  padding: 40px 20px;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    padding: 0 30px;
  }
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const CtaSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    padding: 40px 0;
    margin-bottom: 40px;
  }
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

const Title = styled.h2`
  font-family: 'instrument serif', serif;
  font-size: 64px;
  font-weight: 500;
  font-style: italic;
  margin: 0 0 4px 0;
  color: rgb(255, 255, 255);
  
  @media (max-width: 1024px) {
    font-size: 56px;
  }
  
  @media (max-width: 768px) {
    font-size: 42px;
  }
  
  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-family: 'Satoshi', sans-serif;
  font-size: 20px;
  max-width: 600px;
  margin: 0 auto 30px;
  
  @media (max-width: 768px) {
    font-size: 18px;
    padding: 0 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 16px;
  }
  line-height: 1.5;
  color: rgb(255, 255, 255);
  max-width: 600px;
  margin: 0 0 40px 0;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 14px 28px;
  background-color: #fff;
  color: #000;
  text-decoration: none;
  border-radius: 30px;
  font-family: 'Satoshi', sans-serif;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  z-index: 2;
  position: relative;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 15px;
  }

  &:hover {
    background-color: #e0e0e0;
    transform: translateY(-2px);
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 1800px;
  z-index: 0;
  opacity: 0.3;
  pointer-events: none;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 40px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const Email = styled.a`
  color: #fff;
  text-decoration: none;
  font-family: 'instrument serif', serif;
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 30px;
  display: block;
  transition: all 0.3s ease;
  word-break: break-all;
  text-align: left;
  width: 100%;
  
  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    font-size: 20px;
  }

  &:hover {
    text-decoration: underline;
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 30px;
  flex-wrap: wrap;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 20px;
    width: 100%;
    justify-content: space-between;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const SocialIcon = styled.a`
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 18px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

// Styled components
const StyledLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-family: 'Satoshi', sans-serif;
  font-size: 18px;
  font-weight: 500;
  transition: color 0.2s ease;
  white-space: nowrap;
  cursor: pointer;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Satoshi', sans-serif;
  font-size: 14px;
  margin: 0;
  text-align: left;
  width: 100%;
`;

const Footer = () => {
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FooterContainer>
      <ContentWrapper>
        <CtaSection>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo src="/Frame 84.png" alt="Promade Logo" />
          </Link>
          <Title>Want to work together?</Title>
          <Subtitle>Book a free project discussion below.</Subtitle>
          <CTAButton as={Link} to="#contact" onClick={handleScroll}>Book a Discovery Call</CTAButton>
          <BackgroundImage src="/bg12.jpg" alt="" />
        </CtaSection>
        <InfoSection>
          <Email href="mailto:info@promade.com">info@promade.com</Email>
          <BottomRow>
            <Copyright>© 2025 Promade. All rights reserved.</Copyright>
          </BottomRow>
        </InfoSection>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;