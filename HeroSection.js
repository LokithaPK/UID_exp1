import React from 'react';
import styled from 'styled-components';

const Hero = styled.section`
  height: 100vh; /* Full page height */
  width: 100%; /* Full page width */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #333;
  color: white;
  text-align: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 200px; 
  height: 240px; 
  margin-bottom: 1rem;
`;

const Caption = styled.p`
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;

const HeroSection = () => {
  return (
    <Hero id="home">
      <ProfileImage src="/loki_res.jpg" alt="Profile" />
      <h1>Welcome to My Profile</h1>
      <Caption>Passionate web developer with a knack for creating engaging user experiences.</Caption>
    </Hero>
  );
};

export default HeroSection;
