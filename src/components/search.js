import React from 'react'

const Search = ({
    title
}) => (
    <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                {title}
              </p>
              <a href={`#${title}`} className="card-header-icon" aria-label="more options">
                <span className="icon">
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                </span>
              </a>
            </header>
            <div className="card-content">
              <div className="content">
                <div className="control has-icons-left has-icons-right">
                  <input className="input is-large" type="text" placeholder="" />
                  <span className="icon is-medium is-left">
                    <i className="fa fa-search"></i>
                  </span>
                  <span className="icon is-medium is-right">
                    <i className="fa fa-check"></i>
                  </span>
                </div>
              </div>
            </div>
        </div>
)

export default Search