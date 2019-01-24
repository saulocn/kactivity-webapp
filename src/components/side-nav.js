import React from 'react'
import Item from './side-nav/item';

const SideNav = ({
    nav
}) => (
          <aside className="menu">
              {nav && nav.map((el, index)=>(
                <span key={index}>
                  <p className="menu-label">
                    {el.nome}
                  </p>
                  <ul className="menu-list">
                    {el.children && el.children.map((child, childIndex)=>(
                      <Item nome={child.nome} key={childIndex} link={child.link} children={child.children} isActive={child.isActive} />
                    ))}
                  </ul>
                </span>
              ))}
          </aside>
)

export default SideNav