const Portfolio = ({ classicHeader, darkTheme }) => {

  // const projectsData = [
  //   {
  //     title: "Project Title 1",
  //     projectInfo:
  //       "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  //     client: "Ruby Clinton",
  //     technologies: "iOS, HTML5, CSS3, PHP, Java",
  //     industry: "Art & Design",
  //     date: "July 16, 2019",
  //     url: {
  //       name: "www.example.com",
  //       link: "https://www.example.com",
  //     },
  //     socialLinks: {
  //       facebook: "http://www.facebook.com/",
  //       twitter: "http://www.twitter.com/",
  //       google: "http://www.google.com/",
  //       instagram: "http://www.instagram.com/",
  //       mail: "mailto:example@gmail.com",
  //     },
  //     thumbImage: "images/projects/project-1.jpg",
  //     sliderImages: [
  //       "images/projects/project-1.jpg",
  //       "images/projects/project-5.jpg",
  //     ],
  //     categories: [],
  //   }
  // ];

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          <div>
            <a
              href="https://mattkleinsmith.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-6 font-weight-600 mb-4 text-white">Amazing</div>
            </a>
            <a
              href="https://mattkleinsmith.dev/"
              target="_blank"
              rel="noopener noreferrer"
            ><img className="img-fluid d-block portfolio-image" src="/images/amazing.png" alt="Amazing" /></a>
            <div className="text-white mt-4">Hello</div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
