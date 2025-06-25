import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  padding: 120px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000000;
  margin: 0 auto;
  max-width: 900px;
  box-sizing: border-box;

  @media (max-width: 900px) {
    max-width: 100vw;
    padding: 60px 16px;
  }
  @media (max-width: 600px) {
    padding: 40px 8px;
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

const Subtitle = styled.p`
  font-family: 'Satoshi', sans-serif;
  font-size: 20px;
  color: white;
  text-align: center;
  margin: 0 0 40px 0;
  max-width: 700px;
  line-height: 1.4;

  @media (max-width: 900px) {
    font-size: 18px;
    margin-bottom: 32px;
    max-width: 95vw;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    margin-bottom: 24px;
    max-width: 100vw;
  }
`;

const Description = styled.p`
  font-family: 'Satoshi', sans-serif;
  font-size: 20px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  max-width: 600px;
  margin: 0 0 64px 0;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 40px;
  }
  
  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 36px;
  max-width: 900px;
  width: 100%;
  margin-bottom: 48px;
  box-sizing: border-box;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
    max-width: 100vw;
    margin-bottom: 32px;
  }
  @media (max-width: 600px) {
    gap: 16px;
    margin-bottom: 24px;
    padding: 0 4px;
  }
`;

const ServiceCard = styled.div`
  position: relative;
  background: linear-gradient(40deg, rgba(0, 0, 0, 0.48) 80%, rgba(255, 255, 255, 0.2) 100%);
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 18px;
  padding: 20px 36px 28px 24px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  margin: 0 auto;
  width: 100%;
  max-width: 420px;
  box-sizing: border-box;
  transition: box-shadow 0.25s cubic-bezier(0.4,0,0.2,1), transform 0.25s cubic-bezier(0.4,0,0.2,1), background 0.25s cubic-bezier(0.4,0,0.2,1);

  &:hover {
    box-shadow: 0 8px 32px rgba(75, 30, 126, 0.18), 0 1.5px 8px rgba(0,0,0,0.12);
    transform: translateY(-8px) scale(1.03);
    background: linear-gradient(40deg, rgba(75, 30, 126, 0.18) 80%, rgba(255, 255, 255, 0.25) 100%);
    border-color: rgba(75, 30, 126, 0.25);
  }

  @media (max-width: 900px) {
    max-width: 95vw;
    padding: 16px 16px 24px 16px;
  }
  @media (max-width: 600px) {
    padding: 10px 12px 20px 12px;
    min-height: 80px;
    max-width: 100vw;
  }
`;

const ServiceIcon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  svg, img {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 600px) {
    top: 8px;
    right: 8px;
    width: 28px;
    height: 28px;
    svg, img {
      width: 24px;
      height: 24px;
    }
  }
`;

const ServiceTitle = styled.h3`
  font-family: 'Satoshi', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: white;
  margin: 0;
  margin-bottom: 8px;

  ${ServiceCard}:hover & {
    color: #fff;
  }

  @media (max-width: 900px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    margin-bottom: 6px;
  }
`;

const ServiceDescription = styled.p`
  font-family: 'Satoshi', sans-serif;
  font-size: 18px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 0 0;
  margin-right: 40px;

  @media (max-width: 900px) {
    font-size: 16px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    margin-right: 0;
  }
`;

const TechStack = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;
  flex-wrap: wrap;
  margin-top: 24px;
  width: 100%;
  max-width: 900px;
  box-sizing: border-box;
  padding-left: 8px;
  padding-right: 8px;

  &:hover {
    opacity: 1;
  }

  img {
    width: 56px;
    height: 56px;
    object-fit: contain;
    margin: 0 4px;
    transition: width 0.2s, height 0.2s;
  }

  @media (max-width: 900px) {
    gap: 24px;
    img {
      width: 40px;
      height: 40px;
    }
  }
  @media (max-width: 600px) {
    gap: 12px;
    justify-content: center;
    img {
      width: 28px;
      height: 28px;
    }
  }
`;

const Services = () => {
  const services = [
    {
      icon: <img src="/svg/mingcute_pencil-fill.svg" alt="UI/UX Design Icon" />,
      title: "UI/UX Design",
      description: "Mobile & Desktop Apps, Website, E-commerce, SaaS."
    },
    {
      icon: <img src="/svg/flowbite_file-code-solid.svg" alt="Web Development Icon" />,
      title: "Web Development",
      description: "Consistent full stack development using popular tech stacks."
    },
    {
      icon: <img src="/svg/streamline_pen-tool-solid.svg" alt="Logo and Branding Icon" />,
      title: "Logo and Branding",
      description: "Memorable logos and branding guidelines."
    },
    {
      icon: <img src="/svg/ri_movie-2-ai-fill.svg" alt="Visual Design Icon" />,
      title: "Visual Design",
      description: "Compelling visual and motion designs for your brand."
    }
  ];

  return (
    <ServicesSection>
      <Title>Our Services</Title>
      <Subtitle>
        We offer a range of four services designed to assist our clients effectively. Please review the four options listed below that best fits your project.
      </Subtitle>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <ServiceIcon>{service.icon}</ServiceIcon>
          </ServiceCard>
        ))}
      </ServicesGrid>
      <TechStack>
        <img src="/svg/solar_figma-bold.svg" alt="Figma" />
        <img src="/svg/mdi_react.svg" alt="React" />
        <img src="/svg/mage_after-effects.svg" alt="After Effects" />
        <img src="/svg/ic_baseline-wordpress.svg" alt="WordPress" />
        <img src="/svg/ri_notion-fill.svg" alt="Notion" />
        <img src="/svg/mdi_slack.svg" alt="Slack" />
      </TechStack>
    </ServicesSection>
  );
};

export default Services; 