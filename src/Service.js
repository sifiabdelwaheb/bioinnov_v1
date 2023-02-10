import IntlMessages from "./helpers/IntlMessages";

function Services() {
  return (
    <section class="services services--padding section-bg-common" id="SERVICES">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <div class="section-heading mb-45">
              <span
                class="section-heading__title_small wow fadeInUp"
                data-wow-delay=".2s"
                data-wow-duration=".4s"
              >
                <IntlMessages id="services.title" />
              </span>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="section-button mb-45">
              <a
                href="services-details.html"
                class="btn btn--common btn--primary rt-button-animation-out wow fadeInRight"
                data-wow-delay=".7s"
                data-wow-duration=".9s"
              >
                <IntlMessages id="button.more" />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34px"
                  height="16px"
                  viewBox="0 0 34.53 16"
                >
                  <rect
                    class="rt-button-line"
                    y="7.6"
                    width="34"
                    height=".4"
                  ></rect>
                  <g class="rt-button-cap-fake">
                    <path
                      class="rt-button-cap"
                      d="M25.83.7l.7-.7,8,8-.7.71Zm0,14.6,8-8,.71.71-8,8Z"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-4 col-md-6 wow fadeInLeft"
            data-wow-delay=".2s"
            data-wow-duration=".4s"
          >
            <div class="services__item mb-50">
              <div class="services__item_overlay"></div>
              <header class="services__item_header d-flex align-items-center">
                <i class="flaticon flaticon-create services__item_icon"></i>
                <h3 class="services__item_title">
                  <a href="services-details.html">
                    <IntlMessages id="services.Health" />
                  </a>
                </h3>
              </header>
              <div class="services__item_content">
                <p class="services__item_paragraph">
                  <IntlMessages id="services.Healthdescription" />
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 wow fadeInLeft"
            data-wow-delay=".4s"
            data-wow-duration=".6s"
          >
            <div class="services__item mb-50">
              <div class="services__item_overlay"></div>
              <header class="services__item_header d-flex align-items-center">
                <i class="flaticon flaticon-management services__item_icon"></i>
                <h3 class="services__item_title">
                  <a href="services-details.html">
                    <IntlMessages id="services.software" />
                  </a>
                </h3>
              </header>
              <div class="services__item_content">
                <p class="services__item_paragraph">
                  <IntlMessages id="services.softdescription" />
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 wow fadeInLeft"
            data-wow-delay=".6s"
            data-wow-duration=".8s"
          >
            <div class="services__item mb-50">
              <div class="services__item_overlay"></div>
              <header class="services__item_header d-flex align-items-center">
                <i class="flaticon flaticon-secure-shield services__item_icon"></i>
                <h3 class="services__item_title">
                  <a href="services-details.html">
                    <IntlMessages id="services.Consulting" />
                  </a>
                </h3>
              </header>
              <div class="services__item_content">
                <p class="services__item_paragraph">
                  <IntlMessages id="services.Consuldescription" />
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 wow fadeInLeft"
            data-wow-delay=".8s"
            data-wow-duration="1s"
          >
            <div class="services__item mb-50">
              <div class="services__item_overlay"></div>
              <header class="services__item_header d-flex align-items-center">
                <i class="flaticon flaticon-analytics services__item_icon"></i>
                <h3 class="services__item_title">
                  <a href="services-details.html">
                    <IntlMessages id="services.artificial" />
                  </a>
                </h3>
              </header>
              <div class="services__item_content">
                <p class="services__item_paragraph">
                  <IntlMessages id="services.artificialdescription" />
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 wow fadeInLeft"
            data-wow-delay="1s"
            data-wow-duration="1.2s"
          >
            <div class="services__item mb-50">
              <div class="services__item_overlay"></div>
              <header class="services__item_header d-flex align-items-center">
                <i class="flaticon flaticon-client services__item_icon"></i>
                <h3 class="services__item_title">
                  <a href="services-details.html">
                    <IntlMessages id="services.it" />
                  </a>
                </h3>
              </header>
              <div class="services__item_content">
                <p class="services__item_paragraph">
                  <IntlMessages id="services.itdescription" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
