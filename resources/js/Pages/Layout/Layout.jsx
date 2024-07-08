import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 10px;
  height: 100vh;
  padding: 20px;
  background-color: #f8f9fa;
`;

const CommonStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 1.2em;
  color: #fff;
`;

const StreamingSubtitles = styled(CommonStyle)`
  grid-column: span 5;
  background-color: #6c757d;
`;

const Subtitling = styled(CommonStyle)`
  grid-column: span 2;
  background-color: #e74c3c;
`;

const Slideshow = styled(CommonStyle)`
  grid-column: span 2;
  grid-row: span 5;
  background-color: #f39c12;
`;

const VideoCarousel = styled(CommonStyle)`
  grid-column: span 3;
  grid-row: span 5;
  background-color: #8e44ad;
`;

const ImageCarousel1 = styled(CommonStyle)`
  grid-column: span 1;
  background-color: #3498db;
`;

const ImageCarousel2 = styled(CommonStyle)`
  grid-column: span 1;
  background-color: #2ecc71;
`;

const ImageCarousel3 = styled(CommonStyle)`
  grid-column: span 1;
  background-color: #e67e22;
`;

const Layout = () => {
  return (
    <Container>
      <StreamingSubtitles>Rumbai Food Paradise</StreamingSubtitles>
      <Subtitling>Jam</Subtitling>
      <VideoCarousel>Video</VideoCarousel>
      <Slideshow>SlideShow</Slideshow>
      <ImageCarousel1>Gambar1</ImageCarousel1>
      <ImageCarousel2>Gambar2</ImageCarousel2>
      <ImageCarousel3>Gambar3</ImageCarousel3>
    </Container>
  );
}

export default Layout;
