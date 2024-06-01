import React, { cloneElement, useState } from 'react';
import { makeStyles } from '@mui/styles';
import {Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton, Snackbar} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import MuiAlert from '@mui/material/Alert';


const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    borderRadius: '4px',
    width: '80%',
    height: '60vh', // 60% of viewport height
    margin: '0 auto',
    overflow: 'hidden',
    marginTop: '30px'
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
  content: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
  },
  button: {
    marginTop: '16px',
    position: 'absolute',
    top: '20%'
  },
  input: {
    display: 'none',
  },
  snackbar: {
    position: 'fixed',
    right: '-100%',
    top: '0%',
  },
  imagePreview: {
    maxWidth: '20px',
    maxHeight: '20px',
    position: 'absolute',
    top: '82.5%',
    left: '30%',
  }
}));


const SellWithUs = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [formData, setFormData] = useState({
    mailId: '',
    mobileNumber: '',
    productName: '',
    productDescription: '',
    brandName: '',
    image: null,
  });
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.mailId) {
      newErrors.mailId = 'Mail Id is required';
    }
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = 'Mobile Number is required';
    }
    if (!formData.productName) {
      newErrors.productName = 'Product Name is required';
    }
    if (!formData.productDescription) {
      newErrors.productDescription = 'Product Description is required';
    }
    if (!formData.brandName) {
      newErrors.brandName = 'Brand Name is required';
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Convert image file to base64 string
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;

      const newData = {
        ...formData,
        image: base64String,
      };

      // Get existing data from localStorage
      const existingData = JSON.parse(localStorage.getItem('sellWithUsData')) || [];

      // Add new data
      existingData.push(newData);

      // Save updated data back to localStorage
      localStorage.setItem('sellWithUsData', JSON.stringify(existingData));

      // Close the dialog and show snackbar
      handleClose();
      setSnackbarOpen(true);
    };

    if (formData.image) {
      reader.readAsDataURL(formData.image);
    } else {
      // Handle case where no image is uploaded
      const newData = { ...formData, image: null };

      // Get existing data from localStorage
      const existingData = JSON.parse(localStorage.getItem('sellWithUsData')) || [];

      // Add new data
      existingData.push(newData);

      // Save updated data back to localStorage
      localStorage.setItem('sellWithUsData', JSON.stringify(existingData));

      // Close the dialog and show snackbar
      handleClose();
      setSnackbarOpen(true);
    }
  };

  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src="https://images.unsplash.com/photo-1633878353697-f751870d1d76?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Sell With Us"
      />
      <div className={classes.content}>
        <Typography variant="body1" align="center">
          Join our platform and start selling your products today.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleClickOpen}
        >
          Get Started
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sell Your Product</DialogTitle>
        <DialogContent>
          <form id="sell-form" onSubmit={handleSubmit}>
            <TextField
              margin="dense"
              id="mailId"
              label="Mail Id"
              type="email"
              fullWidth
              required
              value={formData.mailId}
              onChange={handleChange}
              error={!!errors.mailId}
              helperText={errors.mailId}
            />
            <TextField
              margin="dense"
              id="mobileNumber"
              label="Mobile Number"
              type="tel"
              fullWidth
              required
              value={formData.mobileNumber}
              onChange={handleChange}
              error={!!errors.mobileNumber}
              helperText={errors.mobileNumber}
            />
            <TextField
              margin="dense"
              id="productName"
              label="Product Name"
              type="text"
              fullWidth
              required
              value={formData.productName}
              onChange={handleChange}
              error={!!errors.productName}
              helperText={errors.productName}
            />
            <TextField
              margin="dense"
              id="productDescription"
              label="Product Description"
              type="text"
              fullWidth
              multiline
              rows={4}
              required
              value={formData.productDescription}
              onChange={handleChange}
              error={!!errors.productDescription}
              helperText={errors.productDescription}
            />
            <TextField
              margin="dense"
              id="brandName"
              label="Brand Name"
              type="text"
              fullWidth
              required
              value={formData.brandName}
              onChange={handleChange}
              error={!!errors.brandName}
              helperText={errors.brandName}
            />
            <input
              accept="image/*"
              className={classes.input}
              id="upload-image"
              type="file"
              onChange={handleImageUpload}
            />
            <label htmlFor="upload-image">
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
              Upload Image
            </label>
            {imagePreview && (
              <img src={imagePreview} alt="Preview" className={classes.imagePreview} />
            )}
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" form="sell-form" color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000} // 3 seconds
        onClose={handleSnackbarClose}
        classes={{ root: classes.snackbar }}
        anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
      >
        <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity="success">
          Your product has been uploaded successfully!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default SellWithUs;