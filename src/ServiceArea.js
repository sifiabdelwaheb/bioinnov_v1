import atlas from "./assets/images/atlas.png";
import maisonmedecien from "./assets/images/maisonmedecien.png";
import greenhill from "./assets/images/GreenHill.png";
import Olympysky from "./assets/images/Olympysky.png";
import BIoservice from "./assets/images/BIoservice.png";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ChooseIcon from "./assets/images/request.png";
import hopmil from "./assets/images/hopmil.png";
import jci from "./assets/images/Logo_JCI.png";
import Us from "./assets/images/us.jpeg";
import MIT from "./assets/images/MIT-Logo.png";
import united_nations from "./assets/images/united_nations.jpeg";
import ost from "./assets/images/ost_logo.png";
import SMVDA_HILAL from "./assets/images/SMVDA HILAL2.png";
import IntlMessages from "./helpers/IntlMessages";

function ServiceArea() {
  return (
    <section class="services-key services-key--padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="section-heading text-center mb-30">
              <span class="section-heading__title_small">
                <IntlMessages id="area.title" />
              </span>
              <h2 class="section-heading__title_big">
                <IntlMessages id="area.description" />
              </h2>
            </div>
          </div>
        </div>
        <div class="services-key__navbar">
          <div class="row">
            <div class="col-sm-12">
              <ul
                class="services-key__navbar_nav nav nav-tabs"
                id="myTab"
                role="tablist"
              >
                <li
                  class="nav-item services-key__navbar_item"
                  role="presentation"
                >
                  <button
                    class="services-key__navbar_link nav-link active"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    <HandshakeIcon sx={{ fontSize: 40 }} />
                    <IntlMessages id="area.Partners" />
                  </button>
                </li>
                <li
                  class="nav-item services-key__navbar_item"
                  role="presentation"
                >
                  <button
                    class="services-key__navbar_link nav-link"
                    id="awards-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#awards"
                    type="button"
                    role="tab"
                    aria-controls="awards"
                    aria-selected="false"
                  >
                    <WorkspacePremiumIcon sx={{ fontSize: 40 }} />
                    <IntlMessages id="area.Awards" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="services-key__tabbar pt-50">
          <div class="row">
            <div class="col-sm-12">
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div class="services-partners overflow-hidden mb-20">
                    <ul
                      class="services-partners__wrapper overflow-hidden"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <li
                        class="services-partners__item wow fadeInUp"
                        data-wow-delay=".6s"
                      >
                        <a href="services-details.html">
                          <img src={BIoservice} alt="" />
                        </a>
                      </li>
                      <li class="services-partners__item" data-wow-delay=".2s">
                        <a>
                          <img src={atlas} alt="" />
                        </a>
                      </li>
                      <li class="services-partners__item" data-wow-delay=".3s">
                        <a>
                          <img src={maisonmedecien} alt="" />
                        </a>
                      </li>
                      <li class="services-partners__item" data-wow-delay=".3s">
                        <a>
                          <img src={SMVDA_HILAL} alt="" />
                        </a>
                      </li>

                      <li
                        class="services-partners__item wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <a href="services-details.html">
                          <img src={greenhill} alt="" />
                        </a>
                      </li>

                      <li
                        class="services-partners__item wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <a href="services-details.html">
                          <img src={hopmil} alt="" />
                        </a>
                      </li>
                      <li
                        class="services-partners__item wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <a href="services-details.html">
                          <img src={Olympysky} alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="tab-pane fade "
                  id="awards"
                  role="tabpanel"
                  aria-labelledby="awards-tab"
                >
                  <div class="services-partners overflow-hidden mb-20">
                    <ul
                      class="services-partners__wrapper overflow-hidden"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <li class="services-partners__item" data-wow-delay=".2s">
                        <a>
                          <img src={jci} alt="" />
                        </a>
                      </li>
                      <li class="services-partners__item" data-wow-delay=".3s">
                        <a>
                          <img src={Us} alt="" />
                        </a>
                      </li>
                      <li
                        class="services-partners__item wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <a href="services-details.html">
                          <img src={ost} alt="" />
                        </a>
                      </li>
                      <li
                        class="services-partners__item wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <a href="services-details.html">
                          <img src={united_nations} alt="" />
                        </a>
                      </li>
                      <li
                        class="services-partners__item wow fadeInUp"
                        data-wow-delay=".6s"
                      >
                        <a href="services-details.html">
                          <img src={MIT} alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceArea;
