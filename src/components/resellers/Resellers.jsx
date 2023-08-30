import React from 'react'

import Paragraph from "../utils/Paragraph"
import DropdownItem from "../utils/DropdownItem"
import { graphql, useStaticQuery } from 'gatsby'

const Resellers = () => {

    const data = useStaticQuery(graphql`
        query MyQuery {
            allStorefrontsJson {
                edges {
                    node {
                        name
                        link
                        desc
                    }
                }
            }
            allIndependentSellersJson {
                edges {
                    node {
                        name
                        link
                        desc
                    }
                }
            }
        }
    `)

    const storefronts = data.allStorefrontsJson.edges
    const independentSellers = data.allIndependentSellersJson.edges

    return (
        <section className='w-full'>
            <div className='w-[90%] mx-auto mt-5 text-center'>
                <h2 className='text-3xl text-red-500 font-semibold'>Resellers And Storefronts</h2>

                <section className='mt-4'>
                    <h3 className='text-2xl font-semibold text-red-500'>Spotting Bootlegs</h3>
                    <article>
                        <Paragraph>
                            All official Fumos originally came with either a tag or a tin badge. If that is missing,
                            that could be a sign of a bootleg (although it's possible the seller lost the tag or badge,
                            or bought it from someone else who originally lost the tag or badge). A missing tag will
                            generally lower the price too.
                        </Paragraph>
                        <Paragraph>
                            Keep in mind that Fumos originally sell for around $40 (or around $500 for a Deka).
                            If you see a price lower than that, it's very likely to be a bootleg or other fraudulent listing.
                            Look at the photos in the listing. Try reverse image searching them to make sure they're unique. 
                            If the Fumo looks particularly derpy, it's probably a bootleg. You can compare against the stock 
                            photos in our Fumo List.
                        </Paragraph>
                        <Paragraph>
                            There are some bootleg Deka Fumos with very long legs (the originals have the same stubby legs as
                            their smaller counterparts).
                        </Paragraph>
                    </article>
                </section>
                <h3 className='text-2xl font-semibold text-red-500'>Commonly Used Resellers and Storefronts</h3>
                <hr className='my-2 text-red-500 h-1 bg-red-500'/>
                <section className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
                    <article className='my-3 text-left md:text-lg'>
                        <h4 className='text-xl font-semibold text-red-500 text-center md:text-2xl'>Storefronts</h4>
                        <p className='mb-3 text-center md:text-lg'>This is a list of common and/or popular online stores that often have Fumos in stock.</p>
                        {
                            storefronts.map(store => (
                                <DropdownItem title={store.node.name} key={store.node.name}>
                                    <ol key={store.node.name} className='pl-10 list-disc marker:text-red-500'>
                                        {
                                            store.node.desc.map(item => (
                                                <li key={item}>{item}</li>
                                            ))
                                        }
                                        <li 
                                            key={store.node.link}
                                        >
                                            Visit the page {" "}
                                            <a 
                                                href={store.node.link} 
                                                className="text-red-500" 
                                                target="_blank" 
                                                rel="noreferrer"
                                            >
                                                click here
                                            </a>
                                        </li>
                                    </ol>
                                </DropdownItem>
                            ))
                        }
                    </article>
                    <article className='my-3 text-left md:text-lg md:border-l-[3px] md:border-red-500 md:pl-4'>
                        <h4 className='text-xl font-semibold text-red-500 text-center md:text-2xl'>Independent Sellers</h4>
                        <p className='mb-3 text-center md:text-lg'>This is a list of sites used by independent Fumo sellers.</p>
                        {
                            independentSellers.map(store => (
                                <DropdownItem title={store.node.name} key={store.node.name}>
                                    <ol key={store.node.name} className='pl-10 list-disc marker:text-red-500'>
                                        {
                                            store.node.desc.map(item => (
                                                <li key={item}>{item}</li>
                                            ))
                                        }
                                        <li 
                                            key={store.node.link}
                                        >
                                            Visit the page {" "}
                                            <a 
                                                href={store.node.link} 
                                                className="text-red-500" 
                                                target="_blank" 
                                                rel="noreferrer"
                                            >
                                                click here
                                            </a>
                                        </li>
                                    </ol>
                                </DropdownItem>
                            ))
                        }
                    </article>
                </section>
            </div>
        </section>
    )
}

export default Resellers