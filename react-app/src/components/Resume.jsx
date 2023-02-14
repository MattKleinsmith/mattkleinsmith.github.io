import React from "react";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2022 - 2023",
      title: "App Academy",
      place: "Full-Stack Software Engineering",
      desc: "Web development bootcamp with 1000-hour curriculum and < 5% acceptance rate.",
    },
    {
      yearRange: "2017",
      title: "University of San Francisco",
      place: "Deep Learning Part II Certificate",
      desc: "",
    }
  ];

  const experienceDetails = [
    {
      yearRange: "2020 - 2022",
      title: "Game Developer",
      place: "Imagination Fountain",
      desc: "Used C# to develop a first-person shooter with online multiplayer, where players’ bullets created a trail of interactive geometry in real time. This required simulating and rendering tens of thousands of 3D objects in real time. Fast code!",
    },
    {
      yearRange: "2018 - 2020",
      title: "Personal goal",
      place: "My father died. I needed an intense personal goal to grieve.",
      desc: "Competed in video game tournaments. Trained 14+ hours per day. 10 hours per day were with teammates. Placed Top 16 in a world tournament out of tens of thousands of competitors and millions of players. Designed an in-game player communication standard that was adopted by a coach who won multiple amateur world championships.",
    },
    {
      yearRange: "2016 - 2018",
      title: "AI self-directed study",
      place: "Python, C, Arduino, Java, Android, Linux, PyTorch, deep learning",
      desc: "Many projects and achievements. Please see resume.",
    },
    {
      yearRange: "2015 - 2016",
      title: "Data Scientist and Marketer",
      place: "WriteLab (acquired by Chegg)",
      desc: "Developed a feature to help users make their documents more concise. For example, replacing the word “utilize” with the word “use”. Used Google’s N-gram dataset to ensure high quality suggestions.",
    },
    {
      yearRange: "2014",
      title: "Machine Learning Engineer",
      place: "WriteLab (acquired by Chegg)",
      desc: "Used Python to develop a data annotation tool, which increased training dataset growth by 10x.",
    },
    {
      yearRange: "2014",
      title: "Mathematics Researcher",
      place: "University of California, San Diego",
      desc: "Researched automata theory under Dr. Mia Minnes.",
    },
    {
      yearRange: "2013 - 2014",
      title: "Control Systems Programmer",
      place: "University of California, San Diego",
      desc: "Used LabVIEW to develop an application to control a thermal deposition system. Used MATLAB to study signals from SQUID arrays.",
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-2" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc && value.desc}
                    {!value.desc && <>Machine learning. Bonus: Wrote <a target="_blank"
                      rel="noopener noreferrer" href="https://medium.com/impactai/cnns-from-different-viewpoints-fab7f52d159c">an article on neural networks</a> that was used in <a target="_blank"
                        rel="noopener noreferrer" href="https://www.oreilly.com/library/view/deep-learning-for/9781492045519/">an O'Reilly book.</a></>}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-primary rounded-pill shadow-none"
            href="https://ducksybucket.s3.amazonaws.com/Matthew+Kleinsmith+-+Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
