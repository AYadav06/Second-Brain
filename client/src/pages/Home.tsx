
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { FeaturesC } from '../components/FeaturesC'
import { Testimonial } from '../components/Testimonial'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div className='bg-gradient-to-br from-primary via-dark-bg to-primary'>
        <Navbar />
        <Hero />
        <FeaturesC />
        <Testimonial />
        <Footer />
    </div>
  )
}
