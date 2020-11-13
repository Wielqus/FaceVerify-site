import React from "react"
import "./mystyles.scss"
const IndexPage = () => {
  return (
    <main>
      <nav className="navbar is-primary" role="navigation" aria-label="main_navigation">
        <div className="container">
          <div className="navbar-item">
            <a className="image" href="/">
              <img src="/logo.png" alt="FaceVerify" />
            </a>
          </div>
        </div>
      </nav>
      <section className="section">
        <div className="columns is-vcentered is-centered">
          <div className="column">
            <div className="columns is-centered">
              <div className="column is-three-fifths-desktop is-full-mobile is-full-tablet">
                <h1 className="title is-size-1">FaceVerify</h1>
                <h2 className="subtitle is-5 mb-6">
                  Face verification for web
                      </h2>
                <button className="button is-primary is-rounded is-fullwidth">Get started</button>
              </div>
            </div>
          </div>
          <div className="column has-text-centered is-hidden-mobile">
            <div className="columns is-centered">
              <div className="column is-three-fifths is-half-mobile is-full-tablet">
                <img src="/face.png" alt="Face" className="image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section has-background-light">
        <div className="columns is-vcentered is-centered">
          <div className="column is-hidden-mobile">
            <div className="columns is-centered">
              <div className="column is-three-fifths-desktop is-full-mobile is-full-tablet">
              <img src="/face.png" alt="Face" className="image" />
              </div>
            </div>
          </div>
          <div className="column has-text-centered ">
            <div className="columns is-centered">
              <div className="column is-three-fifths is-full-mobile is-full-tablet">
              <h1 className="title is-size-2">About project</h1>
                <article class="content">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
      <div className="container">
      <h1 className="title is-size-2">Server Side</h1>
        <div className="columns is-vcentered is-centered">
          <div className="column">
          <div className="card">
              <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img className="is-rounded" src="/python.png" alt="Python logo" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">Python</p>
                  <p className="subtitle is-6">FaceVerify for Python</p>
                </div>
              </div>
              </div>
              <footer className="card-footer">
                <a href="#" className="card-footer-item button is-dark">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>GitHub</span>
                </a>
                <a href="#" className="card-footer-item button is-primary">
                  See Docs
                </a>
              </footer>
              
            </div>
          </div>
          <div className="column">
          </div>
          <div className="column">
          </div>
        </div>
        </div>
      </section>

      <section className="section">
      <div className="container">
      <h1 className="title is-size-2">Client Side</h1>
        <div className="columns is-vcentered is-centered">
          <div className="column">
          <div className="card">
              <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img className="is-rounded" src="/java-script.png" alt="Python logo" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">JavaScript</p>
                  <p className="subtitle is-6">FaceVerify for JavaScript</p>
                </div>
              </div>
              </div>
              <footer className="card-footer">
                <a href="#" className="card-footer-item button is-dark">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>GitHub</span>
                </a>
                <a href="#" className="card-footer-item button is-primary">
                  See Docs
                </a>
              </footer>
              
            </div>
          </div>
          <div className="column">
          </div>
          <div className="column">
          </div>
        </div>
        </div>
      </section>

      <footer className="footer">
        <div className="content has-text-centered">
          <strong>2020 All Rights Reserved</strong>
        </div>
      </footer>
    </main>
  )
}
export default IndexPage