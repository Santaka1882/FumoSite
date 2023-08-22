import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import CharacterCardGrid from './CharacterCardGrid'

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
                    straps {
                        id
                        name
                    }
                }
            }
        }
    `)

    const characterList = data.allCharactersJson.nodes
    
    console.log(characterList)
    return (
        <section className='w-full'>
            <div className='w-4/5 mx-auto mt-5 text-center'>
                <h2 className='text-3xl text-red-500 font-semibold'>Fumo List</h2>
                {
                    characterList.map(character => (
                        <CharacterCardGrid
                            key={character.name}
                            title={character.name}
                            regular={character.regular}
                            puppets={character.puppets} 
                            straps={character.straps}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Characters