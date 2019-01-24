import React from 'react'

const Item = ({
    link,
    nome,
    children,
    isActive
}) => (
    <li>
        <a href={link}  className={isActive ? 'is-active' : ''}>
            {nome}
        </a>
            <ul>
                {children && children.map((child, index)=>(
                    <Item 
                        nome={child.nome}
                        key={index}
                        link={child.link}
                        children={child.children}
                        isActive={child.isActive}
                    />
                ))}
            </ul>
    </li>
)

export default Item