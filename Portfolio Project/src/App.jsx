var NewComponent = React.createClass({
  render: function () {
    return (
      <div>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="./assets/style.css" />
        <title>David Chamberlain's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <header className="header">
          <h1>David Chamberlain</h1>
          <nav>
            <ul>
              <a href="#about-me">About Me</a>
              <a href="#work">Work</a>
              <a href="#contact-me">Contact Me</a>
              <a href="#resume">Resume</a>
            </ul>
          </nav>
        </header>
        <div className="hero-banner">
          <h2>Ready to start working today!</h2>
        </div>
        <main className="page-wrapper">
          <section className="page-section">
            <h2>About Me</h2>
            <div className="page-wrapper">
              <div id="about-me" className="about-me" />
              <img
                className="page-wrapper-img"
                src="./assets/images/DC.jpg"
                alt="David Chamberlain"
              />
              <p>
                My name is David Chamberlain. I am a full-stack web developer
                with a passion for creating and designing websites. I have
                experience with HTML, CSS, JavaScript, and React. I am currently
                working on a project that will help people find the best
                restaurants in their area. I am excited to continue learning and
                growing as a developer.
              </p>
            </div>
          </section>
          <section className="page-section" id="work">
            <h2>Work</h2>
            <div className="flex-container">
              <a
                className="flex-item project1"
                id="project1"
                aria-label="Project 1"
              >
                <div>
                  <h3>Horieseon</h3>
                </div>
              </a>
              <a
                className="flex-item project2"
                id="project2"
                aria-label="Project 2"
              >
                <div>
                  <h3>Horieseon</h3>
                </div>
              </a>
              <a
                className="flex-item project3"
                id="project3"
                aria-label="Project 3"
              >
                <div>
                  <h3>Horieseon</h3>
                </div>
              </a>
              <a
                className="flex-item project4"
                id="project4"
                aria-label="Project 4"
              >
                <div>
                  <h3>Horieseon</h3>
                </div>
              </a>
              <a
                className="flex-item project5"
                id="project5"
                aria-label="Project 5"
              >
                <div>
                  <h3>Horieseon</h3>
                </div>
              </a>
              {/*<img class="flex-item" src="./assets/images/DC's Realm.jpg" alt="David Chamberlain's Realm"/>*/}
              {/*<img class="flex-item" src="./assets/images/CSS Snippet.jpg" alt="CSS Snippet Cheatsheet"/>*/}
              {/*<img class="flex-item" src="./assets/images/Placeholder 1.jpg" alt="Placeholder #1"/>*/}
              {/*<img class="flex-item" src="./assets/images/Placeholder 2.jpg" alt="Placeholder #2"/>*/}
            </div>
          </section>
          <section className="page-section">
            <h2>Contact Me</h2>
            <div className="contact">
              <address>
                <a href="tel:913-708-4577">913-708-4577</a>
                <a href="mailto:dc.davidchamberlain@gmail.com">
                  DC.DavidChamberlain@Gmail.com
                </a>
                <a href="https://github.com/DC-DavidChamberlain">GitHub</a>
              </address>
            </div>
            <div id="contact-me" className="contact-me" />
          </section>
        </main>
      </div>
    );
  },
});

export default NewComponent;
