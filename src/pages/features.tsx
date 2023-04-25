// import FeaturesCards from '~/components/fatures'
import FeatureSteps from '~/components/featureSteps'
import FeaturesTemplate from '~/components/featuresCards'
import FeaturesContent from '~/components/featuresContent'
import Footer from '~/components/footer'
import { Header } from '~/components/header'
import Logos from '~/components/logos'

const Features = () => {
  return (
    <>
        <Header/>
        <FeaturesContent/>
        <Logos/>
        <FeaturesTemplate/>
        {/* <FeatureSteps/> */}
        <Footer/>
    </>
  )
}

export default Features