import React from 'react';
import styled from 'styled-components';

const WorkSection = styled.section`
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
    overflow-x: hidden;
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

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px 20px;
  max-width: 801px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 8px;
  padding-right: 8px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px 0;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
`;

const WorkItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const WorkImageContainer = styled.a`
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 24px;
  width: 390px;
  height: 367px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: block;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;

  @media (max-width: 600px) {
    width: 100%;
    height: 220px;
    margin-bottom: 12px;
    margin-left: 0;
    margin-right: 0;
  }
`;

const WorkImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const WorkInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WorkText = styled.div``;

const WorkTitle = styled.h3`
  font-family: 'Satoshi', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: white;
  margin: 0 0 4px 0;
  transition: color 0.2s ease;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: #ccc;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const WorkCategory = styled.p`
  font-family: 'Satoshi', sans-serif;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const workData = [
  {
    image: '/Work/zakatapp.png',
    title: 'Wealth Purifying App (Zakat)',
    category: 'UI/UX Design, Mobile App',
    url: '/projects/wealth-purifying-app',
    isExternal: false
  },
  {
    image: '/Work/connflow.png',
    title: 'Connflow',
    category: 'UI/UX Design, UX Research, SaaS',
    url: 'https://connflow.cloud/',
    isExternal: true
  },
  {
    image: '/Work/pepsi.png',
    title: 'Pepsi Co (Haidiri Beverages)',
    category: 'UI/UX Design, Visual Design, Website',
    url: 'https://www.pepsiislamabad.com/',
    isExternal: true
  },
  {
    image: '/Work/smartinn.png',
    title: 'Smartinn',
    category: 'UI/UX Design, E-commerce',
    url: 'https://smartinn.ae/',
    isExternal: true
  },
];

const Work = () => {
  return (
    <WorkSection>
      <Title>High Quality Work</Title>
      <Description>How we helped others succeed.</Description>
      <WorkGrid>
        {workData.map((item, index) => (
          <WorkItem key={index}>
            <WorkImageContainer 
              href={item.url} 
              {...(item.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <WorkImage src={item.image} alt={item.title} />
            </WorkImageContainer>
            <WorkInfo>
              <WorkText>
                <WorkTitle>
                  <a 
                    href={item.url} 
                    {...(item.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {item.title}
                  </a>
                </WorkTitle>
                <WorkCategory>{item.category}</WorkCategory>
              </WorkText>
            </WorkInfo>
          </WorkItem>
        ))}
      </WorkGrid>
    </WorkSection>
  );
};

export default Work;