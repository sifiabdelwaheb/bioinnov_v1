import logo from "../assets/images/BioInnov8_logo-removebg-preview (1).png";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SettingsPhoneIcon from "@mui/icons-material/SettingsPhone";
import MailIcon from "@mui/icons-material/Mail";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppBar from "@mui/material/AppBar";
import DrawerWrapper from "./DrawerWrapper";
import { HashLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import {
  menuHiddenBreakpoint,
  searchPath,
  localeOptions,
  isDarkSwitchActive,
} from "../constants/defaultValues";
import {
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import {
  setContainerClassnames,
  clickOnMobileMenu,
  changeLocale,
  changeSelectedMenuHasSubItems,
} from "../redux/actions";
import IntlMessages from "../helpers/IntlMessages";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),

    display: "flex",

    paddingRight: "2%",

    marginLeft: "0%",
  },

  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
    customHoverFocus: {
      "&:hover, &.Mui-focusVisible": { backgroundColor: "yellow" },
    },
  },
}));

function Header() {
  const dispatch = useDispatch();
  const redux = useSelector((state) => state);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleChangeLocale = (locale, direction) => {
    console.log("direction", direction);
    dispatch(changeLocale(locale));
  };
  return (
    <div>
      {isMobile ? (
        <div>
          <DrawerWrapper />
        </div>
      ) : (
        <header class="header d-none d-lg-block sticky-on">
          <div id="sticky-placeholder"></div>
          <div
            id="topbar-wrap"
            class="header-top header-top__border_bottom header-top__padding container-custom"
          >
            <div class="container-fluid">
              <div class="row align-items-center">
                <div class="col-lg-9">
                  <div class="header-top__info">
                    <div class="header-top__info_item header-top__info_time">
                      <div class="header-top__info_icon">
                        <AccessTimeIcon
                          sx={{
                            color: "#274f40",
                            fontSize: 30,
                            marginRight: "10px",
                          }}
                        />
                      </div>
                      <div class="header-top__info_text">
                        <p class="header-top__info_text--small">
                          <IntlMessages id="header.time" />
                        </p>
                        <span class="header-top__info_text--big">
                          {" "}
                          9am - 6pm{" "}
                        </span>
                      </div>
                    </div>
                    <div class="header-top__info_item header-top__info_phone">
                      <div class="header-top__info_icon">
                        <SettingsPhoneIcon
                          sx={{
                            color: "#274f40",
                            fontSize: 30,
                            marginRight: "10px",
                          }}
                        />
                      </div>
                      <div class="header-top__info_text">
                        <p class="header-top__info_text--small">
                          <IntlMessages id="header.call" />
                        </p>
                        <span class="header-top__info_text--big">
                          (+216) 52 912 125
                        </span>
                      </div>
                    </div>
                    <div class="header-top__info_item header-top__info_email">
                      <div class="header-top__info_icon">
                        <MailIcon
                          sx={{
                            color: "#274f40",
                            fontSize: 30,
                            marginRight: "10px",
                          }}
                        />
                      </div>
                      <div class="header-top__info_text">
                        <p class="header-top__info_text--small">
                          <IntlMessages id="header.mail" />
                        </p>
                        <span class="header-top__info_text--big">
                          contact@bioinnov-8.com
                        </span>
                      </div>
                    </div>
                    <div class="header-top__info_item header-top__info_address">
                      <div class="header-top__info_icon">
                        <AddLocationIcon
                          sx={{
                            color: "#274f40",
                            fontSize: 30,
                            marginRight: "10px",
                          }}
                        />
                      </div>
                      <div class="header-top__info_text">
                        <p class="header-top__info_text--small">
                          <IntlMessages id="header.adress" />
                        </p>
                        <span class="header-top__info_text--big">
                          MANAR II TUNIS,TUNISIA
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 d-none d-lg-block">
                  <div class="header-top__social">
                    <ul>
                      <li class="header-top__social_list">
                        <a
                          class="header-top__social_list--link"
                          href="javascript:void(0);"
                          style={{ backgroundColor: "#edf3ff" }}
                        >
                          <FacebookIcon
                            sx={{ color: "#4167af", fontSize: 24 }}
                          />
                        </a>
                      </li>
                      <li class="header-top__social_list">
                        <a
                          class="header-top__social_list--link "
                          href="javascript:void(0);"
                          style={{ backgroundColor: "#dff3ff" }}
                        >
                          <TwitterIcon
                            sx={{ color: "#3b9dea", fontSize: 24 }}
                          />
                        </a>
                      </li>
                      <li class="header-top__social_list">
                        <a
                          class="header-top__social_list--link "
                          href="javascript:void(0);"
                          style={{ backgroundColor: "#faedf5" }}
                        >
                          <InstagramIcon
                            sx={{ color: "#d1005c", fontSize: 24 }}
                          />
                        </a>
                      </li>
                      <li class="header-top__social_list">
                        <a
                          class="header-top__social_list--link "
                          href="javascript:void(0);"
                          style={{ backgroundColor: "#ecf8ff" }}
                        >
                          <LinkedInIcon
                            sx={{ color: "#016196", fontSize: 24 }}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="navbar-wrap"
            class="header-bottom container-custom navbar-wrap white-bg"
          >
            <div class="container-fluid">
              <div class="header-bottom__row">
                <div class="header-bottom__col">
                  <div class="logo">
                    <a href="index.html" class="logo__link">
                      <img
                        src={logo}
                        alt="BioInnov8"
                        style={{ maxWidth: "200px", maxHeight: "140px" }}
                      />
                    </a>
                  </div>
                </div>
                <div class="header-bottom__col">
                  <div class="main-menu">
                    <nav class="main-menu__nav">
                      <ul>
                        <li class="list">
                          <HashLink to="#" smooth>
                            <a class="animation">
                              {" "}
                              <IntlMessages id="menu.app" />
                            </a>
                          </HashLink>
                        </li>
                        <li class="list">
                          <HashLink to="#About" smooth>
                            <a class="animation">
                              <IntlMessages id="menu.about" />
                            </a>
                          </HashLink>
                        </li>
                        <li class="list">
                          <HashLink to="#SERVICES" smooth>
                            <a class="animation">
                              <IntlMessages id="menu.service" />
                            </a>
                          </HashLink>
                        </li>
                        <li class="list">
                          <HashLink to="#Solutions" smooth>
                            <a class="animation">
                              <IntlMessages id="menu.solution" />
                            </a>
                          </HashLink>
                        </li>

                        <li class="list">
                          <HashLink to="#team" smooth>
                            <a class="animation">
                              <IntlMessages id="menu.team" />
                            </a>
                          </HashLink>
                        </li>
                        <li class="list">
                          <HashLink to="#contactus" smooth>
                            <a class="animation">Contact</a>
                          </HashLink>
                        </li>

                        <li class="main-menu__nav_sub list">
                          <a class="animation">
                            {redux.settings.locale.toUpperCase()}{" "}
                            <ArrowDropDownIcon
                              sx={{
                                fontSize: 40,
                                marginLeft: "-10px",
                              }}
                            />
                          </a>
                          <ul class="main-menu__dropdown">
                            {localeOptions.map((l) => {
                              return (
                                <li className="nav__item" key={l.id}>
                                  <div
                                    style={{
                                      cursor: "pointer",
                                      marginBottom: "12px",
                                    }}
                                    onClick={() =>
                                      handleChangeLocale(l.id, l.direction)
                                    }
                                  >
                                    {l.name}
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </div>
  );
}

export default Header;
