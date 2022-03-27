import React from 'react'

import { useDispatch } from 'react-redux';
import { logout } from '../JS/Actions/user';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"


// import for UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

// const UI
const pages = ['Gold Cars🌟🌟🌟'];
const settings = ['profile', 'logout'];



// FN NavBar
function NavBar() {

  const user = useSelector(state=>state.userReducer.user)
  const dispatch = useDispatch()

  // const UI
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget,console.log('handleOpenNavMenu'));
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget,console.log('handleOpenUserMenu'));
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null,navigate('/goldcar'));
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(console.log('handleCloseUserMenu'));
  };


  let navigate=useNavigate()
  return (

    <header style={{position:'relative',width:'100%',marginBottom:'4rem'}}>

<AppBar  style={{backgroundColor:'#283747',position:'fixed'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Button><img src='./logo.jpg' alt='img' style={{height:'3rem' ,borderRadius:'50%'}} onClick={()=>navigate('/')} /></Button>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Button><img src='./logo.jpg' alt='img' style={{height:'3rem' ,borderRadius:'50%'}} onClick={()=>navigate('/')} /></Button>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }} >
          {!user.name&&<Button onClick={()=>navigate("/login")} style={{backgroundColor:'#5D6D7E',color:'white'}}>Login</Button>}

              {user.name&& <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={user.imageProfile||"./noAvatar.jpg"}  /><div style={{marginLeft:'1rem',color:'white',fontSize:'1rem'}}>{user.name}</div> 
              </IconButton>
            </Tooltip>}
            <Menu 
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <a href='#'  style={{textDecoration: 'none',color:'black'}} 
                
                onClick={ (e)=>  { handleCloseUserMenu();
                                  if(setting==='profile'){navigate('/profile')}
                                  if(setting==='logout'){dispatch(logout(navigate))}
                                 } }> 
                 
                 <MenuItem   key={setting}   >     
                  <Typography textAlign="center" >{setting}  </Typography>
                </MenuItem></a> 
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
        
        
        
    </header>
  )
}

export default NavBar