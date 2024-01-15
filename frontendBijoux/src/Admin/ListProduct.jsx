import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ProductApi from '../services/Api/ProductApi'; // Replace with the actual path

export default function ListProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from your API
    const fetchProducts = async () => {
      try {
        const response = await ProductApi.getAll();
        console.log('Response from API:', response);
    
        if (response.data && Array.isArray(response.data.data)) {
          setProducts(response.data.data);
        } else {
          console.error('Invalid data structure in the API response:', response);
          setProducts([]);
        }
      } catch (error) {
        console.error('Error fetching products:', error.message);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography>
                      {product.description}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Price: ${product.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Stock: {product.stock}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}
