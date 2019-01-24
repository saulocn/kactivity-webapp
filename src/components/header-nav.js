import React from 'react'

const HeaderNav = ({
    links
}) => (
    <nav className="navbar is-white">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item brand-text" href="../">
          Bulma Admin          
        </a>
        <div className="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" className="navbar-menu">
        <div className="navbar-start">
          {links && links.map((link, index)=>(
              <a className="navbar-item" href={link.endereco} key={index}>
              {link.nome}
            </a>
          ))}
        </div>

      </div>
    </div>
  </nav>
)

export default HeaderNav