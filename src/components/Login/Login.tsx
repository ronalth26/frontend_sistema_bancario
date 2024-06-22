import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import styled from '@emotion/styled';
import './Login.css'; // Importa tu archivo CSS

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  background-color: #f5f5f5;
`;

const StyledFormContainer = styled.div`
  text-align: center;
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const StyledIconBox = styled(Box)`
  margin: auto;
  margin-bottom: 1rem;
`;

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aquí agregar lógica para autenticar al usuario
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/dashboard');
  };

  const handleForgotPassword = () => {
    // Lógica para enviar correo de recuperación de contraseña
    alert('Se enviará un correo electrónico para recuperar la contraseña.');
  };

  return (
    <StyledContainer>
      <StyledFormContainer>
        <StyledIconBox>
          <LockOutlinedIcon fontSize="large" color="primary" />
        </StyledIconBox>
        <Typography variant="h5" gutterBottom>
          Iniciar Sesión
        </Typography>
        <TextField
          label="Usuario"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          InputProps={{
            startAdornment: (
              <Box mr={1}>
                <MailOutlineIcon color="action" />
              </Box>
            ),
          }}
        />
        <TextField
          label="Contraseña"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <Box mr={1}>
                <LockOutlinedIcon color="action" />
              </Box>
            ),
          }}
        />
        <Button variant="contained" color="primary" onClick={handleLogin} fullWidth sx={{ mb: 2 }}>
          Iniciar Sesión
        </Button>
        <Button color="primary" onClick={handleForgotPassword} fullWidth>
          ¿Olvidaste tu contraseña?
        </Button>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default Login;
