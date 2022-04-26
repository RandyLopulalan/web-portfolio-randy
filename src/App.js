import React from 'react'
import { About, Contact, Experience, Footer, Header, Portfolio } from './Pages'
// , Services, Testimonials

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Experience />
      <Portfolio />
      {/* <Services />
      <Testimonials /> need install swiperjs react for slider */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App