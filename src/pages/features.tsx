// import FeaturesCards from '~/components/fatures'
import FeatureSteps from '~/components/featureSteps'
import FeaturesTemplate from '~/components/featuresCards'
import FeaturesContent from '~/components/featuresContent'
import Footer from '~/components/footer'
import { Header } from '~/components/header'
import Logos from '~/components/logos'
import Testimonials from '~/components/testimonials'

const Features = () => {
  return (
    <>
        <Header/>
        <FeaturesContent/>
        <Logos/>
        <FeaturesTemplate/>
        <Testimonials/>
        <Footer/>
    </>
  )
}

export default Features