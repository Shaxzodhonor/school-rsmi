import "./Hero.scss";


// vedios
import BackVedio from "../../assets/vedio/bg-vedio-1.mp4"

function Hero(){
  return(
    <div className="hero">
      <div className="hero-wrap">
        <div className="vedio-wrap">
          <video loop autoPlay muted width={"100%"}>
            <source src={BackVedio} type="video/mp4" />
          </video>
        </div>
        <div className="content-wrap">
          <h1>RESPUBLIKA IXTISOSLASHTIRILGAN SAN'AT <br></br>MAKTABI - INTERNATI</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero;