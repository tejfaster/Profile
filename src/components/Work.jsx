import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import data from "../assets/data.json"

const Work = () => {
    return (
        <div id="work">
            <h2>WORK</h2>
            <section>
                <article>
                    <Carousel
                    showArrows={false}
                    showIndicators={false}
                    showStatus={false}
                    showThumbs={false}
                    interval={1000}
                    infiniteLoop={true}
                    autoPlay
                    >
                        {
                            data.projects.map(item => {
                                return (
                                    <div
                                        key={item.title}
                                        className='workItem'
                                    >
                                        <img src={item.imgSrc} alt={item.title} />
                                        <aside>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                            <a target={"blank"} href={item.url}>View Demo</a>
                                        </aside>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </article>
            </section>
        </div>
    )
}

export default Work