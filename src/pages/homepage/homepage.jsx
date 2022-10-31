import Contact from "../../components/contact/Contact"
import Footer from "../../components/footer/Footer"
import Presentation from "../../components/presentation/Presentation"
import WhyDonateBlood from "../../components/whyDonateBlood/WhyDonateBlood"

function Home(){
  return (
		<>
			<Presentation/>
			<WhyDonateBlood/>
			<Contact/>
			<Footer/>
		</>
  )
}

export default Home