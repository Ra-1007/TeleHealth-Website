import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const drawerWidth = 240;

function UserAppointments(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['User Profile', 'Appointments', 'Doctor Options', 'Payment'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            TeleHealth Appointments
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Card variant="outlined" sx={{ width: "45%", marginBottom: '1rem' }}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                User Profile
              </Typography>
              <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                Name: John Doe
              </Typography>
              <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                Email: john.doe@example.com
              </Typography>
              <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                Address: 123 Main St, Anytown, USA
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ width: "45%", marginBottom: '1rem' }}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                Appointments
              </Typography>
              <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                Date: January 15, 2024
              </Typography>
              <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                Doctor: Dr. Smith
              </Typography>
              <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                Time: 10:00 AM
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Card variant="outlined" sx={{ width: "100%", marginBottom: '1rem' }}>
          <CardContent>
            <Typography variant="h5" component="div" sx={{ mb: 2 }}>
              Doctor Options
            </Typography>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              Dr. Smith - Cardiology
            </Typography>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              Dr. Johnson - Dermatology
            </Typography>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              Dr. Brown - Neurology
            </Typography>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ width: "100%" }}>
          <CardContent>
            <Typography variant="h5" component="div" sx={{ mb: 2 }}>
              Payment
            </Typography>
            <form>
              <label htmlFor="cardNumber">Card Number</label>
              <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" />
              <label htmlFor="expirationDate">Expiration Date</label>
              <input type="text" id="expirationDate" placeholder="MM/YY" />
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" />
            </form>
            <Button variant="contained">Pay</Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

UserAppointments.propTypes = {
  window: PropTypes.func,
};

export default UserAppointments;
