import "./style.scss";

import MusicNoteIcon from '@mui/icons-material/MusicNote';

function SchoolSection () {

  return (
    <section className="school-section" id="school-section">
      <div className="container wrap">
        <div className="card">
          <div className="img-wrap">
            <MusicNoteIcon  />
          </div>
          <div className="content-wrap">
            <div className="title">
              Musiqa Bo'limi
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img-wrap">

          </div>
          <div className="content-wrap">
            <div className="title">
              Rassomchilik bo'limi
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img-wrap">
            <img src="" alt="images" />
          </div>
          <div className="content-wrap">
            <div className="title">
              Umum ta'lim bo'limi
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default SchoolSection;