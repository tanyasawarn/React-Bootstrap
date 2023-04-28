import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";

const Header = () => {

  const getData= useSelector((state)=>state.cartreducer.carts);
  console.log(getData);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <NavLink to="/"className="text-decoration-none text-light mx-3">Home</NavLink>
            <NavLink to="/store" className="text-decoration-none text-light mx-3">Store</NavLink>
            <NavLink to="/About" className="text-decoration-none text-light mx-3">About</NavLink>
            
          </Nav>
          <Badge badgeContent={getData.length} color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
            Cart
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <div className="card-details d-flex justify-content-center align-items-center">
            <i
              className="fas fa-close smallclose"
              style={{
                position: "absolute",
                top: 1,
                right: 30,
                fontSize: 15,
                cursor: "pointer",
                 
              }}
              onClick={handleClose}
              ></i>
            <p style={{ fontSize: 18 }}>Your Cart Is Empty</p>
          </div>
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
