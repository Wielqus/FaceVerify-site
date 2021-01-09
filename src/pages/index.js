import React from "react"
import "./mystyles.scss"
const IndexPage = () => {
  return (
    <main>
      <nav className="navbar is-primary has-background-light" role="navigation" aria-label="main_navigation">
      <div className="navbar-brand ">
          <div className="navbar-item ">
            <a className="image" href="/">
              <img src="/logo.png" alt="FaceVerify" />
            </a>
          </div>
      </div>
      <div class="navbar-end is-hidden-mobile ">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary is-rounded">
            See Docs
          </a>
        </div>
      </div>
    </div>
      </nav>
      <div className="">
      <section className="section is-medium">
        <div className="columns is-vcentered is-centered ">
          <div className="column">
            <div className="columns is-centered">
              <div className="column is-three-fifths-desktop is-full-mobile is-full-tablet">
                <h1 className="title is-size-1">FaceVerify</h1>
                <h2 className="subtitle is-5 mb-6">
                  Face verification for web
                      </h2>
                <button className="button is-primary  is-rounded is-fullwidth">Get started</button>
              </div>
            </div>
          </div>
          <div className="column has-text-centered">
                <img src="/first-section-image.jpg" alt="Face" className="image" />
          </div>
        </div>
      </section>


      </div>


      <footer className="footer">
        <div className="content has-text-centered">
          <strong>FaceVerify 2021 All Rights Reserved</strong>
        </div>
      </footer>
    </main>
  )
}
export default IndexPage