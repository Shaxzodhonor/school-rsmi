import "./Info.scss";

import { Link } from "react-router-dom";

import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SchoolIcon from '@mui/icons-material/School';
import PublicIcon from '@mui/icons-material/Public';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


function Info() {

  return(
    <section className="info" id="info">
        <div className="container">
        <div className="info-wrap">
          <ul className="list">
            <li className="item">
              <div className="icon-wrap">
                <LocalLibraryIcon className="icon"/>
              </div>
              <div className="content">
                <h3 className="title">Kutubxona</h3>
                <p className="text">
                 Kutubxonamizdagi kitob jamg'armasining miqdori 2020 - 2022 o'quv yilida 64324 ta nusxani tashkil qiladi. Shu hisobdan:
                </p>
                <Link className="btn" to={"#"}>Ko'proq<ArrowRightIcon/></Link>
              </div>
            </li>
            <li className="item">
              <div className="icon-wrap">
                <SchoolIcon className="icon"/>
              </div>
              <div className="content">
                <h3 className="title">O'quvchilarimiz</h3>
                <p className="text">
                  Hozirda o'quvchilarimiz soni 829 tani tashkil qiladi. Shulardan:
                </p>
                <Link className="btn" to={"#"}>Ko'proq <ArrowRightIcon/></Link>
              </div>
            </li>
            <li className="item">
              <div className="icon-wrap">
                <PublicIcon className="icon"/>
              </div>
              <div className="content">
                <h3 className="title">Hamkorlarimiz</h3>
                <p className="text">
                  Maktabimiz Respublika va xalqaro nufuzli tashkilotlar bilan aloqaga ega...
                </p>
                <Link className="btn" to={"#"}>Ko'proq <ArrowRightIcon/></Link>
              </div>
            </li>
            <li className="item">
              <div className="icon-wrap">
                <LocalLibraryIcon className="icon"/>
              </div>
              <div className="content">
                <h3 className="title">O'quvchilar turargohi</h3>
                <p className="text">
                  Turargohimiz 120 o'ringa mo'ljallangan bo'lib qayta kapital ta'mirdan chiqarilgan...
                </p>
                <Link className="btn" to={"#"}>Ko'proq <ArrowRightIcon/></Link>
              </div>
            </li>
          </ul>
        </div>
        </div>
    </section>
  )
}

export default Info;