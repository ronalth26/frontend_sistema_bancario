import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonIcon from '@mui/icons-material/Person';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sistema Bancario UTP
        </Typography>
        
        <Button color="inherit" startIcon={<HomeIcon />} component={Link} to="/" sx={{ mr: 1 }}>
          Home
        </Button>

        <Button color="inherit" startIcon={<MonetizationOnIcon />} component={Link} to="/transactions" sx={{ mr: 1 }}>
          Transacciones
        </Button>

        <Button color="inherit" startIcon={<AccountBalanceIcon />} component={Link} to="/accounts" sx={{ mr: 1 }}>
          Cuentas
        </Button>

        <Button color="inherit" startIcon={<PersonIcon />} component={Link} to="/profile" sx={{ mr: 1 }}>
          Profile
        </Button>

        <Button color="inherit" startIcon={<PersonIcon />} component={Link} to="/login">
          Login
        </Button>

        <div className="search">
          <div className="searchIcon">
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Buscar..."
            classes={{
              root: 'inputRoot',
              input: 'inputInput',
            }}
            inputProps={{ 'aria-label': 'search' }}
            sx={{ ml: 1 }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
