import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'

const Image = ({ id, alt }) => {

    const data = useStaticQuery(graphql`
        query images {
            allImageSharp {
                nodes {
                    id
                    original {
                        width
                        height
                        src
                    }
                    gatsbyImageData(height: 580)
                    parent {
                        ... on File {
                            id
                            name
                        }
                    }
                }
            }
        }
    `)

    const images = data.allImageSharp.nodes
    const image = images.filter(image => image.parent.name === id)

    return (
        <GatsbyImage image={getImage(image[0])} alt={alt} className='w-full'/>
    )
}

export default Image