import { Typography } from "@mui/material";
import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import SmsIcon from "@mui/icons-material/Sms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const openProfile = () => {
    navigate("/profile")
  }

  return (
    <div className="header-comp">
      <Container>
        <Navbar className="header">
          <Navbar.Brand href="/">Linked App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/">
                <div className="header-menus">
                  <HomeIcon className="menu-icon" />
                  <Typography className="menu-text">Home</Typography>
                </div>
              </Nav.Link>
              <Nav.Link href="#link">
                <div className="header-menus">
                  <SupervisorAccountIcon className="menu-icon" />
                  <Typography className="menu-text">Network</Typography>
                </div>
              </Nav.Link>
              <Nav.Link href="#link">
                <div className="header-menus">
                  <WorkIcon className="menu-icon" />
                  <Typography className="menu-text">Jobs</Typography>
                </div>
              </Nav.Link>
              <Nav.Link href="#link">
                <div className="header-menus">
                  <SmsIcon className="menu-icon" />
                  <Typography className="menu-text">Messaging</Typography>
                </div>
              </Nav.Link>
              <Nav.Link href="#link">
                <div className="header-menus">
                  <NotificationsIcon className="menu-icon" />
                  <Typography className="menu-text">Notifications</Typography>
                </div>
              </Nav.Link>
              <NavDropdown
                title={<PersonOutlineTwoToneIcon />}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="menu-text" onClick={openProfile}>
                  My profile
                </NavDropdown.Item>
                <NavDropdown.Item className="menu-text">Help</NavDropdown.Item>
                <NavDropdown.Item className="menu-text">
                  Account
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
