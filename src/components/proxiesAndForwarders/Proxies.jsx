import React from 'react'

import ProsConsTable from './ProsConsTable'
import Paragraph from '../utils/Paragraph'
import Table from '../utils/Table'
import { graphql, useStaticQuery } from 'gatsby'

const Proxies = () => {

    const data = useStaticQuery(graphql`
        query proxiesAndForwarders {
            allForwardersJson {
                edges {
                    node {
                        name
                        per_package
                        consolidation
                        notes
                    }
                }
            }
            allProxiesJson {
                edges {
                    node {
                        name
                        per_order
                        other_fees
                        consolidation
                        sniper_bids
                        notes
                    }
                }
            }
        }
    `)

    const forwarders = data.allForwardersJson.edges
    const proxies = data.allProxiesJson.edges

    return (
        <section className='w-full'>
            <div className='w-[90%] mx-auto mt-5 text-center'>
                <h2 className='text-3xl text-red-500 font-semibold'>Proxies And Forwarders</h2>

                <section>
                    <Paragraph>
                        Many Japanese companies (including Gift and various resellers and storefronts) 
                        don't want to deal with shipping outside of Japan, for various reasons. 
                        However, people outside of Japan can still order from them through the use of a proxy 
                        or a forwarder. Keep in mind that, depending on your country, you may have to pay import 
                        taxes, customs, or other fees.
                    </Paragraph>

                    <Paragraph>
                        A forwarder provides a package forwarding service. They will provide you a Japanese 
                        address (similar to a P.O. box in the United States) for you to have goods shipped to,
                        and will forward any packages that arrive at that address to your real, overseas address. 
                        Some forwarders also provide package consolidation services that can saving on shipping 
                        and customs costs. Note: to comply with Japanese anti-gang laws, forwarders will require you
                        to demonstrate proof of address and identity before actually forwarding your package. 
                        Typically, this is a photo of your ID and a bill with your name and address.
                    </Paragraph>

                    <Paragraph>
                        A proxy is similar to a forwarder, except that they will place the online order for you.
                        Typically, you provide a link to the item you want to buy and a brief description of the item,
                        and then the proxy provides status updates as the order/delivery process proceeds. 
                        Many proxies require a deposit. Some storefronts refuse to do business with proxy services, 
                        although Gift is not known to turn away proxies.
                    </Paragraph>
                </section>
                <section className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <ProsConsTable 
                        title="Proxies"
                        content={[
                            {
                                pro: "Simple - minimal knowledge of japanese needed.",
                                con: "If you can't pay directly, a proxy may offer alternate payment systems."
                            },
                            {
                                pro: "Unreliable - may fail to place an order if volume is too high or auction is too competitive.",
                                con: "Tends to be more expensive than a forwarder."
                            }
                        ]}
                    />
                    <ProsConsTable 
                        title="Forwarders"
                        content={[
                            {
                                pro: "Reliable - you have full control over placing the order.",
                                con: "Complex - requires some understanding of Japanese addresses."
                            },
                            {
                                pro: "Tends to be cheaper than a proxy.",
                                con: "Requires verifying your identity to satisfy Japanese anti-gang laws. Just in case."
                            }
                        ]}
                    />
                </section>
                <section className='flex flex-col text-center'>
                    <p className='mb-4'>
                        The following is a partial list of Proxy and Forwarding services, 
                        with some basic information about each. Note: fees do not include shipping costs, 
                        since they vary dramatically based on destination and store. Please keep in mind that 
                        there are two shipping costs: one from the seller to the proxy/forwarder, 
                        and one from the proxy/forwarder to you.
                    </p>
                    <p>
                        This information is not guaranteed to be correct or up-to-date, 
                        but please let us know if it's wrong. Fees do not include shipping costs.
                    </p>
                </section>
                <section>
                    <Table
                        data={forwarders}
                        title="Forwarders"
                        headers={[
                            "Name",
                            "Cost Per Package",
                            "Consolidation Fees",
                            "Notes"
                        ]}
                    />
                    <section>
                        <p>
                            Sniper Bids are bids placed close to the end of an auction. 
                            Costs per order are often reduced when ordering multiple items from the same seller
                            in a 24 hour period. Check the individual sites for more information.
                        </p>
                    </section>
                    <Table
                        data={proxies}
                        title="Proxies"
                        headers={[
                            "Name",
                            "Cost Per Order",
                            "Other Fees",
                            "Consolidation Fees",
                            "Guaranteed Sniper Bid Timing",
                            "Notes"
                        ]}
                    />
                </section>
            </div>
        </section>
    )
}

export default Proxies