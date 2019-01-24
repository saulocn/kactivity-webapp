import React from 'react'


const Card = ({
    children,
    cardName
}) => (
    <div className="card events-card">
      <header className="card-header">
        <p className="card-header-title">
          {cardName}
        </p>
        <a href="#" className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div className="card-table">
        <div className="content">
          {children}
        </div>
      </div>
      <footer className="card-footer">
        <a href="#" className="card-footer-item">View All</a>
      </footer>
    </div>
)

export default Card