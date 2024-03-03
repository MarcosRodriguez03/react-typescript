import React, { useState } from 'react'
import astronaut from '../Interfaces/interfaces'


const AstronautComponet = (props: { shipName: string, members: string[] }) => {
    //  const [astroInfo, setAstroInfo] = useState<astronaut>()
    return (
        <div>
            {/* <h1>{astroInfo && astroInfo.people.map(person => `${person.name} ${person.craft} `)}</h1> */}
            <h1>{props.shipName}</h1>
            {
                props.members.map((name, index) => {
                    return (
                        <div key={index}>
                            <h3>{name}</h3>
                            <br />
                        </div>
                    )
                })
            }
            <hr />

        </div>
    )
}

export default AstronautComponet

