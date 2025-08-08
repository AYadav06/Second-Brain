
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { Testimonial } from '../components/Testimonial'
import { Footer } from '../components/Footer'


export const Home = () => {
  return (
    <div className=''>
        <Navbar />
        <Hero/>
        {/* <StickyNotesDemo /> */}
        <Testimonial />
        <Footer />
    </div>
  )
}

// bg-gradient-to-br from-primary via-dark-bg to-primary
