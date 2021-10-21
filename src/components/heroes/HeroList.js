import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

const heroeImages = require.context( '../../assets/heroes', true );


export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [publisher])

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 45}}>
           {
               heroes.map(hero => {
                    const img = heroeImages(`./${hero.id}.jpg`).default
                    return <HeroCard key={hero.id} { ...hero } img={img} />
               }
               )
           } 
        </div>
    )
}
