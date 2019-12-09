import React from 'react'

const Footer = () => {
    return (
        <div>
        <footer className="page-footer transparent">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Teamwork</h5>
                <p className="grey-text text-lighten-4">Teamwork is an internal social network for employees of an organization. The goal of this application is to facilitate more interaction between colleagues and promote team bonding.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Get In Touch</h5>
                <ul>
                  <li>Github: <a href='https://github.com/its-nedum' target="_blank" rel="noopener noreferrer"> its-nedum</a></li>
                  <li>Twitter: <a href='https://www.twitter.com/its_nedum' target="_blank" rel="noopener noreferrer">its_nedum</a></li>
                  <li>Instagram: <a href='https://www.instagram.com/its_nedum' target="_blank" rel="noopener noreferrer">its_nedum</a></li>
                  <li>Facebook: <a href='https://www.facebook.com/itsnedum' target="_blank" rel="noopener noreferrer"> itsnedum</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2019 Copyright Teamwork
            </div>
          </div>
        </footer>
        </div>
    )
}

export default Footer
