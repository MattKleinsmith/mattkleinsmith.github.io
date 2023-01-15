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

            <div className="text-white mt-4 mb-4">Amazing is a pixel-perfect Amazon clone. It was a solo project.</div>

            <span className="text-white mt-4">Live demo: </span><a
              href="https://mattkleinsmith.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://mattkleinsmith.dev</a>

            <div className="tech-stack mt-4">

              <div>
                <img alt="react" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
                <img alt="redux" className="ml-5px" src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" />
              </div>

              <img alt="flask" className="tech-badge-flask" src="https://img.shields.io/badge/flask⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀-%23000000.svg?style=for-the-badge&logo=flask&logoColor=%23FFFFFF" />

              <div>
                <img alt="sql alchemy" src="https://img.shields.io/badge/sqlalchemy⠀⠀⠀⠀-626262?style=for-the-badge&logo=academia&logoColor=d71f00" />
                <img alt="gunicorn" className="ml-5px" src="https://img.shields.io/badge/gunicorn⠀-%23FFFFFF.svg?style=for-the-badge&logo=gunicorn&logoColor=%23298629" />
              </div>

              <div>
                <img alt="postgres" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
                <img alt="python" className="ml-5px" src="https://img.shields.io/badge/python⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀-376c99?style=for-the-badge&logo=python&logoColor=f7d34b" />
                <img alt="aws cloudfornt" className="ml-5px" src="https://img.shields.io/badge/AWS_CLOUDFRONT-%23232f3e.svg?style=for-the-badge&logo=amazonaws&logoColor=ec912d" />
              </div>

              <div>
                <img alt="amazon linux 2" src="https://img.shields.io/badge/AMAZON_LINUX_2_(EC2)⠀⠀⠀⠀⠀⠀⠀-%23232f3e.svg?style=for-the-badge&logo=amazonaws&logoColor=ec912d" />
                <img alt="aws s3" className="ml-5px" src="https://img.shields.io/badge/AWS_S3⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀-%23232f3e.svg?style=for-the-badge&logo=amazonaws&logoColor=ec912d" />
              </div>

            </div>



          </div>

          <div className="mt-5">
            <a
              href="https://ducksy.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-6 font-weight-600 mb-4 text-white">Ducksy</div>
            </a>
            <a
              href="https://ducksy.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            ><img className="img-fluid d-block portfolio-image" src="/images/ducksy.png" alt="Ducksy" /></a>

            <div className="text-white mt-4 mb-4">Ducksy is a clone of Etsy. It was a group project.</div>

            <span className="text-white mt-4">Live demo: </span><a
              href="https://ducksy.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ducksy.herokuapp.com</a>

            <div className="tech-stack mt-4">

              <div>
                <img alt="react" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
                <img alt="redux" className="ml-5px" src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" />
              </div>

              <div>
                <img alt="sql alchemy" src="https://img.shields.io/badge/sqlalchemy⠀⠀⠀⠀-626262?style=for-the-badge&logo=academia&logoColor=d71f00" />
                <img alt="flask" className="ml-5px" src="https://img.shields.io/badge/flask⠀⠀⠀⠀⠀-%23000000.svg?style=for-the-badge&logo=flask&logoColor=%23FFFFFF" />
              </div>

              <div>
                <img alt="postgres" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
                <img alt="python" className="ml-5px" src="https://img.shields.io/badge/python⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀-376c99?style=for-the-badge&logo=python&logoColor=f7d34b" />
                <img alt="aws cloudfornt" className="ml-5px" src="https://img.shields.io/badge/AWS_CLOUDFRONT-%23232f3e.svg?style=for-the-badge&logo=amazonaws&logoColor=ec912d" />
              </div>

              <div>
                <img alt="heroku" src="https://img.shields.io/badge/heroku⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀-79589f.svg?style=for-the-badge&logo=heroku&logoColor=FFFFFF" />
                <img alt="aws s3" className="ml-5px" src="https://img.shields.io/badge/AWS_S3⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀-%23232f3e.svg?style=for-the-badge&logo=amazonaws&logoColor=ec912d" />
              </div>

            </div>

          </div>

          <div className="mt-5">
            <a
              href="https://mattblock.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-6 font-weight-600 mb-4 text-white">Mattblock</div>
            </a>
            <a
              href="https://mattblock.io/"
              target="_blank"
              rel="noopener noreferrer"
            ><img className="img-fluid d-block portfolio-image" src="/images/mattblock.png" alt="Mattblock" /></a>

            <div className="text-white mt-4 mb-4">Mattblock is a browser-based online video game. </div>

            <span className="text-white mt-4">Live demo: </span><a
              href="https://mattblock.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://mattblock.io</a>

            <div className="tech-stack mt-4">

              <div>
                <img alt="javascript" src="https://img.shields.io/badge/JavaScript⠀⠀⠀⠀⠀⠀-323330.svg?style=for-the-badge&logo=javascript&logoColor=f0db4f" />
                <img alt="websockets" className="ml-5px" src="https://img.shields.io/badge/websockets-232f3e.svg?style=for-the-badge&logo=websockets&logoColor=ec912d" />
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
