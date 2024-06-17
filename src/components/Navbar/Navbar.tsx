import React from 'react';
import { AppBar, Toolbar, Typography, Button, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sistema Bancario UTP
        </Typography>
        
        <Button color="inherit" startIcon={<HomeIcon />} sx={{ mr: 1 }}>
          Home
        </Button>

        <Button color="inherit" startIcon={<MonetizationOnIcon />} sx={{ mr: 1 }}>
          Transacciones
        </Button>

        <Button color="inherit" startIcon={<AccountBalanceIcon />} sx={{ mr: 1 }}>
          Cuentas
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
