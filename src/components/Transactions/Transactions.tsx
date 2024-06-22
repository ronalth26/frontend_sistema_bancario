import React from 'react';
import { Container, Typography, Box, TextField, Button, Grid } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SendIcon from '@mui/icons-material/Send';

const Transactions: React.FC = () => {
  const handleTransaction = () => {
    // Lógica para manejar la transacción
  };

  return (
    <Container>
        <br></br>
      <Typography variant="h4" gutterBottom>
        Transacciones
      </Typography>
      <Box component="form" sx={{ mt: 3 }} noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="account-number"
              label="Número de Cuenta"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="amount"
              label="Monto"
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="description"
              label="Descripción"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<SendIcon />}
          sx={{ mt: 3, mb: 2 }}
          onClick={handleTransaction}
        >
          Realizar Transacción
        </Button>
      </Box>
    </Container>
  );
};

export default Transactions;
