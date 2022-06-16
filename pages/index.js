import { Fragment, useState } from 'react'
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
  }

  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container-holder" >



        <div  >
          <>
            <div className="navbar" >
              <button onClick={toggleDrawer}>Show</button>

            </div>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction='top'
              className='bla bla bla'
            >

              <div className="header-box" >
                <div className="header-tab" >
                  <img src={logo} alt='logo' />
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
          </>
        </div>

      </main>

      <footer >

      </footer>
    </div>
  )
}
