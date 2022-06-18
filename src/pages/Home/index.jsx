import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Info from "../../components/Info/Info";
import Admission from "../../components/Admission/Admission";
import About from "../../components/About/About";
import News from "../../components/News/News";
import Calendar from "../../components/Calendar/Calendar";
import Footer from "../../components/Footer/Footer";
import SchoolSection from "../../components/SchoolSection";


function Home() {
  return (
    <>
      <div className="Home">
        <Hero />
        <Admission />
        {/* <SchoolSection /> */}
        <News />
        <About />
        <Calendar />
        <Info />
        <Footer />
      </div>
    </>
  )
}

export default Home;