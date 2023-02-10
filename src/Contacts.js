import IntlMessages from "./helpers/IntlMessages";

function Contacts() {
  return (
    <div id="contactus">
      <section
        class="contact contact--bg contact--padding"
        style={{
          backgroundImage: `url(https://radiustheme.com/demo/html/techkit/assets/images/shape/contact-bg-shape.png)`,
        }}
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5 mb-30">
              <div
                class="contact-address contact-address--bg"
                style={{
                  backgroundImage: `url(https://radiustheme.com/demo/html/techkit/assets/images/bg/contact-address-bg.jpg)`,
                }}
              >
                <ul>
                  <li class="contact-address__item mb-20">
                    <div class="contact-address__item_icon">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="contact-address__item_text">
                      <h3 class="text-white">
                        <IntlMessages id="contacts.location" />
                      </h3>
                      <p class="text-white">
                        3, impasse Abdelaziz El Saoud, El Manar 2, 2092 Tunis,
                        Tunisie
                      </p>
                    </div>
                  </li>
                  <li class="contact-address__item mb-20">
                    <div class="contact-address__item_icon">
                      <i class="fas fa-envelope-open-text"></i>
                    </div>
                    <div class="contact-address__item_text">
                      <h3 class="text-white">
                        <IntlMessages id="contacts.email" />
                      </h3>
                      <p class="text-white">contact@bioinnov-8.com</p>
                    </div>
                  </li>
                  <li class="contact-address__item mb-40">
                    <div class="contact-address__item_icon">
                      <i class="fas fa-phone-alt"></i>
                    </div>
                    <div class="contact-address__item_text">
                      <h3 class="text-white">
                        <IntlMessages id="contacts.call" />
                      </h3>
                      <p class="text-white">
                        <i>(+216) 52 912 125</i>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-7 mb-30">
              <form
                action="javascript:void(0);"
                class="contact-form"
                id="contact-form"
              >
                <div class="row">
                  <div class="col-sm-12">
                    <div class="section-heading mb-45">
                      <span class="section-heading__title_small">
                        <IntlMessages id="contacts.touch" />
                      </span>
                      <h2 class="section-heading__title_big">
                        <IntlMessages id="contacts.description" />
                      </h2>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <input
                      name="name"
                      type="text"
                      class="contact-form__input"
                      placeholder="Name *"
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      name="email"
                      type="text"
                      class="contact-form__input"
                      placeholder="Email *"
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      name="phone"
                      type="text"
                      class="contact-form__input"
                      placeholder="Phone"
                    />
                  </div>

                  <div class="col-md-12">
                    <textarea
                      class="contact-form__input contact-form__input_textarea"
                      name="message"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div class="col-md-12">
                    <button type="submit" class="contact-form__button">
                      <IntlMessages id="button.send" />
                    </button>
                  </div>
                </div>
                <div class="form-response"></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacts;
