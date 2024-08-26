import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Section = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 2rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const IconLink = styled.a`
  margin: 0 1rem;
  color: #333;
  font-size: 2rem;
  transition: color 0.3s;

  &:hover {
    color: #555;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 0;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 500px;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
`;

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Message:', message);
    // Clear the form fields
    setName('');
    setMessage('');
  };

  return (
    <Section id="contact">
      <Heading>Contact</Heading>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Textarea
          rows="4"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </Form>
      <IconsContainer>
        <IconLink
          href="https://github.com/LokithaPK"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/lokitha-kandasamy-136568259/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </IconLink>
        <IconLink
          href="mailto:your.email@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </IconLink>
      </IconsContainer>
    </Section>
  );
};

export default Contact;
