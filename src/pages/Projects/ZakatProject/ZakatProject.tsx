import React from 'react';
import styled from 'styled-components';
import Navbar from '../../../components/Navbar/Navbar';


const ProjectContainer = styled.div`
  background: #000000;
  color: white;
  min-height: 100vh;
  padding-bottom: 120px;
  padding-top: 120px;
  width: 100%;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 20px 0;
`;

const HeaderSection = styled.section`
  margin-bottom: 60px;
`;

const ProjectTitle = styled.h1`
  font-family: 'Satoshi', sans-serif;
  font-size: 56px;
  font-weight: 600;
  color: white;
  margin: 0 0 20px 0;
  line-height: 1.1;
`;

const ProjectDescription = styled.p`
  font-family: 'Satoshi', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
`;

const ProjectDetails = styled.div`
  display: flex;
  gap: 60px;
  margin: 40px 0 60px;
  width: 100%;
`;

const DetailColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailLabel = styled.span`
  font-family: 'Satoshi', sans-serif;
  font-size: 16px;
  letter-spacing: -16%;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 8px;
 
  letter-spacing: 0.1em;
`;

const DetailValue = styled.span<{ $isScope?: boolean }>`
  font-family: 'Satoshi', sans-serif;
  font-size: 18px;
  letter-spacing: -16%;
  color: white;
  line-height: 1.6;
  ${props => props.$isScope && `
    display: inline-flex;
    flex-wrap: wrap;
    gap: 8px;
  `}
`;

const ScopeItem = styled.span`
  background: rgba(75, 30, 126, 0.45);
  border-radius: 64px;
  padding: 4px 12px;
  font-size: 16px;
  white-space: nowrap;
  display: inline-block;
  margin-bottom: 8px;
`;


const VideoContainer = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;


const ProjectImage = styled.div`
  width: 100%;
  height: 600px;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlaceholderText = styled.p`
  font-family: 'Satoshi', sans-serif;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  padding: 20px;
`;

const ZakatProject = () => {
  return (
    <ProjectContainer>
      <Navbar />
      <ContentWrapper>
        <HeaderSection>
          <ProjectTitle>Wealth Purifying App (Zakat)</ProjectTitle>
          <ProjectDescription>
          ISRA a non-profit charity was struggling to manage donations and distribute funds manually, leading to errors and a clunky, outdated process. Donors also lacked clear insight into how their contributions were used. I designed the Zakat App for easy, transparent donation tracking. Donors can see their impact in real-time and set up recurring contributions with automated reminders. Donations rose significantly in two months, and recurring contributions jumped higher after launch. The improved experience boosted donor trust and satisfaction.
          </ProjectDescription>
          
          <ProjectDetails>
            <DetailColumn>
              <DetailItem>
                <DetailLabel>Client</DetailLabel>
                <DetailValue>ISRA</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailLabel>Industry</DetailLabel>
                <DetailValue>Fintech, Finance, NGO</DetailValue>
              </DetailItem>
            </DetailColumn>
            <DetailColumn>
              <DetailItem>
                <DetailLabel>Turnaround</DetailLabel>
                <DetailValue>(under developement)</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailLabel>Scope of work</DetailLabel>
                <DetailValue $isScope>
                  <ScopeItem>UI/UX Design</ScopeItem>
                  <ScopeItem>Mobile App</ScopeItem>
                  <ScopeItem>UX Research</ScopeItem>
                </DetailValue>
              </DetailItem>
            </DetailColumn>
          </ProjectDetails>
        </HeaderSection>

        <div>
          
          <VideoContainer>
            <video 
              src="/Zakat App.mp4" 
              autoPlay 
              loop 
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => console.error('Video failed to load:', e)}
            >
              Your browser does not support the video tag.
            </video>
          </VideoContainer>
        </div>

        <div>
         
            <ProjectImage>
              <img 
                src="/Zakat App-Mockup.png" 
                alt="Zakat App Mockup" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain',
                  borderRadius: '12px'
                }} 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '';
                  target.parentElement!.querySelector('p')!.style.display = 'block';
                }}
              />
              <PlaceholderText style={{ display: 'none' }}>Failed to load image</PlaceholderText>
            </ProjectImage>
        </div>
      </ContentWrapper>
    
    </ProjectContainer>
  );
};

export default ZakatProject;
