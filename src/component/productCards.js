import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Box } from '@mui/material';

const getGoogleDriveImageUrl = (driveLink) => {
    const fileIdMatch = driveLink.match(/[-\w]{25,}/);
    return fileIdMatch ? `https://drive.google.com/uc?export=view&id=${fileIdMatch[0]}` : null;
};

const ProductCard = ({ product }) => {
   const imageLink = getGoogleDriveImageUrl(product.imageUrl) || product.imageUrl;
  return (
    <Card sx={{ maxWidth: 330, margin: 'auto', marginTop: 2, height: 350 }}>
      <CardMedia
        component="img"
        height="200"
        image={product.imageUrl}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h7" color="text.primary" sx={{ marginTop: 1 }}>
          ${product.price}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Brand: {product.manufacturer}
        </Typography>
      </CardContent>
    </Card>
  );
};

const ProductList = ({ products }) => {
  return (
    <Box sx={{ px: 4, my: 4 }}>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product._id} xs={12} sm={6} md={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList
