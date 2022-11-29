import ContactsIcon from "@mui/icons-material/Contacts";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthenticationContext";
import { useCart } from "../../context/ShoppingCartContext";
import "./NavbarStyle.css";

const pages = ["home", "shop", "about-us", "contact-us"];
const settings = ["Register", "Login", "Logout"];

const Navbar = () => {

const navigation = useNavigate();

const {logout} = useAuth();
const cartContext = useCart();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className="muiNavbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Button
                  href={("/" + page).toLowerCase()}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: "block",
                    "&:hover": {
                      color: "blue",
                    },
                  }}
                >
                  {page === "home" ? <HomeIcon className="icons" /> : ""}
                  {page === "shop" ? (
                    <ShoppingCartIcon className="icons" href="/shoppingcart"/>
                  ) : (
                    ""
                  )}
                  {page === "about-us" ? (
                    <ContactsIcon className="icons" />
                  ) : (
                    ""
                  )}
                </Button>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                href={("/" + page).toLowerCase()}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box style={{ display: "flex", marginRight: "25px" }}>
            <Badge badgeContent={cartContext.cars.length} color="error">
              <IconButton onClick={() => {navigation("/shoppingcart")}}>
                <ShoppingCartIcon style={{ color: "white" }} />
              </IconButton>
            </Badge>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => {
                if(setting === "Logout") {                  
                  return (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Button onClick={() => {
                        logout();
                        navigation("/")
                        }} key={setting}>
                        {setting}
                      </Button>
                    </MenuItem>
                  );
                }
                return (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Button href={("/" + setting).toLowerCase()} key={setting}>
                      {setting}
                    </Button>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
