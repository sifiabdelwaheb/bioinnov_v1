import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo1 from "./assets/images/BioInnov8_logo-removebg-preview (1).png";
import logo from "./assets/images/BioInnov8_logo-removebg-preview-_1_.svg";

function Footer() {
  return (
    <footer class="footer footer--bg position-relative overflow-hidden">
      <img
        class="footer-shape footer-shape--left wow fadeInLeft"
        data-wow-delay="1.5s"
        src="https://radiustheme.com/demo/html/techkit/assets/images/shape/footer-shape-1.png"
        alt="Shape"
      />
      <img
        class="footer-shape footer-shape--right wow fadeInRight"
        data-wow-delay="1.5s"
        src="https://radiustheme.com/demo/html/techkit/assets/images/shape/footer-shape-2.png"
        alt="Shape"
      />
      <div class="footer--top footer--padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 mb-30">
              <div class="footer-widget">
                <div class="footer-widget__log mb-30">
                  <a href="index.html">
                    <img
                      src={logo}
                      alt="BioInnov8"
                      style={{ maxWidth: "220px", maxHeight: "160px" }}
                    />
                  </a>
                </div>
                
                <div class="footer-widget__social">
                  <ul>
                    <li class="footer-widget__social_list">
                      <a
                        class="footer-widget__social_list--link"
                        href="javascript:void(0);"
                      >
                        <FacebookIcon sx={{ color: "#4167af", fontSize: 35 }} />
                      </a>
                    </li>
                    <li class="footer-widget__social_list">
                      <a
                        class="footer-widget__social_list--link "
                        href="javascript:void(0);"
                      >
                        <TwitterIcon sx={{ color: "#3b9dea", fontSize: 35 }} />
                      </a>
                    </li>
                    <li class="footer-widget__social_list">
                      <a
                        class="footer-widget__social_list--link "
                        href="javascript:void(0);"
                      >
                        <InstagramIcon
                          sx={{ color: "#d1005c", fontSize: 35 }}
                        />
                      </a>
                    </li>
                    <li class="footer-widget__social_list">
                      <a
                        class="footer-widget__social_list--link "
                        href="javascript:void(0);"
                      >
                        <LinkedInIcon sx={{ color: "#016196", fontSize: 35 }} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 mb-25">
              <div class="footer-widget">
                <div class="footer-widget__title">
                  <h3 class="footer-widget__title_heading">IT Services</h3>
                </div>
                <div class="footer-widget__menu">
                  <ul>
                    <li class="footer-widget__menu_list">
                      <a href="it-services.html">IT Services</a>
                    </li>

                    <li class="footer-widget__menu_list">
                      <a href="it-solution.html">Managed IT</a>
                    </li>
                    <li class="footer-widget__menu_list">
                      <a href="contact.html">IT Support</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 offset-lg-1 mb-25">
              <div class="footer-widget">
                <div class="footer-widget__title">
                  <h3 class="footer-widget__title_heading">Important Links</h3>
                </div>
                <div class="footer-widget__menu">
                  <ul>
                    <li class="footer-widget__menu_list">
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li class="footer-widget__menu_list">
                      <a href="team.html">Meet Our Team</a>
                    </li>
                    <li class="footer-widget__menu_list">
                      <a href="blog-details.html">News & Media</a>
                    </li>
                    <li class="footer-widget__menu_list">
                      <a href="case-01.html">Case Studies</a>
                    </li>
                    <li class="footer-widget__menu_list">
                      <a href="contact.html">Locations</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 offset-lg-1 mb-25">
              <div class="footer-widget">
                <div class="footer-widget__title">
                  <h3 class="footer-widget__title_heading">Support</h3>
                </div>
                <div class="footer-widget__menu">
                  <ul>
                    <li class="footer-widget__menu_list">
                      <a href="contact.html">Forum Support</a>
                    </li>
                    <li class="footer-widget__menu_list">
                      <a href="faq.html">Help & FAQ</a>
                    </li>
                    <li class="footer-widget__menu_list">
                      <a href="contact.html">Contact Us</a>
                    </li>
                    <li class="footer-widget__menu_list">
                      <a href="price.html">Pricing and plans</a>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer--bottom footer--bottom-padding footer--bottom-border">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="footer__copyright">
                <p class="footer__copyright_text">
                  Copyright 2022 BioInnov8. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
