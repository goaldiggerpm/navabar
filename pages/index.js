import { Fragment, useState, useEffect } from 'react'
import Head from 'next/head'
// import Image from 'next/image'
import dynamic from "next/dynamic";
// import MyProgressSlider from "../components/Slider";

// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

import logo from '../public/images/Logonew.svg'


const MyProgressSlider = dynamic(
  () => import("../components/Slider"),
  { ssr: false }
)
export default function Home() {

  // const ProgressSlider = dynamic(() => import("../components/Slider"));

  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
    // lockThis()
  }


  const lockThis = () => {
    if (!isOpen) {
      document.body.style.overflow = "auto";
      document.body.style.userSelect = "auto";
    }
    else {
      document.body.style.overflow = "hidden";
      document.body.style.userSelect = "none";
    }
  }


  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {

      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);


  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="navbar" style={{ visibility: show ? 'visible' : 'hidden', backgroundColor: '#f7f9fe ' }}  >
        <div className="navbar-box">
          <button onClick={toggleDrawer}>Show</button>
        </div>
      </div>

      <main className="container-holder" >
        <div>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='top'
            className='bla bla bla'
          >

            <div className="header-box" >
              <div className="header-tab" >

                <button onClick={toggleDrawer}>Show</button>
              </div>
              <div className="header-link" >
                <p>Home 1</p>
                <p>Home 2</p>
                <p>Home 3</p>
                <p>Home 4</p>
                <p>Home 5</p>
                <p>Home 6</p>
              </div>
            </div>
          </Drawer>
        </div>
        <div className="containerTTTT one" ></div>
        <div className="containerTTTT two" ></div>
        <div className="containerTTTT three" ></div>
        <div className="containerTTTT four" ></div>

      </main>

      <footer >

      </footer>
    </div>
  )
}
