import React, { useState, useEffect } from 'react';
import { Box, Button, CardMedia, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const images = [
  'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1677824410346-64daa536a611?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const Carousel2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Clean up the interval
  }, []);

  return (
    <Box position="relative" sx={{marginTop: "16px",}}>
      <Box display="flex" justifyContent="center" alignItems="center">
        {images.map((imageUrl, index) => (
          <Box key={index} display={index === currentImageIndex ? 'block' : 'none'} sx={{ maxHeight: 400, width: 900 }}>
            <CardMedia component="img" image={imageUrl} alt={`Image ${index + 1}`} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Carousel2;
