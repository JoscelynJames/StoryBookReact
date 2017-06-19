import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'

const Message = ({
  text
}) => {
  return (
    <div className="container">
      <div className="row">
        <nav>
          <div className="nav-wrapper teal lighten-2">
            <div className="col s12">
              <a href="#" className="brand-logo">Example Component</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#">React</a></li>
                <li><a href="#">Redux</a></li>
                <li><a href="#">React Router</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="row">
        <div className="col s12">
          <p>
            The message is:
          </p>
          <blockquote>
            {text}
          </blockquote>
        </div>
      </div>

    </div>
  )
}

export default Message
