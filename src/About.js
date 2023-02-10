import IntlMessages from "./helpers/IntlMessages";

function About() {
  return (
    <div id="About">
      <section class="about about--area about--padding">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5 mb-30">
              <div class="section-heading mb-40">
                <span
                  class="section-heading__title_small wow fadeInUp"
                  data-wow-delay=".2s"
                  data-wow-duration=".4s"
                >
                  <IntlMessages id="about.company" />
                </span>
                <h2
                  class="section-heading__title_big wow fadeInUp"
                  data-wow-delay=".3s"
                  data-wow-duration=".5s"
                >
                  <IntlMessages id="about.promise" />
                </h2>
              </div>
              <div class="about-content"></div>
            </div>
            <div class="col-lg-6 offset-lg-1 mb-30 text-md-center">
              <div class="about-content__image about-content__image_right position-relative">
                <img
                  width="690"
                  height="617"
                  src="https://radiustheme.com/demo/html/techkit/assets/images/home1/about-right-image-1.jpg"
                  alt="About Our RadiusTheme Company"
                  class="about-img wow fadeInRight"
                  data-wow-delay="1s"
                  data-wow-duration="1.2s"
                />
                <div class="about-content__experience">
                  <div class="about-content__experience_years">15+</div>
                  <div class="about-content__experience_title">
                    <IntlMessages id="about.experience" />
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
export default About;
