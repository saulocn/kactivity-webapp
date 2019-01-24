import React from 'react'
import Tile from '../components/tile';

const InfoLittleCards = ({
    infos
}) => (
    <section className="info-tiles">
      <div className="tile is-ancestor has-text-centered">
        {infos && infos.map((info, index)=>(
          <Tile title={info.title} subtitle={info.subtitle} key={index} />
        ))}
      </div>
    </section>
)

export default InfoLittleCards