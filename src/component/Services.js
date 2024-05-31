import React, { useState } from 'react';
import { TextField, MenuItem, FormControl, InputLabel, Select, Box, Button, Card, CardContent, CardMedia, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Snackbar } from '@mui/material';
import { styled } from '@mui/system';
import MuiAlert from '@mui/material/Alert';
import Carousel from './carousel';
import Carousel2 from './carousel2';

const images = [
  'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1677824410346-64daa536a611?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const inputBgColor = process.env.REACT_APP_INPUT_BG_COLOR || 'white';

const StyledTextField = styled(TextField)({
  backgroundColor: inputBgColor,
});

const sampleItems = [
  {
    service: 'Water installation',
    image: 'https://blog.sfapp.magefan.top/media/445265-72.myshopify.com/images/The-Cedar-300x300.webp',
    description: 'Installation of water systems.',
    brand: 'Brand A',
    price: '$100',
    name: 'A'
  },
  {
    service: 'water quality test',
    image: 'https://blog.sfapp.magefan.top/media/445265-72.myshopify.com/images/The-Cedar-300x300.webp',
    description: 'Testing the quality of water.',
    brand: 'Brand B',
    price: '$50',
    name: 'B'
  },
  {
    service: 'Water filter',
    image: 'https://blog.sfapp.magefan.top/media/445265-72.myshopify.com/images/The-Cedar-300x300.webp',
    description: 'Water filtration system.',
    brand: 'Brand C',
    price: '$150',
    name: 'C'
  },
  {
    service: 'Water catridges',
    image: 'https://blog.sfapp.magefan.top/media/445265-72.myshopify.com/images/The-Cedar-300x300.webp',
    description: 'Replacement water cartridges.',
    brand: 'Brand D',
    price: '$30',
    name: 'D'
  },
  {
    service: 'Water installation',
    image: 'https://blog.sfapp.magefan.top/media/445265-72.myshopify.com/images/The-Cedar-300x300.webp',
    description: 'Installation of water systems.',
    brand: 'Brand A',
    price: '$100',
    name: 'E'
  },
  {
    service: 'water quality test',
    image: 'https://blog.sfapp.magefan.top/media/445265-72.myshopify.com/images/The-Cedar-300x300.webp',
    description: 'Testing the quality of water.',
    brand: 'Brand B',
    price: '$50',
    name: 'F'
  },
  {
    service: 'Water filter',
    image: 'https://blog.sfapp.magefan.top/media/445265-72.myshopify.com/images/The-Cedar-300x300.webp',
    description: 'Water filtration system.',
    brand: 'Brand C',
    price: '$150',
    name: 'G'
  },
  {
    service: 'Water catridges',
    image: 'https://blog.sfapp.magefan.top/media/445265-72.myshopify.com/images/The-Cedar-300x300.webp',
    description: 'Replacement water cartridges.',
    brand: 'Brand D',
    price: '$30',
    name: 'H'
  },
];

const AppointmentForm = () => {
  const [date, setDate] = useState('');
  const [service, setService] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleBookAppointment = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setModalOpen(false);
  };

  const handleConfirm = () => {
    const appointmentDetails = {
      name,
      mobileNumber,
      address,
      date,
      service,
    };

    localStorage.setItem('appointmentDetails', JSON.stringify(appointmentDetails));
    setModalOpen(false);
    setSnackbarOpen(true);
    setTimeout(() => {
      setSnackbarOpen(false);
    }, 3000);
  };

  const filteredItems = sampleItems.filter(
    (item) =>
      item.service === service &&
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Box
        component="form"
        sx={{ display: "flex", gap: 2, margin: "0 auto", mt: 4, mx: 8 }}
      >
        <StyledTextField
          label="Appointment Date"
          type="date"
          value={date}
          onChange={handleDateChange}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          sx={{ width: 250 }}
        />
        <FormControl fullWidth sx={{ width: 250 }}>
          <InputLabel>Service</InputLabel>
          <Select
            value={service}
            onChange={handleServiceChange}
            label="Service"
          >
            <MenuItem value="Water installation">Water installation</MenuItem>
            <MenuItem value="water quality test">Water quality test</MenuItem>
            <MenuItem value="Water filter">Water filter</MenuItem>
            <MenuItem value="Water catridges">Water cartridges</MenuItem>
          </Select>
        </FormControl>
        {service && (
          <StyledTextField
            label="Search"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            fullWidth
            sx={{ width: 250 }}
          />
        )}
      </Box>
      {!service && (<Carousel2 images={images}/>)}
      <Box  sx={{ display: "flex", gap: 2}}>
      <Box
        sx={{
          my: 4,
          mx: 8,
          border: "1px solid #D3D3D3",
          width: "fit-content",
          borderRadius: "8px",
        }}
      >
        {filteredItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              width: 500,
              m: 3,
              paddingBottom: 2,
              borderBottom: "1px solid #D3D3D3",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 150, borderRadius: "8px" }}
              image={item.image}
              alt={item.description}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h6">
                    {item.name}
                  </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {item.description}
                </Typography>
                <Box sx={{ display: "flex", gap: 4, alignItems: 'center',}} >
                  <Typography component="div" variant="h6">
                    {item.brand}
                  </Typography>
                  <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {item.price}
                </Typography>
                </Box>
                <Button variant="contained" onClick={handleBookAppointment}>
                  Book Appointment
                </Button>
              </CardContent>
            </Box>
          </Box>
        ))}
      </Box>
      {service && (<Carousel images={images}/>)}
      </Box>
      <Dialog open={modalOpen} onClose={handleClose}>
        <DialogTitle>Book Appointment</DialogTitle>
        <DialogContent>
          <StyledTextField
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            sx={{ my: 2 }}
          />
          <StyledTextField
            label="Mobile Number"
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            fullWidth
            sx={{ my: 2 }}
          />
          <StyledTextField
            label="Address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
            sx={{ my: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm} variant="contained">Confirm</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <MuiAlert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Your appointment has been booked successfully!
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default AppointmentForm;
