import React, { Component, Suspense } from "react";

import AppLocale from "./lang";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import "./assets/css/style.css";
import "./assets/css/style-c0b3ba8736f66.css";
import "./assets/css/all.min.css";
import "./animate.min.css";
import { useHistory, redirect,BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Header from "./Navbar/Header";
import About from "./About";
import Services from "./Service";
import ServiceArea from "./ServiceArea";
import Ourteam from "./Ourteam";
import Blogs from "./Blogs";
import Contacts from "./Contacts";
import CaseStudies from "./CaseStudies";
import Footer from "./Footer";
//import products from "./views/app/dashboards/products";
class AppConfig extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { authUser, lang } = this.props;
    const currentAppLocale = AppLocale[lang];
    return (
      <div className="wrapper">
        <IntlProvider locale={lang} messages={currentAppLocale.messages}>
          <React.Fragment>
            <BrowserRouter>
              <Header />

              <Home />
              <About />
              <Services />
              <CaseStudies />
              <ServiceArea />
              <Ourteam />

              <Contacts />
              <Footer />
            </BrowserRouter>
          </React.Fragment>
        </IntlProvider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.settings.locale,
    authUser: state.auth.loaded,
  };
};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(AppConfig);
