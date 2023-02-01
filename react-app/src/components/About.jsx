import React from "react";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Get To Know Me More
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}

        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-primary">Matt Kleinsmith</span>, a full-stack software engineer
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
              I'm a recent App Academy graduate. During this intensive, six-month coding bootcamp, I built three full-stack web apps using React, Node, Python, AWS, and other tech. I can learn any stack quickly, because it's all data transforms at the end of the day.
            </p>

            <p className={darkTheme ? "text-white-50" : ""}>
              During App Academy, I realized how much more energetic and meaningful coding can be when working with other coders. The group project was my favorite part of the program.
            </p>

            <p className={darkTheme ? "text-white-50" : ""}>
              Before becoming a web developer, I worked as a video game developer. Here I honed an eye and heart for speed and usability. Video games have to be fast, and they have to be so usable that they're fun.
            </p>

            <p className={darkTheme ? "text-white-50" : ""}>
              I'm open to work and volunteering, including remote.
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Matt Kleinsmith
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:mwksmith@gmail.com">mwksmith@gmail.com</a>
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Kansas City, Missouri
                </li>
              </ul>
              <a
                href="https://ducksybucket.s3.amazonaws.com/Matthew+Kleinsmith+-+Resume.pdf"
                download
                className="btn btn-primary rounded-pill"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>2023</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Coding bootcamp graduate
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>1000+</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  hours of experience
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">

              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>3</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Full-stack web apps
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>2</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Video games
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
