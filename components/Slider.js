import React, { useEffect, useRef, useState, Fragment } from 'react';

// library
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Slider() {

    if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }

    var tl = gsap.timeline();

    useEffect(() => {

        gsap.fromTo(".mega-container", { opacity: 0, y: 30 }, { delay: 0.2, duration: 0.9, opacity: 1, y: 0, ease: "power-4.out" })

    }, [])


    return (

        <main className="container-yard" >

            <section className="mega-container" >
                <div className="progessbar-container" >
                    <progress></progress>
                </div>
                <div className="slider-container" >

                    <section className="section" id="story1">
                        <span className="sectionTitleOne" id="title1">Scene One</span>
                    </section>

                    <section className="section" id="story2">
                        <span className="sectionTitleTwo" id="title1">Scene Two</span>
                    </section>

                    <section className="section" id="story3">
                        <span className="sectionTitleThree" id="title1">Scene Three</span>
                    </section>

                    <section className="section" id="story4">
                        <span className="sectionTitleFour" id="title1">Scene Four</span>
                    </section>

                </div>
            </section>

        </main>

    )
}

export default Slider