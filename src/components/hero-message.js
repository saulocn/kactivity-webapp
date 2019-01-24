import React from 'react'

const HeroMessage = ({
    title,
    text
}) => (
    <section className="hero is-info welcome is-small">
        <div className="hero-body">
            <div className="container">
                <h1 className="title">
                {title}
                </h1>
                <h2 className="subtitle">
                {text}
                </h2>
            </div>
        </div>
    </section>
)

export default HeroMessage