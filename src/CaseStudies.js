import BioHeal from "./assets/images/BioHeal.jpg";
import PLANTVAL from "./assets/images/Plantval3.png";
import GREENHEAL from "./assets/images/GREENHEAL.png";
import HIGENE from "./assets/images/HIGENE2.png";
import Genomet from "./assets/images/genomett.jpg";
import Kifki_plantval from "./assets/images/Kifki plantval.jpg";
import Chentayeb from "./assets/images/Chentayeb1.png";
import Greeguide from "./assets/images/Greeguide.png";
import GreenHill from "./assets/images/greenheal2.jpg";
import Digit from "./assets/images/Digit.jpg";
import miRNA from "./assets/images/miRNA.jpg";
import IntlMessages from "./helpers/IntlMessages";

function CaseStudies() {
  return (
    <div id="Solutions">
      <div
        class="support support--bg support--padding secondary-bg-color pt-95 parallaxie"
        style={{
          backgroundImage: `url(https://www.radiustheme.com/demo/html/techkit/assets/images/shape/support-bg-shape.png)`,
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-sm-12"></div>
          </div>
        </div>
      </div>

      <section class="case case--minus pt-100 pb-125">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-4">
              <div class="section-heading section-heading--style3 mb-50">
                <span
                  class="section-heading__title_small wow fadeInUp"
                  data-wow-delay=".3s"
                  data-wow-duration=".5s"
                >
                  <IntlMessages id="studies.did" />
                </span>
                <h2
                  class="section-heading__title_big text-white wow fadeInUp"
                  data-wow-delay=".5s"
                  data-wow-duration=".7s"
                >
                  <IntlMessages id="studies.solutions" />
                </h2>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="section-button mb-50">
                <a
                  href="case-01.html"
                  class="btn btn--common btn--primary rt-button-animation-out wow fadeInRight"
                  data-wow-delay=".9s"
                  data-wow-duration=".7s"
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
        </div>
        <div class="container-fluid">
          <div class="case-wrapper">
            <div class="row case-active">
              <div class="col">
                <div
                  class="case-item wow fadeInUp"
                  data-wow-delay=".3s"
                  data-wow-duration=".5s"
                >
                  <div
                    class="case-item__image"
                    style={{ maxWidth: "600px", maxHeight: "400px" }}
                  >
                    <a href="case-details.html">
                      <img
                        width="712"
                        height="763"
                        src={PLANTVAL}
                        alt="Case Studies"
                      />
                    </a>
                  </div>
                  <div class="case-item__content secondary-bg-color text-center">
                    <h5 class="text-white">
                      <a href="case-details.html">PLANTVAL</a>
                    </h5>
                    <span>
                      {" "}
                      <IntlMessages id="studies.plantval" />
                    </span>
                  </div>
                </div>
              </div>
              <div class="col">
                <div
                  class="case-item wow fadeInUp"
                  data-wow-delay=".5s"
                  data-wow-duration=".7s"
                >
                  <div
                    class="case-item__image"
                    style={{ maxWidth: "600px", maxHeight: "400px" }}
                  >
                    <a>
                      <img
                        width="712"
                        height="763"
                        src={Chentayeb}
                        alt="Case Studies"
                      />
                    </a>
                  </div>
                  <div class="case-item__content secondary-bg-color text-center">
                    <h5 class="text-white">
                      <a href="case-details.html">Chentayeb</a>
                    </h5>
                    <span>
                      <IntlMessages id="studies.chentayeb" />
                    </span>
                  </div>
                </div>
              </div>
              <div class="col">
                <div
                  class="case-item wow fadeInUp"
                  data-wow-delay=".7s"
                  data-wow-duration=".9s"
                >
                  <div
                    class="case-item__image"
                    style={{ maxWidth: "600px", maxHeight: "400px" }}
                  >
                    <a href="case-details.html">
                      <img
                        width="712"
                        height="763"
                        src={HIGENE}
                        alt="Case Studies"
                      />
                    </a>
                  </div>
                  <div class="case-item__content secondary-bg-color text-center">
                    <h5 class="text-white">
                      <a href="case-details.html">Genomet</a>
                    </h5>
                    <span>
                      <IntlMessages id="studies.genomet" />
                    </span>
                  </div>
                </div>
              </div>
              <div class="col">
                <div
                  class="case-item wow fadeInUp"
                  data-wow-delay=".9s"
                  data-wow-duration="1s"
                >
                  <div
                    class="case-item__image"
                    style={{ maxWidth: "600px", maxHeight: "400px" }}
                  >
                    <a href="case-details.html">
                      <img
                        width="712"
                        height="763"
                        src={Greeguide}
                        alt="Case Studies"
                      />
                    </a>
                  </div>
                  <div class="case-item__content secondary-bg-color text-center">
                    <h5 class="text-white">
                      <a href="case-details.html">Green Guide</a>
                    </h5>
                    <span>
                      <IntlMessages id="studies.green" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default CaseStudies;
