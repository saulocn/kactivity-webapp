import React from 'react'


const Breadcrumb = ({
    links
}) => (
    <nav className="breadcrumb" aria-label="breadcrumbs">
                    <ul>                    
                        {links && links.map((link, index)=>(
                            <li  key={index} className={(link.isActive ? 'is-active' : '')}>
                                <a href={link.endereco} aria-current={(link.isActive ? 'page' : '')}>{link.nome}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
)
export default Breadcrumb