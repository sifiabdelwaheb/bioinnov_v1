import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import logo from "../assets/images/BioInnov8_logo-removebg-preview (1).png";

const useStyles = makeStyles({
  list: {
    width: " 100%",
  },
  fullList: {
    width: "auto",
  },
  paper: {
    backgroundColor: "#fff",

    color: "#000",
    width: "85%",
    height:"100%",

    paddingTop: "10%",
    paddingLeft:"1%"
  },
  icon: {
    color: "#000",

    position: "relative",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "20px",
    minWidth: "100%",
    backgroundColor: "wh",
  },
});

const DrawerWrapper = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        ""
      ) : (
        <div style={{display:'flex',justifyContent:"space-between"}}>
         
          <div class="mean-bar">
            <a href="index.html">
              <img
                class="logo-small"
                alt="Techkit"
                src={logo}
                style={{ maxWidth: "180", maxHeight: "100px" }}
              />
            </a>

            <span class="sidebarBtn">
              <span class="fa fa-bars"></span>
            </span>
          </div>
          <IconButton onClick={() => setIsOpen(true)} className={classes.icon}>
            <MenuIcon style={{ color: "#0e204d",fontSize:"40px" }} />
          </IconButton>
        </div>
      )}

      <Drawer
        classes={{ paper: classes.paper }}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div>
          <div>
            <div style={{ paddingLeft: "5%",paddingTop:'10%' }}>
              <div class="offscreen-navigation">
                <nav class="menu-main-primary-container">
                  <ul class="menu">
                    <li class="list menu-item-parent menu-item-has-children">
                      <a class="animation" href="index.html">
                        Home
                      </a>
                      <ul class="main-menu__dropdown sub-menu">
                        <li>
                          <a href="index.html">Main Home</a>
                        </li>
                        <li>
                          <a href="software-innovation.html">
                            {" "}
                            Software Company
                          </a>
                        </li>
                        <li>
                          <a href="it-agency.html">IT Agency</a>
                        </li>

                        <li>
                          <a href="vertical-slider.html">Vertical Slider</a>
                        </li>
                      </ul>
                    </li>
                    <li class="list menu-item-parent menu-item-has-children">
                      <a class="animation" href="about-us.html">
                        Company
                      </a>
                      <ul class="main-menu__dropdown sub-menu">
                        <li>
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li>
                          <a href="why-chose-us.html">Why Chose Us</a>
                        </li>
                        <li>
                          <a href="faq.html">Help & FAQ'S</a>
                        </li>
                        <li>
                          <a href="history.html">Our History</a>
                        </li>
                        <li>
                          <a href="careers.html">Careers</a>
                        </li>
                      </ul>
                    </li>
                    <li class="list menu-item-parent menu-item-has-children">
                      <a class="animation" href="it-solution.html">
                        It Solutions
                      </a>
                      <ul class="main-menu__dropdown sub-menu">
                        <li>
                          <a href="it-solution.html">It Solutions</a>
                        </li>
                        <li>
                          <a href="it-services.html">It Services</a>
                        </li>
                        <li>
                          <a href="industries-services.html">
                            Industries Services
                          </a>
                        </li>
                        <li>
                          <a href="services-details.html">
                            Services Details 01
                          </a>
                        </li>
                        <li>
                          <a href="services-details-02.html">
                            Services Details 02
                          </a>
                        </li>
                        <li>
                          <a href="services-details-03.html">
                            Services Details 03
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="list menu-item-parent menu-item-has-children">
                      <a class="animation" href="index.html">
                        Pages
                      </a>
                      <ul class="main-menu__dropdown sub-menu">
                        <li>
                          <a href="team.html">Our Team</a>
                        </li>
                        <li>
                          <a href="price.html">Pricing Plans</a>
                        </li>
                        <li>
                          <a href="404.html">404 Page</a>
                        </li>
                        <li>
                          <a href="case-01.html">Case Studies 01</a>
                        </li>
                        <li>
                          <a href="case-02.html">Case Studies 02</a>
                        </li>
                        <li>
                          <a href="case-03.html">Case Studies 03</a>
                        </li>
                        <li>
                          <a href="case-details.html">Case Details</a>
                        </li>
                      </ul>
                    </li>
                    <li class="list menu-item-parent menu-item-has-children">
                      <a class="animation" href="blog-details.html">
                        Blogs
                      </a>
                      <ul class="main-menu__dropdown sub-menu">
                        <li>
                          <a href="grid-layout.html">Grid Layout</a>
                        </li>
                        <li>
                          <a href="list-layout.html">List Layout</a>
                        </li>
                        <li>
                          <a href="blog-details-no-sidebar.html">No Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li class="list menu-item-parent">
                      <a class="animation" href="contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerWrapper;
