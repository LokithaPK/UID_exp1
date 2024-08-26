import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem 4rem; /* Adjusted padding */
  background-color: #f4f4f4;
  min-height: 100vh; /* Ensure the section takes up the full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center the content vertically */
`;


const Heading = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const Paragraph = styled.p`
  color: #555;
  font-size: 1rem;
  margin: 1rem 0;
`;

const ContentWrapper = styled.div`
  margin-top: 2rem;
`;

const List = styled.ul`
  list-style-type: disc;
  margin: 0;
  padding-left: 2rem;
`;

const About = () => {
  return (
    <Section id="about">
      <ContentWrapper>
        <Heading>Skills</Heading>
        <List>
          <li>Front-end Development (React, HTML, CSS, JavaScript)</li>
          <li>Back-end Development (Node.js)</li>
          <li>Database Management (MongoDB, SQL)</li>
          <li>UI/UX Design</li>
          <li>Project Management</li>
        </List>
      </ContentWrapper>
      
      <ContentWrapper>
        <Heading>Projects</Heading>
        <Paragraph>
          I have worked on a variety of projects, including:
        </Paragraph>
        <List>
          <li>Virtual Classroom Platform</li>
          <li>Online Bakery Systems</li>
          <li>Responsive Websites</li>
          <li>Mobile Applications</li>
        </List>
      </ContentWrapper>
      
      <ContentWrapper>
        <Heading>Certifications & Courses</Heading>
        <Paragraph>
          I have enhanced my skills through various certifications and courses:
        </Paragraph>
        <List>
          <li>Advanced Diploma in Java</li>
          <li>Database Management System (Infosys)</li>
          <li>Artificial Intelligence and Data Science (Infosys)</li>
        </List>
      </ContentWrapper>
    </Section>
  );
};

export default About;
