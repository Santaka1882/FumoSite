import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Table from './Table'

const Phrases = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allFormElementsJson {
                edges {
                    node {
                        jp
                        jp_alt
                        en
                    }
                }
            }
            allKeywordsJson {
                edges {
                    node {
                        jp
                        jp_alt
                        en
                    }
                }
            }
            allNamesJson {
                edges {
                    node {
                        jp
                        jp_alt
                        en
                    }
                }
            }
        }
    `)

    const formElements = data.allFormElementsJson.edges
    const keywords = data.allKeywordsJson.edges
    const names = data.allNamesJson.edges

    return (
        <section className='w-full'>
            <div className='w-[90%] mx-auto mt-5 text-center'>
                <h2 className='text-3xl text-red-500 font-semibold'>Helpfull Phrases</h2>

                <Table 
                    data={keywords} 
                    title={"Keywords"} 
                    headers={[
                        "English",
                        "Japanese (Common)",
                        "Japanese (alt)"
                    ]}
                />
                <p>
                    Some online storefronts require you to enter 
                    your own name and will only accept Japanese characters. 
                    <a href="https://www.sljfaq.org/cgi/e2k.cgi">This site</a> x can help - 
                    it will phonetically translate your name into katakana, 
                    one of the two Japanese syllabaries.
                </p>

                <Table 
                    data={formElements} 
                    title={"Form Elements"} 
                    headers={[
                        "English",
                        "Japanese (Common)",
                        "Japanese (alt)"
                    ]}
                />

                <p>
                    Names are given in the original order ZUN used. For Japanese names like Hakurei Reimu, 
                    that means the family name comes first. For Western names like Alice Margatroid, 
                    the given name comes first.
                </p>

                <Table 
                    data={names} 
                    title={"Character Names"} 
                    headers={[
                        "English",
                        "Japanese (Common)",
                        "Japanese (alt)"
                    ]}
                />
            </div>
        </section>
    )
}

export default Phrases