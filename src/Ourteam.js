import team1 from "./assets/images/team-members-Marwa-removebg-preview.jpg";
import team_members_charfeddin from "./assets/images/team-members-Charfeddine-Gharsallah.jpg";
import team_members_maher from "./assets/images/team-members-maher-removebg-preview.jpg";
import team_members_omar from "./assets/images/team_members_omar.png";
import team_members_abir from "./assets/images/team_members_abir.jpg";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import IntlMessages from "./helpers/IntlMessages";

function Ourteam() {
  return (
    <div id="team">
      <section class="team pb-85">
        <div>
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <div
                class="section-heading mb-55 text-center wow fadeInUp"
                data-wow-delay=".3s"
                data-wow-duration=".5s"
              >
                <span class="section-heading__title_small">
                  <IntlMessages id="team.title" />
                </span>
              </div>
            </div>
          </div>
          <div
            class="row"
            style={{
              paddingLeft: "5%",
              paddingRight: "5%",
              paddingBottom: "5%",
            }}
          >
            <div class="col-lg-3 col-md-6 mb-30">
              <div
                class="team-block team-block--active team-block--two wow fadeInUp"
                data-wow-delay=".5s"
                data-wow-duration=".7s"
              >
                <div class="image">
                  <img class="image__member" src={team1} alt="Team Member" />
                  <div class="social">
                    <ul>
                      <li>
                        <a
                          class="header-top__social_list--link"
                          href="javascript:void(0);"
                          style={{ backgroundColor: "#edf3ff" }}
                        >
                          <LinkedInIcon
                            sx={{ color: "#4167af", fontSize: 30 }}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="content">
                  <h3 class="name">
                    Dr. Marwa Louati
                    <span class="designation">
                      - Chief Executive Officer (CEO)
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-30">
              <div
                class="team-block team-block--active team-block--two wow fadeInUp"
                data-wow-delay=".5s"
                data-wow-duration=".7s"
              >
                <div class="image">
                  <img
                    class="image__member"
                    src={team_members_omar}
                    alt="Team Member"
                    style={{ maxWidth: "545", maxHeight: "663" }}
                  />
                  <div class="social">
                    <ul>
                     
                     
                      <li>
                        <a
                          class="header-top__social_list--link"
                          href="javascript:void(0);"
                          style={{ backgroundColor: "#edf3ff" }}
                        >
                          <LinkedInIcon
                            sx={{ color: "#4167af", fontSize: 30 }}
                          />
                        </a>
                      </li>
                     
                    </ul>
                  </div>
                </div>
                <div class="content">
                  <h3 class="name">
                    Omar BEJAOUI
                    <span class="designation">
                      -Chief Operating Officer (COO).
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-30">
              <div
                class="team-block team-block--active team-block--two fadeInUp"
                data-wow-delay="1s"
                data-wow-duration="1.3s"
              >
                <div class="image">
                  <img
                    class="image__member"
                    src={team_members_maher}
                    alt="Team Member"
                    style={{ maxWidth: "545", maxHeight: "663" }}
                  />
                  <div class="social">
                    <ul>
                      <li>
                        <a
                          class="header-top__social_list--link"
                          href="javascript:void(0);"
                          style={{ backgroundColor: "#edf3ff" }}
                        >
                          <FacebookIcon
                            sx={{ color: "#4167af", fontSize: 30 }}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          class="header-top__social_list--link"
                          href="javascript:void(0);"
                          style={{ backgroundColor: "#edf3ff" }}
                        >
                          <TwitterIcon
                            sx={{ color: "#4167af", fontSize: 30 }}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          class="header-top__social_list--link"
                          href="javascript:void(0);"
                          style={{ backgroundColor: "#edf3ff" }}
                        >
                          <LinkedInIcon
                            sx={{ color: "#4167af", fontSize: 30 }}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          class="header-top__social_list--link"
                          href="javascript:void(0);"
                          style={{ backgroundColor: "#edf3ff" }}
                        >
                          <InstagramIcon
                            sx={{ color: "#4167af", fontSize: 30 }}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="content">
                  <h3 class="name">
                    Maher Naouali
                    <span class="designation">
                      - Chief Technology Officer (CTO)
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-30">
              <div
                class="team-block team-block--active team-block--two fadeInUp"
                data-wow-delay="1s"
                data-wow-duration="1.3s"
              >
                <div class="image">
                  <img
                    class="image__member"
                    src={team_members_abir}
                    alt="Team Member"
                    style={{ minWidth: "545", height: "200%" }}
                  />
                  <div class="social">
                    <ul>
                      <li>
                        <a
                          class="header-top__social_list--link"
                          href="javascript:void(0);"
                          style={{ backgroundColor: "#edf3ff" }}
                        >
                          <FacebookIcon
                            sx={{ color: "#4167af", fontSize: 30 }}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          class="header-top__social_list--link"
                          href="javascript:void(0);"
                          style={{ backgroundColor: "#edf3ff" }}
                        >
                          <TwitterIcon
                            sx={{ color: "#4167af", fontSize: 30 }}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          class="header-top__social_list--link"
                          href="javascript:void(0);"
                          style={{ backgroundColor: "#edf3ff" }}
                        >
                          <LinkedInIcon
                            sx={{ color: "#4167af", fontSize: 30 }}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          class="header-top__social_list--link"
                          href="javascript:void(0);"
                          style={{ backgroundColor: "#edf3ff" }}
                        >
                          <InstagramIcon
                            sx={{ color: "#4167af", fontSize: 30 }}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="content">
                  <h3 class="name">
                    Abir Toujeni
                    <span class="designation">
                      - Co-manager & sales manager
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Ourteam;
