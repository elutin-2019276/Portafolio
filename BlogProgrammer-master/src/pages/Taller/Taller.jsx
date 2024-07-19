import { Navbar } from "../../components/Navbar.jsx";
import fondo from '../../assets/img/Fondo.png';
import { TallerContent } from "../../components/TallerContent.jsx";
import './Taller.css';

export const Taller = () => {
  return (
    <div className="dashboard-main">
        <img className="fond-homepage" src={fondo} alt="imagenDiario" />
      <Navbar />
      <div className="title-section">5to Diversificado</div>
      <div className="container-project">
        <div className="theme-data">
            <p>
            La informática es una disciplina fundamental en la era digital moderna, abarcando el estudio, diseño, 
            desarrollo y aplicación de sistemas de software y hardware que facilitan el procesamiento de información. 
            Este campo se centra en la manipulación de datos y la automatización de procesos a través de algoritmos y sistemas computacionales.
            <br />

            <br />

          </p>
          <div class="terminal-loader">
            <div class="terminal-header">
              <div class="terminal-title">Compartir los proyectos de 5to diversificado implica mostrar y explicar las creaciones y desarrollos realizados durante este período educativo, donde los estudiantes aplican conocimientos adquiridos en diversas áreas académicas. Es una oportunidad para destacar las habilidades, el aprendizaje y la creatividad desarrollados a lo largo del curso.</div>
              <div class="terminal-controls">
                <div class="control close"></div>
                <div class="control minimize"></div>
                <div class="control maximize"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="code-data">
            <p>
            El profesor Pedro Armas es reconocido por su dedicación y pasión en la enseñanza dentro del ámbito del quinto año de educación diversificada. Con una trayectoria enriquecedora en el campo educativo, el profesor Armas ha impactado positivamente a numerosos estudiantes a lo largo de los años, brindando no solo conocimientos académicos, sino también inspiración y orientación hacia el éxito académico y profesional.
            <br />
            <br />
            Durante su carrera docente, Pedro ha demostrado un compromiso excepcional con el éxito académico y personal de sus estudiantes. Su enfoque se centra en crear un ambiente de aprendizaje inclusivo y estimulante.
            </p>
        </div>
      </div>
      <br/>
      <TallerContent></TallerContent>
    </div>
  );
};     
