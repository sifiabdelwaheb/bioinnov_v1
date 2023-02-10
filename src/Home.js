import background from "./assets/images/bg/hero-bg-1.jpg";
import IntlMessages from "./helpers/IntlMessages";

function Home() {
  return (
    <div>
      <section class="hero overflow-hidden">
        <div class="slider slider--active">
          <div
            class="slider__single slider__bg container-custom"
            style={{ backgroundImage: `url(${background})` }}
          >
            <img
              src="https://radiustheme.com/demo/html/techkit/assets/images/shape/slider-shape-1.png"
              alt=""
              class="slider__shape slider__shape--one"
              data-animation="slideInDown"
              data-delay=".4s"
              data-duration="2s"
            />
            <img
              src="https://radiustheme.com/demo/html/techkit/assets/images/shape/slider-shape-2.png"
              alt=""
              class="slider__shape slider__shape--two"
              data-animation="slideInRight"
              data-delay=".5s"
              data-duration="2.5s"
            />
            <div class="container-fluid">
              <div class="row">
                <div class="col-xl-6 col-lg-7 col-md-8">
                  <div class="slider-content">
                    <span
                      class="slider-content__title_small ml13"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      <IntlMessages id="home.title" />
                    </span>
                    <h2
                      id="ml12"
                      class="slider-content__title_big"
                      data-animation="fadeInUp"
                      data-delay=".6s"
                    >
                      Best Solution To Run Your Project Faster
                    </h2>
                    <p
                      class="slider-content__text"
                      data-animation="fadeInUp"
                      data-delay=".8s"
                    >
                      <IntlMessages id="home.description" />
                    </p>
                    <a
                      href="about-us.html"
                      class="btn btn--common btn--primary rt-button-animation-out"
                      data-animation="fadeInUp"
                      data-delay="1s"
                    >
                      <IntlMessages id="button.details" />

                      <svg width="34px" height="16px" viewBox="0 0 34.53 16">
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
