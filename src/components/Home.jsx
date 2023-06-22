import React from 'react'
import { animate, motion } from "framer-motion"
import Typewriter from 'typewriter-effect'
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs"
import me from "../assets/tej__logo.png"
// import mewb from "../assets/tej__WB_logo.png"

const Home = () => {
    const clientCount = React.useRef(null)
    const projectsCount = React.useRef(null)

    const animationCount = (count, refdata) => {
        console.log(count)
        animate(0, count, {
            duration: 1,
            onUpdate: (v) => refdata.current.textContent = v.toFixed()
        })
    }
    
    const animations = {
        h1: {
            initial: {
                x: "-10%",
                opacity: 0
            },
            whileInView: {
                x: 0,
                opacity: 1
            }
        },
        button: {
            initial: {
                y: "-10%",
                opacity: 0
            },
            whileInView: {
                y: 0,
                opacity: 1
            }
        }
    }
    return (
        <div id="home">
            <section>
                <div>
                    <motion.h1 {...animations.h1} >Hi, I am <br /> Tej Pratap</motion.h1>
                    <Typewriter options={{
                        strings: ["A Developer", "A Designer", "A Creator"],
                        autoStart: true,
                        loop: true,
                        cursor: "",
                        wrapperClassName: "typewriterpara"
                    }} />
                    <div>
                        <a href='mailto: tejfaster55@gmail.com' target="_top">Hire Me</a>
                        <a href="#work">Projects <BsArrowUpRight /> </a>
                    </div>
                    <article>
                        <p>
                            +<motion.span whileInView={() => animationCount(100, clientCount)} ref={clientCount}></motion.span>
                        </p>
                        <span>Client Worldwide</span>
                    </article>
                    <aside>
                        <article>
                            <p>
                                +<motion.span whileInView={() => animationCount(500, projectsCount)} ref={projectsCount}></motion.span>
                            </p>
                            <span>Project Done</span>
                        </article>
                        <article>
                            <p>Contact</p>
                            <span>tejfaster55@gmail.com</span>
                        </article>
                    </aside>
                </div>
            </section>
            <section>
                <img src={me} alt="Tej Pratap" />
            </section>
            <BsChevronDown />
        </div>
    )
}

export default Home