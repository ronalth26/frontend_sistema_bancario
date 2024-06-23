import React from 'react';
import { Container, Typography, Box, TextField, Button, Avatar, Grid } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Profile: React.FC = () => {
  const activeUser = localStorage.getItem('activeUser');
  const handleUpdateProfile = () => {
    // Lógica para actualizar el perfil
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Avatar sx={{ width: 100, height: 100, mb: 2, mx: 'auto' }}>
          <AccountCircleIcon sx={{ width: 64, height: 64 }} />
        </Avatar>
        <Typography variant="h4" align="center" gutterBottom>
          Perfil de {activeUser}
          
        </Typography>
        <Box component="form" sx={{ mt: 3 }} noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Usuario"
                defaultValue={activeUser}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="DNI"
                defaultValue="74212062"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="password"
                label="Contraseña"
                type="password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            onClick={handleUpdateProfile}
          >
            Actualizar Perfil
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
