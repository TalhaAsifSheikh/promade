import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  position: absolute;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding-top: 32px;
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    padding-left: 12px;
    padding-right: 12px;
  }
`;

const Drawer = styled.div<{ $open?: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 270px;
  background: rgba(20, 20, 20, 0.98);
  box-shadow: -2px 0 16px rgba(0,0,0,0.2);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 24px 24px 24px;
  transform: translateX(${props => props.$open ? '0' : '100%'});
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);

  @media (min-width: 901px) {
    display: none;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 32px;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

const NavContent = styled.div`
  width: 770px;
  height: 72px;
  border-radius: 60px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px 16px 10px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(10px);

  @media (max-width: 1024px) {
    width: 95vw;
    min-width: 0;
    padding: 8px 8px;
  }
  @media (max-width: 900px) {
    max-width: 100%;
    width: 100%;
    height: auto;
    flex-direction: row;
    align-items: center;
    padding: 8px 12px;
    border-radius: 24px;
    justify-content: space-between;
  }
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const NavRight = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
`;

const Logo = styled(Link)`
  display: block;
  height: 70px;
  cursor: pointer;
  text-decoration: none;
  
  img {
    height: 100%;
    width: auto;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 200;
  margin-left: 16px;
  position: relative;

  span {
    width: 30px;
    height: 3px;
    background: white;
    margin: 5px 0;
    border-radius: 2px;
    transition: 0.3s;
  }

  @media (max-width: 900px) {
    display: flex;
  }
`;

const NavLinks = styled.div<{ $open?: boolean }>`
  display: flex;
  gap: 32px;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 16px;
    width: 100vw;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.98);
    z-index: 150;
    padding: 24px 0 16px 0;
    display: ${props => (props.$open ? 'flex' : 'none')};
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  }
`;

interface NavLinkProps {
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

const NavLink = styled(Link).attrs<NavLinkProps>(({ to, href }) => ({
  as: href ? 'a' : undefined,
  to: to || undefined,
  href: href || undefined
}))<NavLinkProps>`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 24px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    border-radius: 24px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
  }
`;

const PlayIcon = styled.svg`
    width: 20px;
    height: 20px;
`;

const BookCallButton = styled.button`
  background: linear-gradient(90deg, #fff 0%, #f3f3f3 100%);
  color: #181818;
  border: none;
  border-radius: 999px;
  padding: 14px 32px;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: box-shadow 0.25s cubic-bezier(0.4,0,0.2,1),
              transform 0.18s cubic-bezier(0.4,0,0.2,1),
              background 0.25s cubic-bezier(0.4,0,0.2,1),
              color 0.25s cubic-bezier(0.4,0,0.2,1);
  white-space: nowrap;
  font-family: 'Satoshi', 'Inter', 'Segoe UI', Arial, sans-serif;
  box-shadow: 0 2px 12px 0 rgba(30,30,30,0.08), 0 1.5px 4px 0 rgba(0,0,0,0.04);
  letter-spacing: 0.01em;
  outline: none;
  border: 1.5px solid #eaeaea;

  &:hover, &:focus {
    background: linear-gradient(90deg, #f7f7f7 0%, #eaeaea 100%);
    color: #111;
    box-shadow: 0 4px 24px 0 rgba(30,30,30,0.13), 0 2px 8px 0 rgba(0,0,0,0.07);
    transform: translateY(-2px) scale(1.045);
    border-color: #d1d1d1;
  }

  &:active {
    background: #ededed;
    color: #222;
    box-shadow: 0 1px 4px 0 rgba(30,30,30,0.07);
    transform: scale(0.98);
    border-color: #e0e0e0;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleNavigation = (e: React.MouseEvent, sectionId: string) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
  };

  const handleBookCall = (e: React.MouseEvent) => {
    handleNavigation(e, 'booking');
  };

  return (
    <NavbarContainer>
      <NavContent>
        <NavLeft>
          <Logo to="/">
            <img src="/Frame 84.png" alt="Logo" />
          </Logo>
        </NavLeft>
        <NavRight>
          <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(7px, -8px)' : 'none' }} />
          </Hamburger>
        </NavRight>
        <NavLinks $open={false} style={{ display: window.innerWidth > 900 ? 'flex' : 'none' }}>
          <NavLink 
            to="/#work" 
            onClick={(e) => handleNavigation(e, 'work')}
          >
            Work
          </NavLink>
          <NavLink 
            to="/#services" 
            onClick={(e) => handleNavigation(e, 'services')}
          >
            Services
          </NavLink>
          <a 
          href="https://www.figma.com/proto/6Til2G4GOEcSWxkFgmvn2M/Promade-Designs?page-id=0%3A1&node-id=61-375&p=f&viewport=-3679%2C-1213%2C0.16&t=QajH3OrAWPVBdfdm-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=61%3A375" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: 'white',
            fontSize: '18px',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '24px',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
            <PlayIcon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/>
              <path d="M15.5 12L10.25 15.3301L10.25 8.66987L15.5 12Z" fill="white"/>
            </PlayIcon>
            Grand Portfolio
          </a>
          <BookCallButton onClick={handleBookCall}>Book a Call</BookCallButton>
        </NavLinks>
      </NavContent>
      <Drawer $open={menuOpen}>
        <CloseButton onClick={() => setMenuOpen(false)}>&times;</CloseButton>
        <NavLink 
          to="/#work" 
          onClick={(e) => handleNavigation(e, 'work')}
          style={{ width: '100%', margin: '16px 0' }}
        >
          Work
        </NavLink>
        <NavLink 
          to="/#services" 
          onClick={(e) => handleNavigation(e, 'services')}
          style={{ width: '100%', margin: '16px 0' }}
        >
          Services
        </NavLink>
        <a 
          href="https://www.figma.com/proto/6Til2G4GOEcSWxkFgmvn2M/Promade-Designs?page-id=0%3A1&node-id=61-375&p=f&viewport=-3679%2C-1213%2C0.16&t=QajH3OrAWPVBdfdm-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=61%3A375" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: 'white',
            fontSize: '18px',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '24px',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            margin: '16px 0'
          }}
        >
          <PlayIcon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/>
            <path d="M15.5 12L10.25 15.3301L10.25 8.66987L15.5 12Z" fill="white"/>
          </PlayIcon>
          Grand Portfolio
        </a>
        <BookCallButton style={{ width: '100%', margin: '24px 0 0 0' }} onClick={handleBookCall}>Book a Call</BookCallButton>
      </Drawer>
    </NavbarContainer>
  );
};

export default Navbar; 