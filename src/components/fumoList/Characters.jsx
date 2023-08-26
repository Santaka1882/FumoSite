import React, { useState } from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import CharacterCardGrid from './CharacterCardGrid'
import BackToTopButton from '../utils/BackToTopButton'

const Characters = () => {
    const data = useStaticQuery(graphql`
        query characters {
            allCharactersJson {
                nodes {
                    name
                    regular {
                        id
                        name
                    }
                    puppets {
                        id
                        name
                    }
                    dekas {
                        name
                        id
                      }
                    straps {
                        id
                        name
                    }
                }
            }
        }
    `)

    const characterList = data.allCharactersJson.nodes
    const [plushType, setPlushType] = useState("regulars")

    const regulars = () => setPlushType("regulars")
    const dekas = () => setPlushType("dekas")
    const straps = () => setPlushType("straps")
    const puppets = () => setPlushType("puppets")

    return (
        <section className='w-full'>
            <div className='w-4/5 mx-auto mt-5 text-center'>
                <h2 className='text-3xl text-red-500 font-semibold'>Fumo List</h2>

                <nav className='w-full mt-4'>
                    <ul className='grid grid-cols-2 md:grid-cols-4 gap-5 mx-auto'>
                        <button 
                            className='w-full bg-red-500 text-yellow-200 text-sm font-semibold tracking-wide rounded-md p-2 md:text-lg'
                            onClick={regulars}
                        >
                            Regulars
                        </button>
                        <button 
                            className='w-full bg-red-500 text-yellow-200 text-sm font-semibold tracking-wide rounded-md p-2 md:text-lg'
                            onClick={dekas}
                        >
                            Dekas
                        </button>
                        <button 
                            className='w-full bg-red-500 text-yellow-200 text-sm font-semibold tracking-wide rounded-md p-2 md:text-lg'
                            onClick={straps}
                        >
                            Straps
                        </button>
                        <button 
                            className='w-full bg-red-500 text-yellow-200 text-sm font-semibold tracking-wide rounded-md p-2 md:text-lg'
                            onClick={puppets}
                        >
                            Puppets
                        </button>
                    </ul>
                </nav>

                {
                    characterList.map(character => (
                        <CharacterCardGrid
                            key={character.name}
                            title={character.name}
                            plushType={plushType}
                            regular={character.regular}
                            puppets={character.puppets}
                            dekas={character.dekas}
                            straps={character.straps}
                        />
                    ))
                }
            </div>
            <BackToTopButton/>
        </section>
    )
}

export default Characters