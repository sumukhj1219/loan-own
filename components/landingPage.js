import React from 'react'
import VideoThumbnail from './header'
import Features from './features'
import Footer from './footer'
import Header from './header'
import { DotBackgroundDemo } from './grids'

const LandingPage = () => {
  return (
    <div>
      <DotBackgroundDemo>
      <Header />
      </DotBackgroundDemo>
        <Features />
        <Footer />
    </div>
  )
}

export default LandingPage